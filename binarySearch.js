const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + r) / 2;
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([4, 9, 23, 65, 100], 23));

//time complexity O(logn)
