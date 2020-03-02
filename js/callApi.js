import { errorMessage } from './infoSection.js';

async function callApi(ENDPOINT, infoSection) {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    return data;
  } catch (error) {
    errorMessage(infoSection);
    return null;
  }
}

export { callApi };

