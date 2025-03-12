from fastapi import APIRouter, UploadFile, File
from api.services.ai import FaceRecognitionModel
from fastapi import Form
from typing import List, Annotated
from fastapi.responses import JSONResponse
from api.config import db
import os
from io import BytesIO
from PIL import Image
from api.schemas.schemas import FormUserInput
from fastapi import HTTPException, status

router = APIRouter(prefix = "/hotel")
UPLOAD_FOLDER = 'api/images'
os.makedirs(UPLOAD_FOLDER, exist_ok = True)
# Instances to the users
database = db.BD()
# reception = db.ReserveUser()
face_model = FaceRecognitionModel()

@router.post("/reserves")
async def reserves():
    if not os.listdir("api/images/"):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail = "There is not images")
    return {"path_images" : os.listdir("api/images/")}

@router.post("/reservation")  
async def create_reserve(data: Annotated[FormUserInput, Form()], image : Annotated[UploadFile, File()]):

    # Save the information and foto at the database
    try: 
        image_bytes = await image.read()

        # Take the data at the form
        user_data = {
            "fullname" : data.full_name,
            "email" : data.email,
            "phone" : data.phone,
            "image" : image_bytes,
            "arrival_time" : data.arrival_time,
            "departure_time" : data.departure_time,
            "num_guests" : data.num_guests,
            "room_type" : data.room_type,
            "pay_type" : data.pay_type
        }
        
        # Get embedding
        img = Image.open(BytesIO(image_bytes))
        embedding = face_model.get_embeddings(img)

        # Create to the user
        database.create_user(user_data = user_data, embedding = embedding)

        JSONResponse({"success_msg" : "user added successfully"}, 
                status_code = status.HTTP_200_OK)
    except Exception as e: 
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST,
                            detail = f"Error {e}")

# endpoint to detect to the user
@router.post("/detect")
async def confirm_reservation(image: UploadFile):
    # Validar imagen
    if not image.filename.lower().endswith(('.jpg', '.png', 'jpeg')):
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST,
                            detail = "Image format don't accept")
    image_bytes = await image.read()

    # Conocer el resultado 
    try: 
        image_pil = Image.open(BytesIO(image_bytes))
    except Exception as e: 
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST,
                            detail = f"Err to open the image {e}")
    

    # Capturar las caras y comparar las imagenes 
    try:
        matches, matched_boxes = face_model.compare_face_with_known_faces(image_pil)
        response_data = []
        for i, (path, distance) in enumerate(matches):
            response_data.append({
                "known_face_path": path,
                "distance": distance,
                "box": matched_boxes[i].tolist()
            })
        if not response_data:
            return {"message": "No se encontraron coincidencias", "information" : response_data}
        return {"message": "Se encontraron coincidencias", "results": response_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


