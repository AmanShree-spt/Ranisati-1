import os

def main():
    for x in range(4):
        i = 1
        arr=['office/','home/','hotel/','others/']
        path = arr[x] 
        for filename in os.listdir(path):
            myDest = "restaurant"+str(i)+".jpg"
            mySource = path + filename
            myDest = path + myDest
            os.rename(mySource, myDest)
            i = i+1
        print(i)

main()
