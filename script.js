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
/*
function palindrome(str) {
  str = str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/[&\/\\#,+()_$~%.'":*?<>{}-]/g, '');
  console.log(str);
  const forwardStr = [...str];
  console.log(forwardStr);
  const reverseStr = [];
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr.push(str[i]);
  }
  console.log(reverseStr);
  for (let i = 0; i < forwardStr.length; i++) {
    if (forwardStr[i] != reverseStr[i]) {
      return false;
      //console.log(false);
    } else if (forwardStr[i] === reverseStr[i] && i === forwardStr.length - 1) {
      return true;
      //console.log(true);
    }
  }
}
console.log(palindrome('five|_/|four'));
*/
/*
function convertToRoman(num) {
  let numArr = Array.from(String(num), Number);
  //console.log(numArr);
  let key1 = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
  };
  let key2 = {
    0: '',
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC',
  };
  let key3 = {
    0: '',
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM',
  };
  let key4 = {
    0: '',
    1: 'M',
    2: 'MM',
    3: 'MMM',
    4: 'MV',
    5: 'V',
  };

  let finalArr = [];

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr.length - 1 === 0) {
      //console.log(i);
      finalArr.unshift(key1[numArr[i]]);
      //console.log(key1[numArr[i]]);
      break;
    } else if (i === numArr.length - 1 && numArr.length - 1 !== 0) {
      //console.log(i);
      finalArr.unshift(key1[numArr[i]]);
      //console.log(key1[numArr[i]]);
    } else if (i === numArr.length - 2) {
      //console.log(i);
      finalArr.unshift(key2[numArr[i]]);
      //console.log(key2[numArr[i]]);
    } else if (i === numArr.length - 3) {
      //console.log(i);
      finalArr.unshift(key3[numArr[i]]);
      //console.log(key3[numArr[i]]);
    } else if (i === numArr.length - 4) {
      finalArr.unshift(key4[numArr[i]]);
    }
  }
  //console.log(finalArr);
  finalArr = finalArr.join('');
  //console.log(finalArr);
  return finalArr;
}
convertToRoman(12);
*/
/*
function rot13(str) {
  const alpha = [
    ' ',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const arr = [...str];
  let cipherArr = [];
  //console.log(arr);
  let punctuation = [];
  if (
    arr[arr.length - 1] === '!' ||
    arr[arr.length - 1] === '?' ||
    arr[arr.length - 1] === '.'
  ) {
    punctuation.push(arr.pop());
  }
  //console.log(punctuation);
  for (let i = 0; i < arr.length; i++) {
    let num = alpha.indexOf(arr[i]);
    if (num === 0) {
      cipherArr.push(alpha[num]);
    } else {
      num = num + 13;
      if (num <= 26) {
        cipherArr.push(alpha[num]);
      } else if (num > 26) {
        num = num - 26;
        cipherArr.push(alpha[num]);
      }
    }
  }
  if (punctuation.length != 0) {
    cipherArr.push(punctuation[0]);
  }
  //cipherArr.reverse();
  //console.log(cipherArr.join(''));
  return cipherArr.join('');
}

//rot13('SERR PBQR PNZC'); //FREE CODE CAMP
rot13('SERR CVMMN!');
rot13('SERR YBIR?');
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');

*/
/*
function telephoneCheck(str) {
  //remove all white space
  str = str.replace(/\s+/g, '');

  //Check that there are enough numbers
  let count = 0;
  //console.log(str[str.length - 5]);
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i], isNaN(str[i]));
    console.log(i, str[i]);
    if (isNaN(str[i]) === false) {
      count = count + 1;
    }
  }

  if (count < 10 || count > 11) {
    console.log('Too few or too many numbers');
    return false;
  } else if (count === 11 && str[0] !== '1') {
    console.log('Wrong country code');
    return false;
  } else if (count === str.length) {
    //console.log(true);
    return true;
  }

  //Check for missing characters
  if (str.includes('?')) {
    console.log('Extra characters');
    return false;
  }
  if (str.includes('(') && !str.includes(')')) {
    console.log('Missing a character');
    return false;
  }
  if (str.includes(')') && !str.includes('(')) {
    console.log('Missing a character');
    return false;
  }
  if (
    str[str.length - 13] === '-' &&
    str[str.length - 9] !== '-' &&
    str[str.length - 5] !== '-'
  ) {
    console.log('Missing a character');
    return false;
  }
  if (
    str[str.length - 13] === '(' &&
    str[str.length - 9] !== ')' &&
    str[str.length - 5] !== '-'
  ) {
    console.log('Missing a character');
    return false;
  }
  if (
    (str[str.length - 9] === ')' && str[str.length - 13] !== '(') ||
    str[str.length - 5] !== '-'
  ) {
    console.log('Missing a character');
    return false;
  }
  //console.log(true);
  else return true;
}
telephoneCheck('(555)5(55?)-5555');
//telephoneCheck('555)-555-5555');
//telephoneCheck('27576227382');
//telephoneCheck('1 555 555 5555');
//telephoneCheck('5555555555');
//telephoneCheck('555-555-5555');
//telephoneCheck('2 (757) 622-7382');
//telephoneCheck('1 555)555-5555');
//telephoneCheck('123**&!!asdf#');
//telephoneCheck('555-5555');
//telephoneCheck('10 (757) 622-7382');
*/
/*
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  //console.log('Change due:', change);
  let register = new Map(cid);
  //console.log(register);

  let finalArr = {
    status: '',
    change: [],
  };
  let hundredArr = ['ONE HUNDRED'];
  let twentyArr = ['TWENTY'];
  let tenArr = ['TEN'];
  let fiveArr = ['FIVE'];
  let oneArr = ['ONE'];
  let quarterArr = ['QUARTER'];
  let dimeArr = ['DIME'];
  let nickelArr = ['NICKEL'];
  let pennyArr = ['PENNY'];
  let hundred = register.get('ONE HUNDRED');
  let twenty = register.get('TWENTY');
  let ten = register.get('TEN');
  let five = register.get('FIVE');
  let one = register.get('ONE');
  let quarter = register.get('QUARTER');
  let dime = register.get('DIME');
  let nickel = register.get('NICKEL');
  let penny = register.get('PENNY');
  const checkerFunction = function (highnum, num, arr) {
    change = change - num;
    highnum = highnum - num;
    arr[1] = num;

    while (change >= num && highnum !== 0) {
      change = change - num;
      highnum = highnum - num;
      arr[1] = arr[1] + num;
    }
    //console.log('high number:', highnum);
    change = Number(change.toFixed(2));
    //console.log(change);
  };
  if (change >= 100 && hundred >= 100) {
    checkerFunction(hundred, 100, hundredArr);
  }
  if (change >= 20 && twenty >= 20) {
    checkerFunction(twenty, 20, twentyArr);
  }
  if (change >= 10 && ten >= 10) {
    checkerFunction(ten, 10, tenArr);
  }
  if (change >= 5 && five >= 5) {
    checkerFunction(five, 5, fiveArr);
  }
  if (change >= 1 && one >= 1) {
    checkerFunction(one, 1, oneArr);
  }
  if (change >= 0.25 && quarter >= 0.25) {
    checkerFunction(quarter, 0.25, quarterArr);
  }
  if (change >= 0.1 && dime >= 0.1) {
    checkerFunction(dime, 0.1, dimeArr);
  }
  if (change >= 0.5 && nickel >= 0.5) {
    checkerFunction(nickel, 0.5, nickelArr);
  }

  if (change <= penny && penny - change !== penny) {
    pennyArr[1] = change;
    change = 0;
    penny = penny - change;
  }
  const arrayChecker = function (arr) {
    //console.log(arr);
    if (arr.length > 1) {
      finalArr.change.push(arr);
    }
    //
  };
  arrayChecker(hundredArr);
  arrayChecker(twentyArr);
  arrayChecker(tenArr);
  arrayChecker(fiveArr);
  arrayChecker(oneArr);
  arrayChecker(quarterArr);
  arrayChecker(dimeArr);
  arrayChecker(nickelArr);
  arrayChecker(pennyArr);
  //console.log('Change still due:', change);

  if (finalArr.change.length < 1) {
    finalArr.status = 'INSUFFICIENT_FUNDS';
    finalArr.change = [];
  } else if (
    change === 0 &&
    hundred === 0 &&
    twenty === 0 &&
    ten === 0 &&
    five === 0 &&
    one === 0 &&
    quarter === 0 &&
    dime === 0 &&
    nickel === 0
  ) {
    finalArr.status = 'CLOSED';
    nickelArr[1] = 0;
    dimeArr[1] = 0;
    quarterArr[1] = 0;
    oneArr[1] = 0;
    fiveArr[1] = 0;
    tenArr[1] = 0;
    twentyArr[1] = 0;
    hundredArr[1] = 0;
    finalArr.change.push(nickelArr);
    finalArr.change.push(dimeArr);
    finalArr.change.push(quarterArr);
    finalArr.change.push(oneArr);
    finalArr.change.push(fiveArr);
    finalArr.change.push(tenArr);
    finalArr.change.push(twentyArr);
    finalArr.change.push(hundredArr);
  } else {
    finalArr.status = 'OPEN';
  }
  console.log(finalArr);
  return finalArr;
}
checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);*/
/*
{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);*/

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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  //Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  } // no commas between methods
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Setting a property that already exists. You have to add the '_' then get it or you'll run into an error.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.greet();

