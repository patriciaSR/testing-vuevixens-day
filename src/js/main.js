'use strict';

import { filterFilms } from './filterFilms.js';
import { getFilms } from './getFilms.js';
import { printFilms } from './printFilms.js';

const queryInput = document.querySelector('.filter__input');
const infoSection = document.querySelector('.films__info-container');
const list = document.querySelector('.films__list');

getFilms(infoSection)
  .then((films) => {
    if (films !== null) {
      queryInput.addEventListener('keyup', () => {
        const filteredFilms = filterFilms(films, queryInput.value);

        printFilms(list, infoSection, filteredFilms);
      });
    }
  });
