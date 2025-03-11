from datetime import datetime

# Class of the database
class BD:
    def __init__(self, user_data: dict, embedding: float):
        self.id_user = 0
        self.user_data = user_data
        self.embedding = embedding
        self.bd = []
    
    def get_db(self):
        return self.bd
    
    def new_user_data(self, user_data: dict) -> None:
        if user_data.full_name not in user_data:
            self.bd.append(user_data)

# Class of the persons to reserve at the hotel
class User:
    def __init__(self, full_name: str, email: str, phone: str,  image) :
        self.full_name = full_name
        self.email = email
        self.phone = phone
        self.image = image

# Class of the reserves
class ReserveUser(User):
    def __init__(self, full_name, email, phone, image, arrival_time: datetime, daparture_time: datetime, num_guests, room_type, pay_type):
        User.__init__(full_name, email, phone, image)
        
        self.arrival_time = arrival_time
        self.daparture_time = daparture_time
        self.num_guests = num_guests
        self.num_guests = room_type
        self.pay_type = pay_type
    
    def get_user_data(self) -> dict:

        pass