//1. Classes are NOT hoisted you can't use them before their declared
//2. Classes are first-class citizens can pass into and return from a function
//3. Classes are executed in strict mode

// Setters and Getters
const walter = new PersonCl('Walter White', 1965);
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

// Static Methods.
//Array.from(document.querySelectorAll('h1')); //creates an array from the input.
//[1,2,3].from()//won't work because from is a static method on the Array object.

//You can make your own static methods
Person.hey = function () {
  console.log('Hey there ');
};
Person.hey();
//Not inherited
//jonas.hey(); //throws an error

//PersonCl.hey();

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sara = Object.create(PersonProto);
sara.init('Sara', 1986);
sara.calcAge();
*/
// CODING CHALLENGE #2\
//1. Re-create challenge #1, but this time using an ES6 class (call it 'CarC')
//2. Add a getter called 'speedUS' which returns the current speed in mph (divide by 1.6)
//3. Add a setter called 'speedUS' which sets the current speed in mph (but converts it to kmh before storing the value, by multiplying by 1.6)
//4 Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

//Test data: 'Ford' going 120 kph
/*
const CarC = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed + ' km/h');
  },
  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed + ' km/h');
  },
  get speedUS() {
    return this.speed / 1.6;
  },
  set speedUS(mph) {
    return (this.speed = mph * 1.6);
  },
};
const ford = Object.create(CarC);
ford.init('ford', 120);
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);
ford.accelerate();
console.log(ford.speed);
ford.brake();
console.log(ford.speed);
console.log(ford.speedUS);
*/
///////////// CONSTRUCTOR FUNCTION ////////////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //have to set the 'this'keyword
  this.course = course;
};
Student.prototype = Object.create(Person.prototype); //This gives the Student prototype access to the Person prototype through inheritance. Must do this right after creating the Student protoype.
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); //Keeps looking in the Prototype change until it finds the method as long as inheritence is created.
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
/*
// Coding Challenge #3
//Your tasks:
//1. Use a constructor function to implement an Electric Car (called 'EV') as a child class of 'Car'. BEsides a make and current speed, the 'EV' also has the current batter charge in %('charge' property).
//2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
//3. Implement an 'accelerate' method that will increase the car's speed by 20 and decrease the charge by 1%. Then log a message like this" 'Tesla going at 140 km/h with a charge of 22%'
//4. Create an electric car object and experiment with calling 'accelerate', 'brake', and 'chargeBattery'(charge to 90$). Notice what happens when you 'accelerate'!
//Test Data: 'Tesla' going at 120 km/h, with a charge of 23%.

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge--;
  console.log(
    `${this.make} is driving ${this.speed} km/h with a charge of ${this.charge}%`
  ); //Will always use the first 'accelerate' method in the prototype chain.
};
const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.accelerate();
console.log(tesla.speed);
tesla.brake();
console.log(tesla.speed);
tesla.chargeBattery(90);
tesla.accelerate();
*/
/*
///////////////Inheritence using ES6 classes////////////////
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  //Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  } // no commas between methods
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Setting a property that already exists. You have to add the '_' then get it or you'll run into an error.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  //Static method
  static hey() {
    console.log('Hey there');
  }
}
class StudentCl extends PersonCl {
  //extends links the prototypes behind the scense
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //super is basically the constructor function of the parent class. Always needs to happen first. Creates the this keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 25
      }`
    ); //will overwrite the parent clase calcAge()
  }
}
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

console.log(martha);
martha.introduce();
martha.calcAge();

//////// INHERITENCE BETWEEN CLASSES: OBJECT.CREATE ///////////////
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); //StudentProto now inherits from PersonProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto); //jay inherits from StudentProto which inherits from PersonProto
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
/////////// ANOTHER CLASS EXAMPLE ///////////////
// Public fields
// Private fields
// Public methods
// Private methods
// there is also a static method of each
class Account {
  // defining a public field (on instances), also referencable by the this keyword
  locale = navigator.language;

  // private fields (instances)
  #movements = [];
  #pin; //declare an empty variable, assign it in the constructor.
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property v, use and underscore to indicate
    //this._movements = []; //don't have to base it on any inputs
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  //Public methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this; //allows for method chaining
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  static helper() {
    //only works on the class itself
    console.log('Helper');
  }
  //Private methods - would use a # like the ones above but not yet implemented in google chrome
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//acc1.movements.push(250);
//acc1.movements.push(-140); better to create methods
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements()); //can access but not change the movements
console.log(acc1);
//console.log(acc1.#pin); no longer accessible

/////////////Encapsulation: Protected Properties and Methods//////
// keep methods private inside the class
//use underscore to indicate ones that are private.
//console.log(acc1.#movements); won't work because it is inaccessible getMovements will work
Account.helper();

////////////// Chaining Methods //////////////////////
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); //make sure the methods return this
console.log(acc1.getMovements());
*/
/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
??? Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed + ' km/h');
    return this;
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(this.speed + ' km/h');
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed = this.speed + 20;
    this.#charge--;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake();
console.log(rivian);
