console.log("Hello world");
console.log("Second");  

// variables 
// 1.var(earlier version) 2.let 3.const

age = 22 //don't use it ever
console.log(age)

//var   (Scope is not defined )
// properties 1. redeclaration 2. reassign 3. Global Scope 4 . functional Scope

// var name ---> declaration of the name

// How to declare a function in a js
function getName(){
    var name  = "Hello"
}
console.log(name) //if there is dash then it is debriviation



//let
// Properties 1. No redeclaration 
// let name;
// let name;

// 2.Re-assignment
let call = "Iter"
console.log(call)
call = "Iter,BBSR"
console.log(call)
call = 56
console.log(call)
//this supports dynamic typing any datatype element can be stored in the variables

// Scoping
//1.Global Scope
// 2.Block Scope
{
    let name = "Hello"
    console.log(name)
}
// Problem in var is memory leak to prevent that we use let

//const
// const age ---> it should have declaration and instialisation in the same .. we cant declare in one line and intialisation in one line

// No reassignment
// const age = 10
// age = 20 ---> this error as it doesn't support re assignment

// it is also a block Variable can't be called outside the block

{
    const age =20
}
console.log(age)

if(true){
    const name = "Hello"
}
console.log(name)


// Hoisting  --> javascript first read the line before executing
console.log(a) //--> this is Executed Before in
var a = 10 
let a = 10 //--> this is temporary dead zone but hoisting is done ... Shows Error
// lines before this lines are Known as temporary dead Zone
const a = 10 //--> this is temporary dead zone but hoisting is done   .... Shows Error 

{
    console.log(name)
    let name = "Himadri"
}

{
    let name = "Himadri"
    console.log(name) //---> Himadri
    {
        console.log(name) //---> this Gives the Error
        let name = "Himadri"
        console.log(name)
    }
}
