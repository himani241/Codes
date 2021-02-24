import  random #random module
#snake,water,gun:
# snake and water = snake and gun = gun and water = True
def game(comp,you):#function
    if comp == you:
        return None
    elif comp =='s':
        if you == 'w':
            return False
        elif you == 'g':
            return True
    elif comp == 'w':
        if you == 'g':
            return False
        elif you =='s':
            return True
    elif comp=='g':
        if you == 's':
            return False
        elif you == 'w':
            return True

print("Comp Turn : Snake[s] ,Water[w] or Gun[g] ?")
randNo = random.randint(1,3)#random module
if randNo==1:
    comp = 's'
elif randNo==2:
    comp = 'w'
elif randNo==3:
    comp = 'g'

#user's input
you= input("Your Turn : Snake[1] ,Water[2] or Gun[3] : ")
a = game(comp, you)

print(f"Computer choose: {comp}")#fstring
print(f"You choose: {you}")

if a == None:
    print("The game is Tie!!")
elif a :
    print("You Won !!")
else:
    print("You Lose !!")



