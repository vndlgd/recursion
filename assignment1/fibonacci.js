function fibs(n) {
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

function fibsRec(n, array = [0, 1]) {
  let len = array.length;
  if (n < 2) {
    return array.slice(0, n);
  } else {
    if (len < n) {
      return fibsRec(n, array.concat(array[len - 2] + array[len - 1]));
    } else {
      return array;
    }
  }
}

console.log(fibs(8));
console.log(fibsRec(8));
