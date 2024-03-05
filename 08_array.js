// let start learning array with me  "Adil"

//array is object and resizable



const myArr = [0, 1, 2, 3, 4, 5] 
//this is how we should define array 
const myHeors = ["shaktiman", "naagraj"]
//we can put string, or both number and string as a element in array




const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

/*Both const myArr = [0, 1, 2, 3, 4, 5] and const myArr2 = new Array(1, 2, 3, 4) create arrays in JavaScript, 
but there are some subtle differences between them:

Syntax:

The first approach uses array literal notation [] initialize the array with the desired elements. 
concise and preferred way
if you don't specify enough elements, the remaining elements are set to undefined by default.


The second approach older way of creating arrays, 
less readable   unexpected behavior.
if you don't specify enough elements, the remaining elements are set to empty slots

*/




//++++++++++++++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

myArr.push(6)   //push the element into the array
myArr.push(7)     
myArr.pop()       //pop the last element of array

myArr.unshift(9)    // it push element from first
myArr.shift()       // it pop elemt from first

console.log(myArr.includes(9));    // array include 9 or not o/p true or false
console.log(myArr.indexOf(3));     // what is the index of 3

const newArr = myArr.join()  // it join the array by what is given in ()

// console.log(myArr);
// console.log( newArr);


//++++++++++++++++++++++++++++++++++++++++  slice, splice   ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)   //it give the section of array  in which 1 is included and 3 is excluded

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // it give the array 3 is also included but it cut from the orignal array 
console.log("C ", myArr);
console.log(myn2);





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)      // marvel_heros take dc_heros  whole array as a element  like nested array
console.log(marvel_heros);   
console.log(marvel_heros[3][1]);   //printing element from nested array


const allHeros = marvel_heros.concat(dc_heros)  //now this will work properly give new complete array
console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros]  //spread oparator  work same as concat.
console.log(all_new_heros);




const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)   //this will make single array from these nested 
console.log(real_another_array);  //return all element in single array without nesting...


console.log(Array.isArray("Hitesh"))   // Is this a array . just a question
console.log(Array.from("Hitesh"))      // convert string into array  with char as element  [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //return array from set of element.. which is provided under ()