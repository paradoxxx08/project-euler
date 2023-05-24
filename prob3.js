let number = 600851475143;
let prime = 2;
let result;
let isPrime = true;
while (prime <= number) {
    isPrime = true;
    for (let devision = 2; devision <= (Math.sqrt(prime)); devision++) {
        if (prime%devision === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && number%prime === 0) {
            number = number/prime;
            result = prime;
    }
    prime++;
}
console.log(result);