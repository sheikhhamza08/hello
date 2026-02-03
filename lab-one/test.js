const f = [2, 3];
const m = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumOfMultiples(f, m) {
  let sum = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < f.length; j++) {
      if (f[j] !== 0 && m[i] % f[j] === 0) {
        sum += m[i];
        break;
      }
    }
  }

  return sum;
}
const result = sumOfMultiples(f, m);
console.log("sum:", result);
