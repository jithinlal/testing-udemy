import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
	// Arrange
	const numbers = [1, 2, 3];
	const expected = 6;
	// Act
	const result = add(numbers);
	// Assert
	expect(result).toBe(expected);
});

it('should yield NaN if atleast one invalid number is provided', () => {
	const inputs = ['invalid', 1];
	const result = add(inputs);

	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numberic string values is provided', () => {
	const numbers = ['1', '2'];
	const expected = 3;

	const result = add(numbers);

	expect(result).toBe(expected);
});

it('should yield 0 if an empty array is provided', () => {
	const numbers = [];
	const expected = 0;
	const result = add(numbers);

	expect(result).toBe(expected);
});

it('should throw an error if no value is passed into the function', () => {
	const resultFn = () => {
		add();
	};

	expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
	const num1 = 1;
	const num2 = 2;

	const resultFn = () => {
		add(num1, num2);
	};

	expect(resultFn).toThrow();
});
