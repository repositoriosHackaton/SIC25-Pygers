from datetime import datetime
from pydantic import BaseModel
from fastapi import UploadFile

class FormUserInput(BaseModel):
    full_name : str
    email : str
    phone : str
    arrival_time : datetime
    daparture_time : datetime
    num_guests : int
    room_type : str
    pay_type : str
    image : UploadFile