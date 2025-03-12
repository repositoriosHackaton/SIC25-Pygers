import base64
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
async def create_reserve(
    full_name: Annotated[str, Form()],
    email: Annotated[str, Form()],
    phone: Annotated[str, Form()],
    arrival_time: Annotated[str, Form()],
    departure_time: Annotated[str, Form()],
    num_guests: Annotated[int, Form()],
    room_type: Annotated[str, Form()],
    pay_type: Annotated[str, Form()],
    image: Annotated[UploadFile, File()]
):

    # Save the information and foto at the database
    try: 
        image_bytes = await image.read()

        # Take the data at the form
        user_data = {
            "fullname" : full_name,
            "email" : email,
            "phone" : phone,
            "image" : image_bytes,
            "arrival_time" : arrival_time,
            "departure_time" : departure_time,
            "num_guests" : num_guests,
            "room_type" : room_type,
            "pay_type" : pay_type
        }
        
        # Get embedding
        img = Image.open(BytesIO(image_bytes))
        img = img.convert("RGB")
        embedding = face_model.get_embeddings(img)

        # Create to the user
        database.create_user(user_data = user_data, embedding = embedding)

        return JSONResponse({"message" : "user added successfully"}, 
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
        result = face_model.search_guests(image_pil, database)
        
        if result is not None:
            encoded_image = base64.b64encode(image_bytes).decode("utf-8")
            response = {
                "full_name" : result["fullname"],
                "email" : result["email"],
                "phone" : result["phone"],
                "arrival_time" : result["arrival_time"],
                "departure_time" : result["departure_time"],
                "num_guests" : result["num_guests"],
                "room_type" : result["room_type"],
                "pay_type" : result["pay_type"],
                "image" : encoded_image,
            }
            return JSONResponse({"data": response}, status_code = status.HTTP_200_OK)
        else:
            return JSONResponse({"data": None}, status_code = status.HTTP_404_NOT_FOUND)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

