from datetime import datetime
from pydantic import BaseModel
from fastapi import UploadFile

class FormUserInput(BaseModel):
    full_name : str
    email : str
    phone : str
    arrival_time : str
    daparture_time : str
    num_guests : int
    room_type : str
    pay_type : str
    image : UploadFile

datetime