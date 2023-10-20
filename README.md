# programming-language

## Usage
> py compiler.py

> node interpreter.js <file.co>


| Commands | Function | Usage | Example | Similar
|------|------|------|------|------|
| var | Creates variable | var name string <br> var name number | var x Hello World <br> var x 5 | x = "Hello World" <br> x = 5 |
| print | Prints values | print string <br> print number <br> print variable | print Hello World <br> print 5 <br> print x | print(Hello World) <br> print(5) <br> print(x) |
| if <br> endIf | Conditional <br> Jumps to it, if conditional is false | myIf conditional_var | myIf var <br> endIf | if var { <br> }
| add | Sums values (2 or more) and save it into a result variable | add result_var number number number <br> add result_var number variable <br> add result_var variable number | add r 10 5 1 <br> add r 5 x <br> add r x 5 | r = 10 + 5 + 1 <br> r = 5 + x <br> r = x + 5 |
| sub | Subtract values (2 or more) and save it into a result variable | sub result_var number number number <br> sub result_var number variable <br> sub result_var variable number | sub r 10 5 1 <br> sub r 5 x <br> sub r x 5 | r = 10 - 5 - 1 <br> r = 5 - x <br> r = x - 5 |
| mult | Multiply values (2 or more) and save it into a result variable | mult result_var number number number <br> mult result_var number variable <br> mult result_var variable number | mult r 10 5 1 <br> mult r 5 x <br> mult r x 5 | r = 10 * 5 * 1 <br> r = 5 * x <br> r = x * 5 |
| div | Divide two values and save it into a result variable | div result_var number number <br> div result_var number variable <br> div result_var variable number | div r 10 5 <br> div r 5 x <br> div r x 5 | r = 10 / 5 <br> r = 5 / x <br> r = x / 5 |
| equals | Compare if value is equals to another and save it into a result variable | equals result_var number number <br> equals result_var variable1 variable2 <br> equals result_var variable number <br> equals result_var number variable | equals r 10 5 <br> equals r x y <br> equals r x 5 <br> equals r 5 x | r = 10 == 5 <br> r = x == y <br> r = x == 5 <br> r = 5 == x |
| smallerThan | Compare if value is smaller than the other and save it into a result variable | smallerThan result_var number number <br> smallerThan result_var variable1 variable2 <br> smallerThan result_var variable number <br> smallerThan result_var number variable | smallerThan r 10 5 <br> smallerThan r x y <br> smallerThan r x 5 <br> smallerThan r 5 x | r = 10 < 5 <br> r = x < y <br> r = x < 5 <br> r = 5 < x |
| biggerThan | Compare if value is bigger than the other and save it into a result variable | biggerThan result_var number number <br> biggerThan result_var variable1 variable2 <br> biggerThan result_var variable number <br> biggerThan result_var number variable | biggerThan r 10 5 <br> biggerThan r x y <br> biggerThan r x 5 <br> biggerThan r 5 x | r = 10 > 5 <br> r = x > y <br> r = x > 5 <br> r = 5 > x |
