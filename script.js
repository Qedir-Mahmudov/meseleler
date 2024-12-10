/* 1) */
// for dövrü ilə
/* for (let i = 1; i <= 100; i++) {
    console.log(i);
} */

// while dövrü ilə
/* let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
} */




/* 2) */
/* let arr = [5, 7, 1, 12, 3];
let min = Math.min(...arr);
console.log("Ən kiçik ədəd:", min); */


/* 3) */
/* let arr = [5, 7, 1, 12, 3];
let max = Math.max(...arr);
console.log("Ən böyük ədəd:", max); */




/* 4) */
/* function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = 11;
if (isPrime(number)) {
    console.log(number + " sadə ədəddir.");
} else {
    console.log(number + " mürəkkəb ədəddir.");
} */


/* 5) */
/* let arr = [5, 1, 8, 2, 4];
arr.sort((a, b) => a - b); 
console.log("Artan sıra ilə düzəldilmiş array:", arr); */





/* 6) */
function getPrimesUpToN(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

let n = 20; 
let primeNumbers = getPrimesUpToN(n);
console.log(`1-dən ${n}-ə qədər sadə ədədlər:`, primeNumbers);
