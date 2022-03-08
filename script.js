'use strict';
/*
//////////////// FREECODE CAMP /////////////////////////
function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let com = false;
  let firstNum = max * (max - 1);
  let newArr = [];
  let rangeArr = [];

  //find first smallest common multiple
  const firstCommon = function () {
    let firstMin = min;
    let firstMax = max;

    for (firstMin; firstMin <= firstMax; firstMin++) {
      newArr.push(firstMin);
    }
    const lowest = cur => firstNum % cur === 0;

    com = newArr.every(lowest);
    while (com === false) {
      firstNum++;
      com = newArr.every(lowest);
    }
    return firstNum;
  };
  firstCommon();
  console.log(firstNum);
  // create range array
  const createRangeArr = function () {
    let secondMin = min + 1;

    for (secondMin; secondMin < max; secondMin++) {
      rangeArr.push(secondMin);
    }
    return rangeArr;
  };
  createRangeArr();
  console.log(rangeArr);

  // create ray of remainders
  let remainderArr = [];
  const createRemainderArr = function () {
    rangeArr.forEach(num => {
      remainderArr.push(firstNum % num);
    });
    console.log(remainderArr);
  };
  createRemainderArr();

  remainderArr.forEach(num => {
    if (num > 0) {
      console.log('Stop');
    }
  });
  return firstNum;
}

//smallestCommons([1, 5]);
//smallestCommons([5, 1]);
//smallestCommons([2, 10]);
//smallestCommons([1, 13]);
smallestCommons([23, 18]);

//return arr.filter(el => func(el)); //works for most
//console.log(arr.some(el => func(el))); returns true
//console.log(arr.shift());

function dropElements(arr, func) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); //[3, 4]

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); //[1, 0, 1]
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
//[3, 9, 2];
/////////////////////////////////////////////////
//without using flatMap
function steamrollArray(arr) {
  let newArr = [];
  //console.log(Array.isArray(arr[1]));
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false && Object.keys(arr[i]).length === 0) {
      newArr.push(arr[i]);
    } else if (typeof arr[i] !== 'object') {
      newArr.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] !== 'object') {
          newArr.push(arr[i][j]);
        } else {
          for (let k = 0; k < arr[i][j].length; k++) {
            if (typeof arr[i][j][k] !== 'object') {
              newArr.push(arr[i][j][k]);
            } else {
              for (let l = 0; l < arr[i][j][k].length; l++) {
                if (typeof arr[i][j][k][l] !== 'object') {
                  newArr.push(arr[i][j][k][l]);
                } else {
                  for (let m = 0; m < arr[i][j][k][l].length; m++)
                    if (typeof arr[i][j][k][l][m] !== 'object') {
                      newArr.push(arr[i][j][k][l][m]);
                    } else {
                      for (let n = 0; n < arr[i][j][k][l][m].length; n++) {
                        if (typeof arr[i][j][k][l][m][n] !== 'object') {
                          newArr.push(arr[i][j][k][l][m][n]);
                        }
                      }
                    }
                }
              }
            }
          }
        }
      }
    }
  }
  return newArr;
  //console.log(newArr);
  //console.log(arr);
}

//steamrollArray([1, [2], [3, [[4]]]]);
//steamrollArray([[['a']], [['b']]]);
steamrollArray([1, [], [3, [[4]]]]); //should return //[1,3,4]
steamrollArray([1, {}, [3, [[4]]]]);

function binaryAgent(str) {
  str = str.split(' ');
  return str.map(el => String.fromCharCode(parseInt(el, 2))).join('');
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
//const newArr = str.split(' ');
//console.log(newArr);
//console.log(newArr.charCodeAt(0));
//const charCode = str.charCodeAt(0);
//const newStr = String.fromCharCode(charCode);
//console.log(charCode);
*/
/*
function truthCheck(collection, pre) {
  const predicate = pre;
  const firstLen = collection.length;
  const truthArr = [];
  for (let i = 0; i < collection.length; i++) {
    //console.log(Object.keys(collection[i]));
    if (Object.keys(collection[i]).includes(predicate) === false) {
      break;
    } else if (
      Object.values(collection[i]).includes(0) === true ||
      Object.values(collection[i]).includes(null) === true ||
      Object.values(collection[i]).includes('') === true ||
      Object.values(collection[i]).includes(NaN) === true ||
      Object.values(collection[i]).includes(undefined) === true
    ) {
      break;
    } else {
      console.log(true);
      truthArr.push(true);
    }
  }
  if (truthArr.length !== firstLen) {
    //console.log('Falsy value');
    return false;
  } else {
    //console.log('Truthy value');
    return true;
  }
}

/*
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
);*/
//truthCheck([{ single: '' }, { single: 'double' }], 'single');

