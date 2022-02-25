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
/////////////////////////////////////////////////
*/
