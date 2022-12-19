def binary_array_to_number(arr):
    result = 0
    index = 1
    for num in arr[::-1]:
        result += index * num
        index *= 2
    return result

print(binary_array_to_number([0,0,0,1]), 1)
print(binary_array_to_number([0,0,1,0]), 2)
print(binary_array_to_number([1,1,1,1]), 15)
print(binary_array_to_number([0,1,1,0]), 6)