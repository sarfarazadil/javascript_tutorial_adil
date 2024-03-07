// let start learning loop with me   "Adil"


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}
console.log(element);


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray1 = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

//+++++++++++++++++++++++++  break and continue    +++++++++++++++++++++++++++++++++++++++



for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


// ++++++++++++++++++++++++++++=  while loop  ++++++++++++++++++++++++++++++++++++++++++++



let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr1 = 0
while (arr1 < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr1 = arr1 + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

//+++++++++++++++++++++++++++++++  Some Special Loop  ++++++++++++++++++++++++++++++++++++++++



// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


//++++++++++++++++++++++++++++++++++++++    Maps    ++++++++++++++++++++++++++++++++++++++++++++


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);                         //  print only three key and value  "IN" will not repeated 

for (const [key, value] of map) {         // this is how apply loop on map    for of loop
    // console.log(key, ':-', value);
}

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {            //  well, this is not working over object     for of loop
    console.log(key, ':-', value);
    
}






const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {                           // use "for in loop"  for ittrating in object object 
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]     
for (const key in programming) {                        // for in loop  use in array
    console.log(programming[key]);
}





const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map1) {                                 // for in loop not use in map
    console.log(key);
}



const coding = ["js", "ruby", "java", "python", "cpp"]
                                                            // for each fxn
coding.forEach( function (val){                             //callback fxn ka naam nahi hota hai
    console.log(val);                                      // give parameter
} )
 
coding.forEach( (item) => {                                 // we can use arrow fxn
    console.log(item);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)                                  // we can also pass reference of any fxn NOT GIVE "()"

coding.forEach( (item, index, arr)=> {                   // it carry item index as well as whole array
    console.log(item, index, arr);                 
} )


                                                        // object inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {           
    
    console.log(item.languageName);                    // here each item is an object thatswhy  item.languageName
} )



//++++++++++++++++++++++++++++++++++++++   filter MAP reduce +++++++++++++++++++++++++++++++++++++++++++++++





// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);








  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // const newNums = myNumers.map( (num) => { return num + 10})
  
  const newNums = myNumers
                  .map((num) => num * 10 )
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)
  
  console.log(newNums);














  const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



