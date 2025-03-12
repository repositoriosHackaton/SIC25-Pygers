
import torch
from PIL import Image
from typing import Dict, List, Tuple
import numpy as np
from io import BytesIO
from facenet_pytorch import MTCNN, InceptionResnetV1
from scipy.spatial.distance import euclidean
import cv2

class FaceRecognitionModel:
    def __init__(self):
        self.known_face_embeddings: Dict[str, torch.Tensor] = {}
        self.umbral: float = 0.36
        self.device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
        
        self.mtcnn = MTCNN(
            select_largest=True,
            keep_all=False,
            min_face_size=20,
            thresholds=[0.6, 0.7, 0.7],
            post_process=False,
            image_size=160,
            device=self.device
        ).eval()
                
        self.encoder = InceptionResnetV1(
            pretrained='vggface2',
            classify=False,
            device=self.device
        ).eval()

    def get_embeddings(self, image: Image.Image):
        face = self.mtcnn.forward(image)

        if face is not None:
            embedding = self.encoder(face.unsqueeze(0)).detach().cpu()
            embedding = embedding / embedding.norm(p=2, dim=1, keepdim=True)
            return embedding
        return None


    def search_guests(self, image):
        guests_embeddings = [{"id":1, "embedding": [123]}] # Embeddings from database
        processed_img = self.pre_process_image(image)
        embedding_img = self.get_embeddings(processed_img)
                
        if embedding_img is not None:
            for guest in guests_embeddings:
                distance = euclidean(embedding_img.view(-1), guest["embedding"].view(-1))
                print(distance)
                if distance <= self.umbral:
                    print(guest) 
                    return guest



    def pre_process_image(self, image: Image.Image) -> Image.Image:
        sizes = (400, 400)
        img = image.convert("RGB")
        exif = img.getexif()
        orientation = exif.get(274, 1)
        
        if orientation == 3:
            img = img.rotate(180, expand=True)
        elif orientation == 6:
            img = img.rotate(270, expand=True)
        elif orientation == 8:
            img = img.rotate(90, expand=True)
        
        return img.resize(sizes, Image.LANCZOS)



def main():
    model = FaceRecognitionModel()
    img = Image.open("images.jpg")
    print(model.get_embeddings(img))

if __name__ == "__main__": 
    main()

