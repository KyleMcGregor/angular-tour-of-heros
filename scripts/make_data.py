from faker import Faker
import random

def makePrice(): 
   return random.randint(10000, 1000000) / 100

def makeHeroes(): 
   for _ in range(1,10): 
      

if __name__=='__main__':
   fake = Faker()
   i = 0
   res = []
   heroes = open("../src/app/mock-heroes.ts", "+w", )

   while i < 10:
      heroes.write(fake.name())

   