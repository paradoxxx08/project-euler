let sum = 0;
let prime = 2;
let isPrime = true;
while (prime < 2000000) {
    isPrime = true;
    for (let devision = 2; devision <= (Math.sqrt(prime)); devision++) {
        if (prime%devision === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        sum = sum + prime;
    }
    prime++;
}
console.log(sum);