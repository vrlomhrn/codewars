def isDivideBy(number, a, b):
    if(number % a == 0 and number % b == 0):
        return True
    else:
        return False


print(isDivideBy(8, 2, 4), True)
print(isDivideBy(12, -3, 4), True)
print(isDivideBy(8, 3, 4), False)
print(isDivideBy(48, 2, -5), False)
print(isDivideBy(-100, -25, 10), True)
print(isDivideBy(10000, 5, -3), False)
print(isDivideBy(4, 4, 2), True)
print(isDivideBy(5, 2, 3), False)
print(isDivideBy(-96, 25, 17), False)
print(isDivideBy(33, 1, 33), True)