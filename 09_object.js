// lets start learning objecct in javascript "Adil"


Object.create      // singleton always made by constructer


const mySym = Symbol("key1")
const JsUser = {                         // declearation of object by literals 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",    // now you can't access this by jsuser.fullname  use ["full name"]
    [mySym]: "mykey1",                 // this is how we define symbole
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
  
console.log(JsUser.email)              // way of accessing
console.log(JsUser["email"])           // another way
console.log(JsUser["full name"])       // only way to accessthi by []
console.log(JsUser[mySym])             // access the symbol


JsUser.email = "hitesh@chatgpt.com"       //change the email
Object.freeze(JsUser)                     // now object is freeze cant change anythings
JsUser.email = "hitesh@microsoft.com"      // email not change , not give error
console.log(JsUser);

JsUser.greeting = function(){               //fxn define on  object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    //this use when you are refering to the same object
}

console.log(JsUser.greeting());              // fxn calling with ()
console.log(JsUser.greetingTwo());


//++++++++++++++++++++++++++++++++++  singleton  +++++++++++++++++++++++++++++++++++++++++++++++++++++


// const tinderUser = new Object()    object creation
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);    // o/p is hitesh
console.log(regularUser.fullname?.userfullname.firstname);  // if full not exist  "optional chaining"
  

//+++++++++++++++++++++++++++++++++++++++  object  mearge  +++++++++++++++++++++++++++++++++++++++++++


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                             object inside object problem create
// const obj3 = Object.assign({}, obj1, obj2, obj4)        here {} is targrt undr which obj1 obj2 obj4 (source)mstore

// const obj3 = {...obj1, ...obj2}         way of mearging object 
// console.log(obj3);                  here printing the mearge object


const users = [             //  arraay of object 
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

users[1].email           // o/p is a@gmail.com



console.log(tinderUser);
console.log(Object.keys(tinderUser));          // this wil return array of  keys 
console.log(Object.values(tinderUser));        // this will return array of value
console.log(Object.entries(tinderUser));       //  array of keys and values  inside another array 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // is any property present "isloggedIn"


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor                            // normal way of access the key of object
const {courseInstructor} = course                  // destructuring of object
console.log(courseInstructor);                     // we can log just by courseInstructor

const {courseInstructor: instructor} = course      // destructuring of object
console.log(instructor);                           //we can log just by Instructor





//  both are the formate if API
//  https://randomuser.me/api/  go to this website and copy the api and put in the https://jsonformatter.org/
//  convert to code  or tree oe form


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

