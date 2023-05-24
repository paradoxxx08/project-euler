const a  = 3;
const b = 5;
let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i%a === 0 || i%b === 0) {
    sum = sum + i;
  }
}
console.log(sum);