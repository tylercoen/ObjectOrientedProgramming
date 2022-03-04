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

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.setFullName = function (firstAndLast) {
    this.fullName = firstAndLast;
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
      let arr = firstAndLast.split(' ');
      console.log(arr);
      let first = arr[0];
      this.firstName = first;
      return this.firstName;
    }
  };
  this.getLastName = function () {
    let arr = firstAndLast.split(' ');
    let last = arr[1];
    if (this.lastName === '') {
      this.lastName = last;
      return this.lastName;
    } else {
      return this.lastName;
    }
  };
  this.getFullName = function () {};
};

const bob = new Person('Bob Ross');
console.log(Object.keys(bob));
console.log(`The length is ${Object.keys(bob).length}`); //should always be 6
//console.log(bob instanceof Person); //true
//console.log(bob.firstName); //undefined
//console.log(bob.lastName); //undefined
//console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
//console.log(bob.getFullName()); //Bob Ross
//bob.setFirstName('Haskell');
//console.log(bob.getFullName());
//bob.setLastName('Curry');
//console.log(bob.getFullName());
//bob.setFullName('Haskell Curry');
//console.log(bob.getFullName());
//console.log(bob.getFirstName());
//console.log(bob.getLastName());
/*
/////////////// OOP LECTURE ///////////////
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
Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda); //species will show uop in the .__proto__ of the objects along with calcAge function

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false b/c that property belonges to the Person property not Jonas
*/
