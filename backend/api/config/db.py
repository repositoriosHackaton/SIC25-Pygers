from datetime import datetime
from pydantic import BaseModel

# Class of the database
class BD:
    def __init__(self, user_data: dict, embedding: float):
        self.user_data = user_data
        self.embedding = embedding
        self.bd = []
    
    def get_db(self):
        return self.bd

    def get_embeddings(self):
        response = []
        for data in self.bd:
            response.append(
                {"id": data["id"], "embedding": data["embedding"]}
            )
        return response
    
    def new_user_data(self, user_data: dict) -> None:
        self.bd.append(user_data)

# Class of the persons to reserve at the hotel
class User(BaseModel):
    full_name : str
    email : str
    phone : str
    image : str

# Class of the reserves
class ReserveUser(BaseModel):
    def __init__(self, full_name, email, phone, image, arrival_time: datetime, daparture_time: datetime, num_guests, room_type, pay_type):
        User.__init__(full_name, email, phone, image)
        
        self.arrival_time = arrival_time
        self.daparture_time = daparture_time
        self.num_guests = num_guests
        self.room_type = room_type
        self.pay_type = pay_type
    
    def get_user_data(self) -> dict:

        pass
