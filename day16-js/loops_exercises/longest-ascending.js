const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 25, 26, 27, 28, 12, -31, 19, -5, 32, 33, 1012, -14, -10, -11, 15, 16, -15, -2, 17];

const longestAscending = (arr) => {
  let longestArr = [];
  let provisionalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (provisionalArr.length === 0 || arr[i] > arr[i-1]) {
      provisionalArr.push(arr[i]);
    } else if (provisionalArr.length > longestArr.length) {
      longestArr = provisionalArr;
      provisionalArr = [arr[i]];
    } else {
      provisionalArr = [arr[i]];
    }
  }
  console.log(longestArr.length);
}

longestAscending(numbers);