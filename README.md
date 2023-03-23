# odin-shopping-cart

current known bugs

-when selecting amount of product to purchase initial value is
0, could alter to be '' and check value in the incrementer to avoid
converting to a string.

-when switching pages between items the current set quantity remains
(though it is reset to 0 when placing an order)

-if screen gets too small website styling breaks in catalogue (probably all)
not to mention the slew of other minor styling that its lacking

-not sure if i want the nav icon cart to grow with quantity purchased
or number of unique items purchased

-repeats item if multiple orders were placed in a row
ex item a, b, c available. if you order 3a then 2b then order
4 more a your checkout looks like
3a
2b
4a
instead of 
7a
2b

could fix that one a few simple ways at a few different junctions.