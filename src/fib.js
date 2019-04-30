function fib(num) {
    if(!Number.isInteger(num)) {
        throw new Error("Nieprawidłowy format przekazanego argumentu");
    }
    if(num < 0) {
        throw new Error("Liczba mniejsza od 0");
    }

    let fibbonacciArray = [0,1];
    let i = 2;

    if(num === 0) {
        fibbonacciArray = [0];
    } else if(num === 1) {
        fibbonacciArray = [0,1];        
    } else {
        while (i <= num) {
            fibbonacciArray.push(fibbonacciArray[i-1] + fibbonacciArray[i-2]);
            i++;
        } 
    }
    return fibbonacciArray;
}

module.exports = fib;