import { errorMessage, noResults } from '../src/js/infoSection.js';

describe('infoSection testing', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div></div>
      <ol></ol>
    `;
  });

  describe('noResults function', () => {
    test('it creates a no results <div> inside an element', () => {
      const list = document.querySelector('ol');
      const infoSection = document.querySelector('div');

      noResults(list, infoSection);

      const result = infoSection.firstChild;
      const resultText = result.querySelector('.noResults__text');

      expect(result.tagName).toBe('DIV');
      expect(result.classList).toContain('noResults__container');
      expect(resultText.tagName).toBe('P');
      expect(resultText.textContent).toBe('No results :( ');
      expect(resultText.classList).toContain('noResults__text');
    });

    test('it throws an error if container is undefined', () => {
      expect(() => {
        noResults();
      }).toThrow();
    });
  });

  describe('ErrorMessage function', () => {
    test('it creates a errorMessage <div> inside an element', () => {
      const infoSection = document.querySelector('div');

      errorMessage(infoSection);

      const result = infoSection.firstChild;
      const resultText = result.querySelector('.noResults__text');

      expect(result.tagName).toBe('DIV');
      expect(result.classList).toContain('noResults__container');
      expect(resultText.tagName).toBe('P');
      expect(resultText.textContent).toBe('Oops! something went wrong. Try again later :)');
      expect(resultText.classList).toContain('noResults__text');
    });

    test('it throws an error if container is undefined', () => {
      expect(() => {
        errorMessage();
      }).toThrow();
    });
  });
});
