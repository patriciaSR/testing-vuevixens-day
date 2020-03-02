import { filterFilms, isTextIncluded } from '../js/filterFilms.js';
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

    const result = filterFilms(mockFilms, queryText);

    expect(result).toEqual(mockFilms);
  });

  test('it returns all elements that contains "bambi"', () => {
    const queryText = 'bambi';
    const expected = mockFilms[0];

    const result = filterFilms(mockFilms, queryText);

    expect(result.length).toBe(1);
    expect(result).toContain(expected);
  });

  test('it returns all elements that contains "dis" in description', () => {
    const queryText = 'dis';
    const expected = [mockFilms[0], mockFilms[1], mockFilms[3]];

    const result = filterFilms(mockFilms, queryText);

    expect(result.length).toBe(3);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('it throws an error if queryText is undefined', () => {
    expect(() => {
      filterFilms(mockFilms, undefined);
    }).toThrow();
  });
});
