import { getDirectors, createDirectorsSelect } from '../js/getDirectors.js';

import { mockFilms } from './fixtures/variables-fixtures.js';

describe('getDirectors function', () => {
  test('it returns an array with unique directors', () => {
    const expected = ['patricia', 'paco', 'luis'];

    const result = getDirectors(mockFilms);

    expect(result.length).toBe(3);
    expect(result).toEqual(expected);
    expect(result[0]).toBe(expected[0]);
  });

  test('it returns an empty array with no films array', () => {
    const result = getDirectors();

    expect(result.length).toBe(0);
  });
});

describe('createDirectorsSelect function', () => {
  document.body.innerHTML = `
      <input />
      <section class="main__filter" />
      <ol></ol>
      <div></div>
    `;

  test('it returns a select node inside main__filter', () => {
    createDirectorsSelect(mockFilms);

    const filterSection = document.querySelector('section');
    const select = document.querySelector('select');
    const options = document.querySelectorAll('option');

    expect(filterSection.innerHTML.length).not.toBe(0);
    expect(select.length).toBe(4);
    expect(options[0].classList).toContain('directors__option');
    expect(options[0].textContent).toBe('Select a film director...');
    expect(options.length).toBe(4);
  });
});
