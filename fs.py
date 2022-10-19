from numpy import swapaxes

def fibonacci(position):
    sequence=[0,1]
    if position>1:
        for i in range(0,position-1):
            tmp=sequence[0]
            sequence[0]=sequence[1]
            sequence[1]=tmp+sequence[1]
        print(sequence[1])
    else:
        print(sequence[position])



fibonacci(0)
fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)