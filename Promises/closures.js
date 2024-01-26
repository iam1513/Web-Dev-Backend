function process() {
  let i = 0;
  function process2() {
    i = i + 1;
    return i;
  }
  return process2;
}

let res = process();

console.log(res);

console.log("First time calling returns : ", res());

console.log("Second time calling returns : ", res());

console.log("Third time calling returns : ", res());
