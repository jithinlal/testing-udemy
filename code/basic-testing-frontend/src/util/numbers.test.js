import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it('should return a number if number type is passed', () => {
	const number = 2;

	const result = transformToNumber(number);

	expect(result).toBe(number);
});

it('should return a number if the input number is of string type', () => {
	const number = '2';
	const expected = 2;

	const result = transformToNumber(number);

	expect(result).toBe(expected);
});

it('should return NaN if a string is passed', () => {
	const string = 'string';

	const result = transformToNumber(string);

	expect(result).toBeNaN();
});
