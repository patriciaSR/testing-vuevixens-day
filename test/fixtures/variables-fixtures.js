const ENDPOINTGOOD = './fixtures.filmsApi.js';
const ENDPOINTBAD = 'https://ghibliapi.herokuappjasdjkh';

const mockFilms = [
  {
    title: 'bambi',
    description: 'deer disney',
    director: 'patricia',
  },
  {
    title: 'dumbo',
    description: 'elephant disney',
    director: 'paco',
  },
  {
    title: 'nemo',
    description: 'fish pixar',
    director: 'luis',
  },
  {
    title: 'the lion king',
    description: 'lion disney',
    director: 'luis',
  },
];

const totoroImg = 'https://i.pinimg.com/originals/f7/f8/4d/f7f84dc6d93cb70b5ea612fd26f5dd24.jpg';

const mockPhotos = [
  {
    name: 'bambi',
    photo: 'bambiURL',
  },
  {
    name: 'dumbo',
    photo: 'dumboURL',
  },
];

export {
  ENDPOINTGOOD,
  ENDPOINTBAD,
  mockFilms,
  mockPhotos,
  totoroImg,
};
