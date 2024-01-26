function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }

  return ans;
}

function SumTill100() {
  console.log(findSum(10000000000));
}

setTimeout(SumTill100, 1000);
console.log("Hello");
