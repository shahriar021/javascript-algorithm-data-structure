const factorial = (n) => {
  if (n == 0) {
    return 1;
  }
  let ans = 1;
  for (i = 1; i <= n; i++) {
    ans = i * ans;
  }

  return ans;
};

console.log(factorial(5));
