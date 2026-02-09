let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x1 = 1, y = 3;
alert( y - x1 ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// no effect on numbers
let x2 = 1;
alert( +x2 ); // 1
let y1 = -2;
alert( +y1 ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" ); // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

apples = "2";
oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

let x3 = 2 * 2 + 1;

alert( x3 ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

c = 2 + 2;
b = c;
a = c;

let n = 2;
n = n + 5;
n = n * 2;

n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let n4 = 2;

n4 *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n4 ); // 16

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

counter = 1;
a = ++counter; // (*)

alert(a); // 2

counter = 1;
a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

counter = 0;
alert( ++counter ); // 1

counter = 0;
alert( counter++ ); // 0

counter = 1;
alert( 2 * ++counter ); // 4

counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

counter = 1;
alert( 2 * counter );
counter++;

a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)



for (a = 1, b = 3, c = a * b; a < 10; a++) {
    alert( a ); // 1, then 2, then 3, then 4, then 5, then 6, then 7, then 8, then 9
    
}