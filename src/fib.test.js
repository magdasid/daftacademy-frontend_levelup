const fib = require('./fib');

test('pass number less than 0 should throw error "Liczba mniejsza od 0"', () => {
    expect(() => fib(-1)).toThrowError(new Error("Liczba mniejsza od 0"));
});

test('pass not integer should throw error "Nieprawidłowy format przekazanego argumentu"', () => {
    expect(() => fib("number")).toThrowError(new Error("Nieprawidłowy format przekazanego argumentu"));
    expect(() => fib("")).toThrowError(new Error("Nieprawidłowy format przekazanego argumentu"));
    expect(() => fib("0")).toThrowError(new Error("Nieprawidłowy format przekazanego argumentu"));
    expect(() => fib(1.1)).toThrowError(new Error("Nieprawidłowy format przekazanego argumentu"));
});

test('pass 7 as a num should return [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    expect(fib(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
