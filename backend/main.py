from fastapi import FastAPI, File, UploadFile, Depends, HTTPException, status
from typing import List, Annotated
from PIL import Image
import os
from api.services.ai import FaceRecognitionModel

# Responses
from fastapi.responses import FileResponse
from fastapi.responses import JSONResponse

# routers
from api.routers import recepcionist

# security
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware import Middleware
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()

# Routers to the project
app.include_router(recepcionist.router)

# Model AI
face_model = FaceRecognitionModel()

# Connect with the frontend
origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = 'api/images'
os.makedirs(UPLOAD_FOLDER, exist_ok = True)

