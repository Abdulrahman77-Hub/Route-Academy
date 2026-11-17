///  Part 1

// 1.

const str = "123";
const result = Number(str) + 7; 
console.log(result);  

// 2.

function check(value) {
    if (!value) {
        return "Invalid";
}
    return value;
}
console.log(check(0));

// 3.

const oddNumbers = [];
for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
    continue;
}
oddNumbers.push(i);
}
console.log(oddNumbers); 

// 4.

let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(function(n) {
    return n % 2 == 0;
});

console.log(even);

// 5.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1);

// 6.

function days(dayNumber) {
switch (dayNumber) {
case 1:
    return "Sunday";
case 2:
    return "Monday";
case 3:
    return "Tuesday";
case 4:
    return "Wednesday";
case 5:
    return "Thursday";
case 6:
    return "Friday";
case 7:
    return "Saturday";
default:
    return "Invalid day number";
    }
}
console.log(days(2));

// 7.

const X = ["a", "ab", "abc"];
const Y = X.map((str) => str.length);

console.log(Y); 

// 8.

function CHECK(num) {
const S1 = num % 3 === 0;
const S2 = num % 5 === 0;
return S1 && S2 ? "Divisible by both" : "Not divisible by both";
}
console.log(CHECK(15));

// 9.

const square = num => num * num;
console.log(square(6)); 

// 10.

const Human = { name: 'John', age: 25 };
function Info(obj) {
    let { name, age } = obj;
    return name + " is " + age + " years old";
}

console.log(Info(Human));

// 11.

function sumAll(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5)); 

// 12.

function delayedSuccess() {
return new Promise((resolve) => {
    setTimeout(() => {
    resolve("Success");
        }, 3000);
    });
}
delayedSuccess().then((msg) => console.log(msg)); 

// 13.

function LargeNumber(arr) {
return Math.max(...arr);
}
console.log(LargeNumber([0, 8 , 9, 4, 5])); 

// 14.

let user = { name: "Abdo", age: 22 };

function getArray(obj) {
let keys = [];
for (let k in obj) {
    keys.push(k);
}
return keys;
}

console.log(getArray(user));

// 15.
let text = "The quick brown fox";

function getWords(s) {
    let words = s.split(" ");
        return words;
}
console.log(getWords(text)); 

/// Part 2 

// 1.

/* for Each: This array method executes a callback function on every element. You can't stop the loop early with break, continue, or return, and it doesn't handle async/await well.
for...of: This loop statement works with any iterable object, such as arrays, strings, and maps. You can easily stop or skip iterations with break and continue, and it supports async/await.
When to use: I use forEach for straightforward operations on every item in an array when stopping the loop isn't necessary. I use for...of when I need break/continue, when looping over strings, or when using await inside the loop */

// 2.

/* 
Hoisting: This refers to JavaScript's behavior of moving variable and function declarations to the top of their scope prior to code execution. Variables declared with var get hoisted and are initialized with undefined.
Temporal Dead Zone (TDZ): This is the period between entering the scope and the actual line where a let or const variable is declared.↻ Trying to access the variable within the TDZ results in a ReferenceError. */ 

// Hoisting with var
console.log(a); // undefined
var a = 5;

// TDZ with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// 3.
/*  (Loose Equality) == : Compares two values for equality after both are converted to a common type (type coercion). It checks the value only.
 (Strict Equality) === : Compares both the value and the data type, without performing any type conversion. If the types differ, it returns false right away. */

// 4.

/*In try-catch, we put the code that might cause an error inside the try block. If an error happens, JavaScript stops running the try block and jumps to the catch block to handle it without crashing the program. 
This is important in async operations (like fetching data from an API) because errors can happen outside our control, like network failure or a down server. Using try-catch with async/await helps us catch rejected promises safely and handle the error instead of crashing the app */

// 5.

/* Explicit Type Conversion: This happens when the developer deliberately converts a value from one type to another by using built-in functions such as Number(), String(), or Boolean().
Implicit Type Coercion: This occurs when JavaScript converts the data type on its own, behind the scenes, while performing an operation (for example, using +, -, or ==). */

// Type Conversion 
let s_t_r = "100";
let num = Number(s_t_r); // 100

// Type Coercion 
let res1 = "5" + 2; // "52" 
let res2 = "5" - 2; // 3 