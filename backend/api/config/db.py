from datetime import datetime
from pydantic import BaseModel
from fastapi import HTTPException, status

# Class of the database
class BD:
    def __init__(self):
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
    
    def get_user_by_id(self, id_user):
        for user in self.bd:
            if user["id"] == id_user:
                return user["user_data"]
        
        raise HTTPException(
            status_code = status.HTTP_400_BAD_REQUEST,
            detail = "The user doesn't exist in the database")
    
    # Save users in the db
    def create_user(self, user_data: dict, embedding) -> None:
        id_user = len(self.db) + 1

        data = {
            "id" : id_user,
            "user_data" : user_data,
            "embedding" : embedding
        }
        
        # Falta agregar cómo se obtiene el embedding
        self.bd.append(data)
        
        for user in self.bd:
            print(user)

# Class of the reserves
# class ReserveUser():
#     def __init__(self, full_name, email, phone, image, arrival_time: datetime, daparture_time: datetime, num_guests, room_type, pay_type):
#         User.__init__(full_name, email, phone, image)
#         self.arrival_time = arrival_time
#         self.daparture_time = daparture_time
#         self.num_guests = num_guests
#         self.room_type = room_type
#         self.pay_type = pay_type
    
#     def get_user_data(self) -> dict:

#         pass
