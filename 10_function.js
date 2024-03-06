// lets start learning function in javascript with me    "Adil"



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)     //calliing the fxn by passing the arguments
console.log("Result: ", result);

                                       // when you don't pass argument then undeffinr will return..


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return                                             // function
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

//++++++++++++++++


function calculateCartPrice(...num1){       // here we use rest operator {...} which return all the argument wrap in array
    return num1
}
function calculateCartPrice(val1, val2, ...num1){  //here first 2 argument go to val1 & val2 and rest of other go to num1 as array
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))   


//++++++++++++++++++++++

const user1 = {                                      // this is  a object which i created to pass in the function 
    username: "hitesh", 
    prices: 199
}

function handleObject(anyobject){                        // this will take object as a argument
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)                                    // calling the function by passing object user as argument

handleObject({                                       // calling  by passing whole object 
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){                  // fxn that take array as aargument and return 2nd element 
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));           // calling by passing array name
console.log(returnSecondValue([200, 400, 500, 1000])); // calling by passing array




//+++++++++++++++++++++++++++++++++++++++++++++++++++++    Scope in Function  +++++++++++++++++++++++++++++++++++++++++++++++


var c = 300
if (true) {
    let a = 10                  // this is define inside the scope  we cant log outside the scope   {}
    const b = 20                // this is also same as let
    var c = 30                  // this can be log anywhere  throughout the code 
    console.log("INNER: ", a);
    
}
console.log(a);              // a is not define
console.log(b);              // b is not define
console.log(c);              // give o/p updeted value 

//++++++++++++++++++++++++++++++++++++++  hosting   snd scope       ++++++++++++++++++++++++++++++++++++++


function one(){                              // here assume one is bigger fxn and two is smaller and smeller can ask 
    const username = "hitesh"                // property from bigger but bigger can't  
    function two(){
        const website = "youtube"
        console.log(username);               //this will exicute properlly
    }
    console.log(website);                   // can't access websit 
     two()
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);



console.log(addone(5))
function addone(num){                  // here we declere fxn 
    return num + 1
}

addTwo(5)                              // give errorr you declere leter
const addTwo = function(num){          // expression that hold fxn
    return num + 2
}




//+++++++++++++++++++++++++++++++++++++++  this and arrow ++++++++++++++++++++++++++++++++++++++++++++++++++++


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()












// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

