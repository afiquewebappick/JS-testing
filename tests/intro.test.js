import { describe, test, it, expect } from 'vitest';
import { factorial, fizzBuzz, max } from '../src/intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe('fizzBuzz', () => {
  it('should return fizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return fizzBuzz', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it('should return fizzBuzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('should return fizzBuzz', () => {
    expect(fizzBuzz(4)).toBe('4');
  });
});

describe('factorial', () => {
  it('should return one', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return one', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return two', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return undefined', () => {
    expect(factorial(-1)).toBeUndefined();
  });

  it('should return six', () => {
    expect(factorial(3)).toBe(6);
  });
});
