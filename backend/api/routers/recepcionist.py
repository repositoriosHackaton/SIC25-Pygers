from fastapi import APIRouter
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(prefix = "/hotel")



# ENDPOINTS TO THE PROJECT
@router.post("/upload-reserve")
async def create_reserve():
    pass

@router.router("/upload-reserve")
async def create_reserve():
    pass