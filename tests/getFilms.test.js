function stubFunction(moduleName, fnName) {
  jest.mock(moduleName);

  const module = require(moduleName);

  module[fnName].mockImplementation(() => {});

  return module[fnName];
}

describe('getFilms function', () => {
  let printFilms;
  let callApi;
  let getFilms;

  beforeEach(() => {
    printFilms = stubFunction('../src/js/printFilms.js', 'printFilms');
    callApi = stubFunction('../src/js/callApi.js', 'callApi');

    // Import "getFilms" aftermocking everything
    getFilms = require('../src/js/getFilms.js').getFilms;
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('it calls to the films API when called', async () => {
    const infoSection = 'foo';

    const urlExpected = 'https://';

    await getFilms(infoSection);

    expect(callApi).toHaveBeenCalled();
    expect(callApi.mock.calls[0][0]).toEqual(expect.stringMatching(urlExpected));
    expect(callApi.mock.calls[0][1]).toBe(infoSection);
  });

  test('it renders the films when called', async () => {
    const infoSection = 'foo';
    const films = 'films list';
    const list = document.createElement('div');
    list.classList.add('films__list');
    document.body.appendChild(list);

    callApi.mockImplementation(() => films);

    await getFilms(infoSection);

    expect(printFilms).toHaveBeenCalledWith(list, infoSection, films);
  });

  test('it return the films', async () => {
    const films = 'films list';

    callApi.mockImplementation(() => films);

    const result = await getFilms();

    expect(result).toBe(films);
  });
});
