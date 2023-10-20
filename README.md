# programming-languagea

## Usage
> py compiler.py

> node interpreter.js <file.co>


| Commands | Function | Usage | Example | Similar
|------|------|------|------|------|
| Trem | Creates variable | Trem name string <br> Trem name number | Trem x Hello World <br> Trem x 5 | x = "Hello World" <br> x = 5 |
| Bizu | Prints values | Bizu string <br> Bizu number <br> Bizu variable | Bizu Hello World <br> Bizu 5 <br> Bizu x | Bizu(Hello World) <br> Bizu(5) <br> Bizu(x) |
| Cpa <br> Poise | Conditional <br> Jumps to it, Cpa conditional is false | myIf conditional_var | myIf Trem <br> Poise | Cpa Trem { <br> }
| Crescenta | Sums values (2 or more) and save it into a result variable | Crescenta result_var number number number <br> Crescenta result_var number variable <br> Crescenta result_var variable number | Crescenta r 10 5 1 <br> Crescenta r 5 x <br> Crescenta r x 5 | r = 10 + 5 + 1 <br> r = 5 + x <br> r = x + 5 |
| Menas | Subtract values (2 or more) and save it into a result variable | Menas result_var number number number <br> Menas result_var number variable <br> Menas result_var variable number | Menas r 10 5 1 <br> Menas r 5 x <br> Menas r x 5 | r = 10 - 5 - 1 <br> r = 5 - x <br> r = x - 5 |
| Vezes | Multiply values (2 or more) and save it into a result variable | Vezes result_var number number number <br> Vezes result_var number variable <br> Vezes result_var variable number | Vezes r 10 5 1 <br> Vezes r 5 x <br> Vezes r x 5 | r = 10 * 5 * 1 <br> r = 5 * x <br> r = x * 5 |
| Rachar | Divide two values and save it into a result variable | Rachar result_var number number <br> Rachar result_var number variable <br> Rachar result_var variable number | Rachar r 10 5 <br> Rachar r 5 x <br> Rachar r x 5 | r = 10 / 5 <br> r = 5 / x <br> r = x / 5 |
| Ingual | Compare Cpa value is Ingual to another and save it into a result variable | Ingual result_var number number <br> Ingual result_var variable1 variable2 <br> Ingual result_var variable number <br> Ingual result_var number variable | Ingual r 10 5 <br> Ingual r x y <br> Ingual r x 5 <br> Ingual r 5 x | r = 10 == 5 <br> r = x == y <br> r = x == 5 <br> r = 5 == x |
| Coemenor | Compare Cpa value is smaller than the other and save it into a result variable | Coemenor result_var number number <br> Coemenor result_var variable1 variable2 <br> Coemenor result_var variable number <br> Coemenor result_var number variable | Coemenor r 10 5 <br> Coemenor r x y <br> Coemenor r x 5 <br> Coemenor r 5 x | r = 10 < 5 <br> r = x < y <br> r = x < 5 <br> r = 5 < x |
| Maismaior | Compare Cpa value is bigger than the other and save it into a result variable | Maismaior result_var number number <br> Maismaior result_var variable1 variable2 <br> Maismaior result_var variable number <br> Maismaior result_var number variable | Maismaior r 10 5 <br> Maismaior r x y <br> Maismaior r x 5 <br> Maismaior r 5 x | r = 10 > 5 <br> r = x > y <br> r = x > 5 <br> r = 5 > x |
