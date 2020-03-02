import { filterFilms, getFilters, isTextIncluded } from '../js/filterFilms.js';
import { mockFilms } from './fixtures/variables-fixtures.js';

describe('isTextIncluded function', () => {
  test('it returns true if title film is equal to query test', () => {
    const queryText = 'bambi';
    const film = mockFilms[0];

    const result = isTextIncluded(film, queryText);

    expect(result).toBe(true);
  });

  test('it returns false if title film is not equal to query test', () => {
    const queryText = 'lola';
    const film = mockFilms[0];

    const result = isTextIncluded(film, queryText);

    expect(result).toBe(false);
  });

  test('it returns true if queryText is "" ', () => {
    const queryText = '';
    const film = mockFilms[0];

    const result = isTextIncluded(film, queryText);

    expect(result).toBe(true);
  });
});

describe('filterFilms function , filter films by queries', () => {
  test('it returns all elements if filter is empty', () => {
    const queryText = '';
    const director = null;
    const filters = {
      queryText,
      director,
    };

    const result = filterFilms(mockFilms, filters);

    expect(result).toEqual(mockFilms);
  });

  test('it returns all elements that contains "bambi"', () => {
    const queryText = 'bambi';
    const director = null;
    const filters = {
      queryText,
      director,
    };

    const expected = mockFilms[0];

    const result = filterFilms(mockFilms, filters);

    expect(result.length).toBe(1);
    expect(result).toContain(expected);
  });

  test('it returns all elements that contains "dis" in description', () => {
    const queryText = 'dis';
    const director = null;
    const filters = {
      queryText,
      director,
    };

    const expected = [mockFilms[0], mockFilms[1], mockFilms[3]];

    const result = filterFilms(mockFilms, filters);

    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('it return all films that contains "nemo" and "luis"s director', () => {
    const queryText = 'nemo';
    const director = 'luis';
    const filters = {
      queryText,
      director,
    };

    const result = filterFilms(mockFilms, filters);

    expect(result.length).toBe(1);
    expect(result).toContain(mockFilms[2]);
  });

  test('it return all films that contains luis"s director', () => {
    const queryText = '';
    const director = 'luis';
    const filters = {
      queryText,
      director,
    };

    const expected = mockFilms[2];

    const result = filterFilms(mockFilms, filters);

    expect(result.length).toBe(2);
    expect(result).toContain(expected);
  });

  test('it throws an error if queryText is undefined', () => {
    const director = 'luis';
    const filters = {
      director,
    };

    expect(() => {
      filterFilms(mockFilms, filters);
    }).toThrow();
  });
});

describe('getFilters function', () => {
  // before test code execution
  // othet methods: afterEach, before y after.
  beforeEach(() => {
    document.body.innerHTML = `
      <input class="filter__input" />
      <select class="directors__select">
        <option value="Select a film director..."></option>
        <option value="foo">Foo</option>
        <option value="bar">Bar</option>
      </select>
    `;
  });

  test('it returns queryText filter', () => {
    const queryInput = document.querySelector('.filter__input');
    const queryText = 'hola';

    queryInput.value = queryText;
    const result = getFilters(queryInput);

    expect(result.queryText).toEqual(queryText);
  });

  test('it returns director filter', () => {
    const querySelect = document.querySelector('.directors__select');
    const director = 'foo';

    querySelect.value = director;
    const result = getFilters();

    expect(result.director).toEqual(director);
  });

  test('it returns null director filter', () => {
    const querySelect = document.querySelector('.directors__select');
    const director = 'Select a film director...';

    querySelect.value = director;
    const result = getFilters();

    expect(result.director).toEqual(null);
    // expect(result.director).toBeNull();
  });

  test('it returns " " queryText filter', () => {
    const queryInput = document.querySelector('.filter__input');
    const EmptyQueryText = '';

    queryInput.value = EmptyQueryText;
    const result = getFilters(queryInput);

    expect(result.queryText).toEqual(EmptyQueryText);
    // expect(result.director).toBeNull();
  });
});
