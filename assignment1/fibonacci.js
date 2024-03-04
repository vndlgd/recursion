function fibs(n) {
  // write code here
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let array = [0, 1];

  // n - 2 to account for already having the first two fib numbers
  for (let i = 0; i < n - 2; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array;
}

console.log(fibs(8));

function fibsRec(n) {
  // write code here
}
