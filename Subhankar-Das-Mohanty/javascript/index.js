// console.log("hello world");
// console.log("second");

//variables
//var, let, const

// age = 18;
// console.log(age);

// age = "hello";

//var
// probs- redeclaration
//        reassigning
//        global scope
//        functional scope

// var name = "subhankar";
// if (true) {
//   var age = 16;
// }
// console.log(age);

// var anme    step1:declaration
// var name = "subhankar"; step2:initialization

//var name
//var name = "subhankar";
//var name = "subhr";

// var name       var can be initialise many time it is bad.........
// var name
// var name

//var age=20
//age=50           var can be reassign but it is not good practice to reassign the value of a variable because it can lead to bugs and make the code harder to understand. It is better to use const for variables that should not be reassigned and let for variables that can be reassigned. This way, you can prevent accidental changes to important values and make your code more predictable and easier to debug.
//age=100
//age="subhankar"

//functional scope..
// function myFunction() {
//   var name = "subhankar";
// }
// console.log(name); // ReferenceError: name is not defined

// if (true) {
//   var name = "subhankar";
// }
// console.log(name); // Output: "subhankar" , will print but....

//let
//probs- no redeclaration

//let name;
//let name; //SyntaxError: Identifier 'name' has already been declared

// probs- reassigning
// let coll = "ITER";
// console.log(coll);
// coll = "ITER", "BBSR";
// console.log(coll);
// coll = 56;
// console.log(coll);

//scoping
//1.global scope
//2.block scope

// let name = "subhankar";

// {
//   let name = "subhankar";
//   //console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

// if (true) {
//   let name = "subhankar";
//   // console.log(name);
// }
// console.log(name); // ReferenceError: name is not defined

//const
// const age = 10;
// age = 30; //no reassign

// if (true) {
//   const name = "subhankar";
//   // console.log(name);
// }
// console.log(name); // output will me blankl , no error.

//Hoisting

// console.log(a);
// //var a    - //undefined
// let a = 10; //reference error

// console.log(name);
// var name = "subhankar"; // no error but it will be undefined because of hoisting

// console.log(name);
// {
//   console.log(name);
//   let name = "subhankar";   //errorr
// }

// {
//   let name = "subhankar";
//   console.log(name);
//   {
//     console.log(name);
//     // let name = "subhankar";    error and it will not print the name because of temporal dead zone
//     console.log(name);
//   }
// }
