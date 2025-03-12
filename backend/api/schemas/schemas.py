from datetime import datetime
from pydantic import BaseModel
from fastapi import UploadFile, File
from typing import Annotated

class FormUserInput(BaseModel):
    full_name : str
    email : str
    phone : str
    arrival_time : str
    departure_time : str
    num_guests : int
    room_type : str
    pay_type : str