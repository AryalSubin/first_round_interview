// Task 5: You are given an integer array nums and you have to return a
// new counts array where counts[i] is the number of smaller elements to the right of nums[i].

// smaller elements to the right
// i guess it is saying to calculate the number of smaller elements to its right and put the number in the counts array

// const nums = [10, 20, 3, 40, 5, 66];
// // the result should be count: [2,2 , 0, 1, 0, 0] 2=> 10 has two elements  to its right in the nums array
// const countsArray = [];

const returnCountFunction = (nums) => {
  const countsArray = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    countsArray[i] = count;
  }

  return countsArray;
};

const result = returnCountFunction([10, 20, 3, 40, 5, 66]);
console.log(result);
