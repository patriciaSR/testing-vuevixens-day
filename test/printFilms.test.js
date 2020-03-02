import { unfoldDescription, printFilm, printFilms } from '../js/printFilms.js';
import { mockFilms } from './fixtures/variables-fixtures.js';

describe('unfoldDescription function', () => {
  test('it toogles the class hidden in an element', () => {
    const textDescription = document.createElement('p');
    const mockEvent = {
      currentTarget: {
        nextSibling: textDescription,
      },
    };

    unfoldDescription(mockEvent);

    expect(textDescription.classList).toContain('hidden');

    unfoldDescription(mockEvent);

    expect(textDescription.classList).not.toContain('hidden');
  });
});

describe('printFilms functions', () => {
  describe('printFilm function', () => {
    test('it creates a new <li> with film info', () => {
      const film = mockFilms[0];

      const result = printFilm(film);

      const resultTitle = result.querySelector('.film__title');
      const resultImage = result.querySelector('.film__image');
      const resultDescription = result.querySelector('.film__description-text');

      expect(result.tagName).toBe('LI');
      expect(resultTitle.tagName).toBe('H2');
      expect(resultTitle.textContent).toBe(film.title);
      expect(resultImage.tagName).toBe('IMG');
      expect(resultDescription.tagName).toBe('P');
      expect(resultDescription.textContent).toBe(film.description);
      expect(resultDescription.classList).toContain('hidden');
    });
  });

  describe('printFilms function', () => {
    document.body.innerHTML = `
      <ol></ol>
      <div></div>
    `;

    const list = document.querySelector('ol');
    const infoSection = document.querySelector('div');

    test('it print <ol> with all films <li>', () => {
      printFilms(list, infoSection, mockFilms);

      const resultLis = list.querySelectorAll('li');
      expect(resultLis.length).toBe(4);
      expect(infoSection.innerHTML.length).toBe(0);
    });

    test('it prints noResults <div>  with undefined filmsArray', () => {
      printFilms(list, infoSection);
      const noResultContainer = infoSection.querySelector('.noResults__container');
      const noResultText = infoSection.querySelector('.noResults__text');

      expect(infoSection.innerHTML.length).not.toBe(0);
      expect(noResultContainer.tagName).toBe('DIV');
      expect(noResultText.tagName).toBe('P');
      expect(noResultText.textContent).toBe('No results :( ');
    });
  });
});
