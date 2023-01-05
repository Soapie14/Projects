
class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 50
        
        
        
    def sleep(self):
        add_energy = self.energy + (25)
        print(add_energy)
        
    def eat(self):
        add_energy = self.energy + (5)
        add_health = self.health + (10)
        print(add_energy, add_health)
        
    def play(self):
        add_health = self.health + (5)
        minus_energy= self.energy - (15)
        print(add_health)
        
    def noise(self):
        if self.type == ("dog"):
            print("Bark!")
        elif self.type == ("cat"):
            print("Meow")
        else: 
            print("Hello")


caly = Pet("Caly", "dog", "sit", "100", 20)

# caly.sleep()
# caly.noise()