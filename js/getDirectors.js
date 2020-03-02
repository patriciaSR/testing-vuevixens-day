import { createSelectTag } from './createTags.js';

function getDirectors(films = []) {
  const filmsDirectors = [];

  films.forEach((film) => {
    if (!filmsDirectors.includes(film.director)) {
      filmsDirectors.push(film.director);
    }
  });

  return filmsDirectors;
}

function createDirectorsSelect(films) {
  const directors = getDirectors(films);
  const newSelect = createSelectTag(directors, 'Select a film director...', 'directors');
  const filterSection = document.querySelector('.main__filter');

  filterSection.appendChild(newSelect);

  return newSelect;
}

export { getDirectors, createDirectorsSelect };
