function mergesort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const left = array.slice(0, array.length / 2);
    const right = array.slice(array.length / 2);

    const sortedLeft = mergesort(left);
    const sortedRight = mergesort(right);

    return merge(sortedLeft, sortedRight);
  }
}

function merge(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  while (left.length) {
    sortedArray.push(left.shift());
  }

  while (right.length) {
    sortedArray.push(right.shift());
  }

  return sortedArray;
}
