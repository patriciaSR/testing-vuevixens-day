'use strict';

import { getFilms } from './getFilms.js';
import { filterFilms, getFilters } from './filterFilms.js';
import { printFilms } from './printFilms.js';
import { addEventToTag } from './createTags.js';
import { createDirectorsSelect } from './getDirectors.js';

const queryInput = document.querySelector('.filter__input');
const infoSection = document.querySelector('.films__info-container');
const list = document.querySelector('.films__list');

getFilms(infoSection)
  .then((films) => {
    if (films !== null) {
      const directorSelect = createDirectorsSelect(films);

      addEventToTag(directorSelect, 'change', () => {
        const filters = getFilters(queryInput);
        const filteredFilms = filterFilms(films, filters);

        printFilms(list, infoSection, filteredFilms);
      });

      queryInput.addEventListener('keyup', () => {
        const filters = getFilters(queryInput);

        const filteredFilms = filterFilms(films, filters);

        printFilms(list, infoSection, filteredFilms);
      });
    }
  });
