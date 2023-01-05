from pets import Pet

class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
        
    def walk(self):
        print("Going for a walk!", self.pet.play())
    
    def feed(self):
        print("Feeding the pet!", self.pet.eat())
    
    def bathe(self):
        print("Giving the pet a bath!", self.pet.noise())
        


caly = Pet("Caly", "dog", "sit", "100", 20)
sophie = Ninja("Sophie,", "Slagle", 20, 100, caly)

sophie.walk()
