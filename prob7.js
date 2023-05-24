let prime = 2;
let isPrime = true;
let count = 0;
while (true) {
    isPrime = true;
    for (let devision = 2; devision <= (Math.sqrt(prime)); devision++) {
        if (prime%devision === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        count++;
    }
    if (count === 10001) {
        break;
    }
    prime++;
}
console.log(prime);