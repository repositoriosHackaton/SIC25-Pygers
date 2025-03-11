

class BD:
    def __init__(self, id_user: int, user_data: dict, embedding: float, bd: list):
        self.id_user = id_user
        self.user_data = user_data
        self.embedding = embedding
        self.bd = bd
    
    def get_db(self):
        return self.bd