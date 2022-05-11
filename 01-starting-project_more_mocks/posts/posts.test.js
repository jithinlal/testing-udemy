import { describe, expect, it, ite } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData', () => {
	it('should extract titel and content from the provided form data', () => {
		const testTitle = 'Title';
		const testContent = 'Content';

		const testFormData = {
			title: testTitle,
			content: testContent,
			get(identifier) {
				return this[identifier];
			},
		};

		const data = extractPostData(testFormData);

		expect(data.title).toBe(testTitle);
		expect(data.content).toBe(testContent);
	});
});