/*  map.keys().forEach(element => {
    if (
      Object.keys(element).includes(predicate) &&
      Object.values(element) !== 0
    ) {
      matches.push(true);
    }
  });
  if (collection.length === matches.length) {
    console.log(true);
    //return true;
  } else {
    console.log(false);
    //return false;
  }
function addTogether(a, b) {
  //console.log(typeof b);
  if (typeof a !== 'number') {
    return undefined;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
    //console.log(a + b);
  }
  if (
    typeof a === 'number' &&
    typeof b !== 'undefined' &&
    typeof b !== 'number'
  ) {
    return undefined;
    //console.log(undefined);
  }

  if (typeof a === 'number' && typeof b == 'undefined') {
    return function (b) {
      if (typeof b !== 'number') {
        return undefined;
        //console.log(undefined);
      } else {
        return a + b;
        //console.log(a + b);
      }
    };
  }
}
//addTogether(2, 3); works
//addTogether(23, 30); works
//addTogether(5)(7); works
//addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); works
//addTogether(2, '3'); works
//addTogether(2)([3]); works
addTogether('2', 3);
*/
/*
const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.setFullName = function (firstAndLast) {
    this.fullName = firstAndLast;
    this.firstName = firstAndLast.split(' ')[0];
    this.lastName = firstAndLast.split(' ')[1];
  };
  this.setFirstName = function (name) {
    this.firstName = name;
  };
  this.setLastName = function (name) {
    this.lastName = name;
  };
  this.getFirstName = function () {
    if (this.hasOwnProperty('firstName') === true) {
      return this.firstName;
    } else {
      this.firstName = firstAndLast.split(' ')[0];
      return this.firstName;
    }
  };
  this.getLastName = function () {
    if (this.hasOwnProperty('lastName') === true) {
      return this.lastName;
    } else {
      this.lastName = firstAndLast.split(' ')[1];
      return this.lastName;
    }
  };
  this.getFullName = function () {
    if (this.hasOwnProperty('fullName') === true) {
      return this.fullName;
    } else {
      if (
        this.hasOwnProperty('firstName') === true &&
        this.hasOwnProperty('lastName') === true
      ) {
        return this.firstName + ' ' + this.lastName;
      } else if (
        this.hasOwnProperty('firstName') === true &&
        this.hasOwnProperty('lastName') === false
      ) {
        this.lastName = firstAndLast.split(' ')[1];
        return this.firstName + ' ' + this.lastName;
      } else if (
        this.hasOwnProperty('firstName') === false &&
        this.hasOwnProperty('lastName') === true
      ) {
        this.firstName = firstAndLast.split(' ')[0];
        return this.firstName + ' ' + this.lastName;
      } else {
        this.firstName = firstAndLast.split(' ')[0];
        this.lastName = firstAndLast.split(' ')[1];
        return this.firstName + ' ' + this.lastName;
      }
    }
  };
};
*/
/*
const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };
  this.getLastName = function () {
    return fullName.split(' ')[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (name) {
    fullName = name + ' ' + fullName.split(' ')[1];
  };
  this.setLastName = function (name) {
    fullName = fullName.split(' ')[0] + ' ' + name;
  };
  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob));

//console.log(bob instanceof Person); //true
//console.log(bob.firstName); //undefined
//console.log(bob.lastName); //undefined
//console.log(bob.getFirstName()); //Bob
//console.log(bob.getLastName()); //Ross
//console.log(bob.getFullName()); //Bob Ross
//bob.setFirstName('Haskell');
//console.log(bob.getFullName()); //Haskell Ross
//bob.setLastName('Curry');
//console.log(bob.getFullName()); //Bob Curry
bob.setFullName('Haskell Curry');
console.log(bob.getFullName()); //Haskell Curry
console.log(bob.getFirstName()); //Haskell
console.log(bob.getLastName()); //Curry
*/
/*
function orbitalPeriod(arr) {
  let avgAlt = [];
  for (let i = 0; i < arr.length; i++) {
    avgAlt.push(arr[i].avgAlt);
    delete arr[i].avgAlt;
  }
  console.log(arr);
  console.log(avgAlt);
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const twoPi = 2 * Math.PI;
  let arrA = avgAlt.map(x => x + earthRadius);
  console.log(arrA);
  let arrB = arrA.map(x => x * x * x);
  console.log(arrB);
  const squareThis = arrB.map(x => x / GM);
  console.log(squareThis);
  const T = [...squareThis.map(x => Math.round(twoPi * Math.sqrt(x)))];
  console.log(T);
  for (let i = 0; i < T.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j].orbitalPeriod = T[j];
    }
  }
  console.log(arr);
  return arr;
}

//orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
//should return {name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]);
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]*/
/////////////// OOP LECTURE ///////////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside a constructor function
  // this.caclAge = function () {
  // console.log(2037 - this.birthYear);
  //};
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called. this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const jay = 'jay';
console.log(matilda, jack);
console.log(jonas instanceof Person); //true
console.log(jay instanceof Person); //false

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //species will show uop in the .__proto__ of the objects along with calcAge function

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false b/c that property belonges to the Person property not Jonas

console.log(jonas.__proto__);
//Object.prototype (top of protoype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor); //points back at the Person function

const arr = [3, 6, 5, 2, 3, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); //back to Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(h1); //7 level prototype chain
console.dir(x => x + 1);
*/

/////////////////////////////////////////////////////////////////
// Coding Challenge 1
// Your tasks:
//1. Use a constructor function to implement a'Car'. A car has a 'make' and a 'speed' property. the 'speed' property is the current speed of the car in km/h
//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.\
//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
//4. Create 2 'Car' objects and experiemnt with calling accelerate and brake multiple times on each of them.
//Test Date:
//Data car 1: 'BMW" going at 120 km/h
//Data car 2: /Mercedes' going at 95 km/h
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed + ' km/h');
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed + ' km/h');
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
*/
/*
// ES6 Classes
//Classes are just special functions
// Class expression
//const PersonCL = class {}
// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  } // no commas between methods
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

jessica.greet();

//1. Classes are NOT hoisted you can't use them before their declared
//2. Classes are first-class citizens can pass into and return from a function
//3. Classes are executed in strict mode

// Setters and Getters
const account = {
  owner: 'jonas',
  movements: [200, 250, 333, 52435],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  }, //every setter must have a parameter
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/
