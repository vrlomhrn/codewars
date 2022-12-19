#TODO Soal Nomor 1
import random
productCode = random.randint(0, 10000000)
productName = input('Input product name: ')
price = int(input('Put the price here: '))
amount = int(input('Select the amount: '))
discount = int(input('Did u have discount? (please write without percentage.) '))
countDiscount = (discount / 100) * price
totalPayment = (price * amount) - (countDiscount * amount)

print('Product Code: ', productCode)
print('Product Name: ', productName)
print('Price: ', price)
print('Discount: ' + str(discount) + '%')
print('Amount: ', amount)
print('Total:', totalPayment)