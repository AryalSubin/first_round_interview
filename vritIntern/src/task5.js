// Task 5: You are given an integer array nums and you have to return a
// new counts array where counts[i] is the number of smaller elements to the right of nums[i].

// smaller elements to the right  
// i guess it is saying to calculate the number of smaller elements to its right and put the number in the counts array

const nums = [10, 20, 3, 40, 5, 66];
// the result should be count: [2,2 , 0, 1, 0, 0] 2=> 10 has two elements  to its right in the nums array 
const countsArray = [];


const returncountFunction = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    currEl = nums[i]; // 10
    for (let j = i + 1; j < nums[j]; j++) {
      nexEl = nums[j]; //20
      if (currEl > nextEl) {
        count++;
      }
    }
    if (countsArray[i]) {
      countsArray[i] = count;
    } else {
      countsArray[i]++;
    }
  }
  return countsArray;
};

const result = returncountFunction();
console.log(result);
