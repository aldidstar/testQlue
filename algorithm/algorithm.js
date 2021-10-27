const n = 4;
let count = 0;
for (let i = 1; i <= n; i++) {
  let alg = n;
  let result = "";
  for (let j = 1; j <= i; j++) {
    if (n - alg > 1) {
      alg = 1;
    } else if (alg - count >= 1) {
      alg -= count;
    }
    result += alg + ",";
  }
  count++;
  console.log(result);
}
