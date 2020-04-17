'use strict';

import { callApi } from './callApi.js';
import { printFilms } from './printFilms.js';

const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';

async function getFilms(section) {
  const filmsData = await callApi(ENDPOINT, section);
  const list = document.querySelector('.films__list');

  printFilms(list, section, filmsData);

  return filmsData;
}

export { getFilms };

