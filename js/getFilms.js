'use strict';

import { callApi } from './callApi.js';
import { addLoader, removeLoader } from './infoSection.js';
import { printFilms } from './printFilms.js';
import { timeout } from './timeout.js';

const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';

async function getFilms(section) {
  addLoader(section);
  await timeout(2000);

  const filmsData = await callApi(ENDPOINT, section);
  const list = document.querySelector('.films__list');

  removeLoader();
  printFilms(list, section, filmsData);

  return filmsData;
}

export { getFilms };

