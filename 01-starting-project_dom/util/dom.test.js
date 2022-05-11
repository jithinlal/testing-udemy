import { beforeEach, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';
import fs from 'fs';
import path from 'path';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocumentContent);
});

it('should add an error paragraph', () => {
	showError('test');

	const errorEl = document.getElementById('errors');
	const errorPara = errorEl.firstElementChild;

	expect(errorPara).not.toBeNull();
});

it('should not contain an error para', () => {
	const errorEl = document.getElementById('errors');
	const errorPara = errorEl.firstElementChild;

	expect(errorPara).toBeNull();
});
