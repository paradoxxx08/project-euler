let difference = 0;
let total1 = 0;
let total2 = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
  total1 += Math.pow(i, 2);
}
for (let j = 1; j <= 100; j++) {
  sum += j;
}
total2 = Math.pow(sum, 2);
difference = total2 - total1;
console.log(difference);