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
            
        return None

    # Save users in the db
    def create_user(self, user_data: dict, embedding) -> None:
        id_user = len(self.bd) + 1

        data = {
            "id" : id_user,
            "user_data" : user_data,
            "embedding" : embedding
        }
        
        # Falta agregar cómo se obtiene el embedding
        self.bd.append(data)