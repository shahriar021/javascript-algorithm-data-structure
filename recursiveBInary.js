const recursiveBinary = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, l, r) => {
  if (l > r) {
    return -1;
  }

  let mid = Math.floor((l + r) / 2);

  if (target == arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, l, mid - 1);
  } else {
    return search(arr, target, mid + 1, r);
  }
};

console.log(recursiveBinary([2, 5, 9, 80, 100], 100));
