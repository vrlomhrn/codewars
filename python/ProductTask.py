shoes = INPUT("Enter 1st goods to buy: shoes")
quantity1 = INT(INPUT("How many pcs: quantity1")) 
payment1 = INT(INPUT("1st price is: payment1"))

clothes = INPUT("Enter 2nd goods to buy:clothes")
quantity2 = INT(INPUT("How many pcs: quantity2"))
payment2 = INT(INPUT("2nd price is: payment2"))

leggings = INPUT("Enter 3rd goods to buy: leggings")
quantity3 = INT(INPUT("How many pcs: quantity3"))
payment3 = INT(INPUT("3rd price is: payment3"))

shoes2 = INPUT("Enter 4th goods to buy: shoes")
quantity4 = INT(INPUT("How many pcs: quantity4"))
payment4 = INT(INPUT("4th price is: payment4"))

caps = INPUT("Enter 5th goods to buy: caps5")
quantity5 = INT(INPUT("How many pcs: quantity5"))
payment5 = INT(INPUT("5th price is: payment5"))

payment = ((quantity1 * payment1) + (quantity2 * payment2) + (quantity3 * payment3) + (quantity4 + payment4) + (quantity5 + payment5))

print quantity1, shoes, quantity2, clothes, quantity3, leggings, quantity4, shoes2, quantity5, caps
print " Your total payment is: "
print payment
