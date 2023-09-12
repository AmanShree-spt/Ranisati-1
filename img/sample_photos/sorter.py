import os

def main():
    i = 1
    path = "restaurant/"
    for filename in os.listdir(path):
        myDest = "restaurant"+str(i)+".jpg"
        mySource = path + filename
        myDest = path + myDest
        os.rename(mySource, myDest)
        i = i+1
    print(i)
