//////////////////////////////////////////////////////////////////////////////
//                                                                          //
//  Name : Hendy N                                                          //
//  From : Jawa                                                             //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
//Soal 1 : Explore Differences Between the var and let Keywords           //
////////////////////////////////////////////////////////////////////////////
let myName;
let quote;
function Nameme() {
  "use strict";

  myName = "Oliver";
  quote = catName + " Cool!";

}
Nameme();

////////////////////////////////////////////////////////////////////////////
//Soal 2: Compare Scopes of the var and let KeywordsPassed               //
///////////////////////////////////////////////////////////////////////////

function Scope() {
    'use strict';
    let i = 'scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  Scope();

  ///////////////////////////////////////////////////////////////////////
  //soal 3 : Declare a Read-Only Variable with the const Keyword      //
  //////////////////////////////////////////////////////////////////////

  function printManyTimes(str) {
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
  }
  printManyTimes("Code Happy");

//////////////////////////////////////////////////////////////////////////
//soal 4 : Mutate an Array Declared with constPassed                   //
////////////////////////////////////////////////////////////////////////
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7; 
  console.log(s);
  // change code above this line
}
editInPlace();

//////////////////////////////////////////////////////////////////////////
//soal 5 : Prevent Object Mutation                                     //
/////////////////////////////////////////////////////////////////////////
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

/////////////////////////////////////////////////////////////////////////////
//soal 6 : Use Arrow Functions to Write Concise Anonymous FunctionsPassed //
///////////////////////////////////////////////////////////////////////////
const magic= () => {
    "use strict";
    return new Date();
  };
  
  magic();

///////////////////////////////////////////////////////////////////////////
//soal 7 : Write Arrow Functions with ParametersPassed                  //
//////////////////////////////////////////////////////////////////////////
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));

//////////////////////////////////////////////////////////////////////////
//soal 8 : Set Default Parameters for Your Functions                   //
////////////////////////////////////////////////////////////////////////

const increment = (number, value = 1) => {
    return number + value;
  }
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6

//////////////////////////////////////////////////////////////////////
//soal 9 : Use the Rest Parameter with Function Parameters         //
////////////////////////////////////////////////////////////////////
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6

///////////////////////////////////////////////////////////////////
//soal 10 : Use the Spread Operator to Evaluate Arrays In-Place //
/////////////////////////////////////////////////////////////////
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
console.log(arr2);

///////////////////////////////////////////////////////////////////////////
//soal 11 : Use Destructuring Assignment to Extract Values from Objects //
/////////////////////////////////////////////////////////////////////////

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const { today, tomorrow } = HIGH_TEMPERATURES;

  console.log(yesterday)
  console.log(today);
  console.log(tomorrow); 

/////////////////////////////////////////////////////////////////////////////
//soal 12 : Use Destructuring Assignment to Assign Variables from Objects //
///////////////////////////////////////////////////////////////////////////
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday);
  console.log(highTomorrow); 
///////////////////////////////////////////////////////////////////////////////////
//soal 13 : Use Destructuring Assignment to Assign Variables from Nested Objects//
//////////////////////////////////////////////////////////////////////////////////
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

  const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST;
  
  console.log(lowToday);
  console.log(highToday);

/////////////////////////////////////////////////////////////////////////////////
//soal 14 : Use Destructuring Assignment to Assign Variables from Arrays      //
///////////////////////////////////////////////////////////////////////////////

let a = 8, b = 6;

[a,b] = [b, a];

console.log(a);
console.log(b); 

//////////////////////////////////////////////////////////////////////////////////////////////
//soal 15 : Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements //
//////////////////////////////////////////////////////////////////////////////////////////////

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
 const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

///////////////////////////////////////////////////////////////////////////////////////////////
//soal 16 : Use Destructuring Assignment to Pass an Object as a Function's Parameters      //
/////////////////////////////////////////////////////////////////////////////////////////////
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
const half = ({ max, min }) => (max + min) / 2.0;

  console.log(stats);
  console.log(half(stats));

//////////////////////////////////////////////////////////////////////////////////////////////
//soal 17 : Create Strings using Template Literals                                         //
////////////////////////////////////////////////////////////////////////////////////////////
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`,
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);

/////////////////////////////////////////////////////////////////////////////////////////////
//soal 18 : Write Concise Object Literal Declarations Using Object Property Shorthand     //
///////////////////////////////////////////////////////////////////////////////////////////

//  before 
// const createPerson = (name, age, gender) => {
//   "use strict";
//   // change code below this line
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };
//   // change code above this line
// };

// after
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Zodiac Hasbro", 56, "male"));

//////////////////////////////////////////////////////////////////////////////////////////
//soal 19 : Write Concise Declarative Functions with ES6                               //
////////////////////////////////////////////////////////////////////////////////////////
// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear){
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

////////////////////////////////////////////////////////////////////////////////////////
//soal 20 : Use class Syntax to Define a Constructor Function                         //
////////////////////////////////////////////////////////////////////////////////////////
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name);

///////////////////////////////////////////////////////////////////////////////////////
//soal 21 : Use getters and setters to Control Access to an Object                  //
//////////////////////////////////////////////////////////////////////////////////////
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76);
  let temp = thermos.temperature;
  thermos.temperature = 26;
  temp = thermos.temperature;

////////////////////////////////////////////////////////////////////////////////////////
//soal 22 : Create a Module Script                                                   //
///////////////////////////////////////////////////////////////////////////////////////
<html>
  <body>
      <script type="module" src="index.js"></script>
  </body>
</html>

/////////////////////////////////////////////////////////////////////////////////////
//soal 23 : Use export to Share a Code Block                                      //
///////////////////////////////////////////////////////////////////////////////////
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export {uppercaseString, lowercaseString};

/////////////////////////////////////////////////////////////////////////////////
//soal 24 : Reuse Javascript Code Using import                                //
///////////////////////////////////////////////////////////////////////////////
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

/////////////////////////////////////////////////////////////////////////////
//soal 25 : Use * to Import Everything from a File                        //
////////////////////////////////////////////////////////////////////////////
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

///////////////////////////////////////////////////////////////////////////
//soal 26 : Create an Export Fallback with export default               //
/////////////////////////////////////////////////////////////////////////
export default function subtract(x, y) {
    return x - y;
  }

////////////////////////////////////////////////////////////////////////
//soal 27 : Import a Default Export                                  //
//////////////////////////////////////////////////////////////////////
import subtract from "./math_functions.js";

subtract(7,4);

////////////////////////////////////////////////////////////////////
//soal 28 : Create a JavaScript Promise                          //
//////////////////////////////////////////////////////////////////
const makeServerRequest = new Promise((resolve, reject) =>{

});

////////////////////////////////////////////////////////////////////
//soal 29 : Complete a Promise with resolve and reject           //
//////////////////////////////////////////////////////////////////
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

//////////////////////////////////////////////////////////////////
//soal 30 : Handle a Fulfilled Promise with then               //
////////////////////////////////////////////////////////////////
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

///////////////////////////////////////////////////////////////
//soal 31 :Handle a Rejected Promise with catch             //
/////////////////////////////////////////////////////////////
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });
