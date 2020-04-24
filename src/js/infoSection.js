const totoroSad = './src/images/totoroSad.gif';
const totoroNotFound = './src/images/totoroNotFound.png';


function noResults(list, infoSection) {
  list.innerHTML = '';

  const noResult = `<div class="noResults__container">
                      <p class="noResults__text">No results :( </p>
                      <img class="noResults__gif" src=${totoroSad} alt="No results gif" />
                    </div>`;

  infoSection.innerHTML = noResult;
}

function errorMessage(infoSection) {
  const ErrorText = `<div class="noResults__container">
                      <p class="noResults__text">Oops! something went wrong. Try again later :)</p>
                      <img class="noResults__png" src=${totoroNotFound} alt="Oops error" />
                    </div>`;

  infoSection.innerHTML = ErrorText;
}


export { noResults, errorMessage };

