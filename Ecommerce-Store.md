1. START
2. Initialize empty cart array: cart = []
3. Display "Shopping Cart System Started"

// ADD TO CART
4. Function ADD_TO_CART(product):
5.    Check current total quantity in cart: totalQty = SUM all item.quantity
6.    IF (totalQty + product.quantity) > 100:
7.        Display "Cart cannot exceed 100 items"
8.        RETURN
9.    Find existingProduct WHERE id == product.id
10.   IF existingProduct FOUND:
11.       existingProduct.quantity += product.quantity
12.   ELSE:
13.       Add new product to cart WITH quantity
14.   Display "Added [product.name] to cart"

// REMOVE FROM CART
15. Function REMOVE_FROM_CART(productId):
16.   Find itemIndex WHERE cart[itemIndex].id == productId
17.   IF itemIndex FOUND:
18.       Remove item FROM cart AT itemIndex
19.       Display "Removed product ID: [productId]"
20.   ELSE:
21.       Display "Product not found in cart"

// CALCULATE TOTAL PRICE
22. Function CALCULATE_TOTAL():
23.   Initialize total = 0
24.   FOR EACH item IN cart:
25.       total += item.price * item.quantity
26.   RETURN total

// CALCULATE AVERAGE PRICE
27. Function CALCULATE_AVERAGE():
28.   totalPrice = CALCULATE_TOTAL()
29.   totalQty = SUM all item.quantity
30.   IF totalQty == 0:
31.       RETURN 0
32.   RETURN totalPrice / totalQty

// BONUS: FILTER PRODUCTS
33. Function FILTER_PRODUCTS(maxPrice):
34.   Initialize filteredList = []
35.   FOR EACH item IN cart:
36.       IF item.price <= maxPrice:
37.           ADD item TO filteredList
38.   RETURN filteredList

// SORT CART
39. Function SORT_CART(order):
40.   IF order == 'asc':
41.       SORT cart BY item.price ASCENDING
42.   ELSE:
43.       SORT cart BY item.price DESCENDING

// CLEAR CART
44. Function CLEAR_CART():
45.   SET cart = []
46.   Display "Your cart is empty"

47. Display "Shopping Cart System Ready"
48. END