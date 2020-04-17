const ENDPOINTGOOD = './fixtures.filmsApi.js';
const ENDPOINTBAD = 'https://WRONGghibliapi.com';

const mockFilms = [
  {
    title: 'Titanic',
    description: 'Rose podría haberle hecho un hueco a Jack perfectamente. ¡No te la pierdas!',
    director: 'James Cameron',
  },
  {
    title: 'Avatar',
    description: 'Aun tendremos que esperar para la segunda parte mucho tiempo. ¡No te la pierdas!',
    director: 'James Cameron',
  },
  {
    title: 'Todo sobre mi madre',
    description: 'Tu drama favorito. ¡No te la pierdas!',
    director: 'Almodovar',
  },
  {
    title: 'Foodie Love',
    description: 'Serie para los amantes de la comida.',
    director: 'Isabel Coixet',
  },
];

export { ENDPOINTGOOD, ENDPOINTBAD, mockFilms };

