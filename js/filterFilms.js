function isTextIncluded(film, queryText) {
  queryText = queryText.toLowerCase();

  return film.title.toLowerCase().includes(queryText)
   || film.description.toLowerCase().includes(queryText);
}

function filterFilms(films, queryText) {
  const filteredFilms = films
    .filter((film) => isTextIncluded(film, queryText));

  return filteredFilms;
}

export { filterFilms, isTextIncluded };

