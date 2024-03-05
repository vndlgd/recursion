function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid, array.length));
  return merge(left, right);
}

function merge(left, right) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  // copy the remaining elements
  mergedArray = mergedArray.concat(left.slice(i)).concat(right.slice(j));

  return mergedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
