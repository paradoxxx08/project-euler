let sum = 0;
let a = 1;
let b = 2;
let i = a; 
while (i < 4000000) {
  b = a;
  a = i;
  if (i%2 === 0) {
    sum += i;
  }
  i = a + b;
}
console.log(sum);