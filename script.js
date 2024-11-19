// let firstName = "Sonu";
// let lastName = "Singh"
// let age = 27
// let isHappy = true
// let a
// let b = undefined
// let c = null

// let UserIntro = "My name is " + firstName + " " + lastName + " " + "and I am" + " " + age + " years old" + " " + "and i am Happy" + " " + isHappy.toString();

// let num = 5;  // Declare num with let, allowing mutation
// num++;        // Increment num to 6
// console.log(num + 5); // Output will be 11

// Block Scope
// if(true) {
//     let a = 3;
// }
// console.log(a)

// Function Scope
// let d = 90;
// function UnderstandingScop() {
//     if(true) {
//         var b = 89;
//     }
//     console.log(b)
//     console.log(d)
// }
// UnderstandingScop();

// const isOne = num => num == 1;

// function isOne (num) {
//     return num == 1
// }

// function isBigger(a,b) {
//     return a > b;
// }

// console.log("Is 2 bigger then 3 ?" , isBigger(2,3))

// function giveMeAnObject(a) {
//     return{
//         value:a
//     }
// }

// console.log(giveMeAnObject(2))

// const add22andReturn = num => {
// const sum = 10;
// num += sum;
// return num;
// }

// console.log(add22andReturn(200))

// const defaultParameters = (a,b) => a+b

// console.log(defaultParameters(5,6))

// const defaultParameters = (a,b=5,c) => a+b+c;
// console.log(defaultParameters(5,9,7))

// const restExample = (a, ...rest) => {
//     console.log(a,rest.map(num => num + num))
// }

// restExample(0,2,3,4,5)

// const sumArrays= [1,2,3,4,5,6,7,8,9,10];

// const spereadExaple = ([first,second,...rest]) => {
//     console.log(first,second,rest)
// }

// console.log(spereadExaple(sumArrays))

// console.log(spereadExaple([...sumArrays,11,12,13]))
// console.log(sumArrays)

// const mySelf = {
//     name:"Sonu",
//     age:27
// }

// const afterBirthday = {...mySelf, age:mySelf.age + 1}

// console.log(afterBirthday)

// const colorArray = ["red","green","blue","yellow"];
// // colorArray.push("white","pink")
// // console.log(colorArray)

// const add2Color = [...colorArray,"black","LightBlue"]
// console.log(add2Color)

// // Pure Function
// const wishHappyBirthday = (name) => console.log(`Happy birthday ${name}.`) ;

// wishHappyBirthday("Sonu Singh")

// const person = {
//     name:"Sonu",
//     age:27
// }
// const birthday = () => {
//     person.age++
// }
// birthday()
// console.log(person)

// const birthday2 = ({name,age}) => ({name,age:age+1})
// console.log(birthday2({name:"Sonu",age:27}))
// console.log(birthday2(person))

// const birthday3 = person => ({...person,age:person.age + 1})

// console.log(birthday3(person))

// const product = {
//     name:"Laptop",
//     quantity:2,
// }

// const addProduct = store => ({...store, quantity:store.quantity +5})
// const IncrementProduct = addProduct(product);
// console.log(IncrementProduct)

// const PrintColors = (color) => console.log(`Color is ${color}`);

// colorArray.forEach(PrintColors);

// Square of Number

// const numbers =[1,2,3,4,5,6,7];

// const square = numbers.map(num => (num*num))
// console.log(square)

// Count String on Array

// const Strings = ["Rose","Lisy","Jusjsljfslj","jslfjlslj",]

// const countSting = Strings.map(srt => srt.length)

// console.log(countSting)

// const wordsc = (w) => w.length;

// const getLenght = w => w.map(wordsc);

// console.log(getLenght(["Apple", "Banana", "Cherry"]))

// const number = [1,2,3,4,5,6,7,8,9,10]

// const isOdd = n => n%2 != 0

// const isEven = n => n%2 == 0

// const oddNumbers = number.filter(isOdd)
// const evenNumbers = number.filter(isEven)

// console.log(oddNumbers)

// console.log(evenNumbers)

// const number = [1,2,3,4,12,34,234,23,100,340,234,23,100,340,234,23,100]

// const divby10 = n => n % 10 == 0
// const lessthen10 = n => n >= 10

// const numbers = number.filter(divby10)
// const less10 = number.filter(lessthen10)

// console.log(numbers)
// console.log(less10)

// alert("My name is Sonu singh")
// prompt("What your age")
// confirm("Are you sure")
// const userName = prompt("Please enter you name")
// alert(`your Name is ${userName} `)

// const message = "Sonu Singh";

// const faltumessage ="             How are you           "

// const faltumessagetoLowercase = faltumessage.trim().toLocaleLowerCase()

// const replaceMessage = message.replace("Sonu" , "Shyam")
// const replaceAllS = message.replaceAll("S" , "X")

// const concatMessage =  message.concat(faltumessage,"Fine!");
// const CardLastDigit = 4545;
// const showOnlyLast4Dight = CardLastDigit.toString().padStart(16,"#")
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);

// Get two numbers from the user
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));

// Find the minimum and maximum
// const min = Math.min(num1, num2);
// const max = Math.max(num1, num2);

// Generate a random number between min and max
// const randomNum = Math.random() * (max - min) + min;

// console.log(`Random number between ${min} and ${max} is: ${randomNum}`);

// const Height = +prompt("Enter the height");
// const Width = +prompt("Enter the width");

// const area = Height * Width;

// console.log("Area = " + area)
