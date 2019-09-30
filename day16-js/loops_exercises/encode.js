// ✽✽ Write a function called encode which implements the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as arrays [N, E] where N is the number of duplicates of the element E. The original array must stay the same.

// Example:

// > encode([3, 3, 3, 2, 2, 5, 5, 5, 4, 1, 1, 1])
// [[3, 3], [2, 2], [3, 5], [1, 4], [3, 1]]

const encode = (arr) => {
  let values = [];
  let occurences = [];
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (values.indexOf(arr[i]) === -1) {
      values.push(arr[i]);
      occurences.push(1);
    } else {
      occurences[values.indexOf(arr[i])]++;
    }
  }

  for (let i = 0; i < values.length; i++) {
    finalArr.push([occurences[i], values[i]]);
  }

  return finalArr;
  }

console.log(encode([3, 3, 3, 12, 2, 2, 5, 12, 5, 5, 4, 1, 1, 1]));
