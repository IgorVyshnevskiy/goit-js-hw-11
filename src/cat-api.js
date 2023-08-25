import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_pGeNZwHjGg11WMLdEs4Y0nUWmDM7pKCFJ25NQqll0L0duSOR1Pil28etybJDSTkj';

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios
    .get(`${BASE_URL}/breeds`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'live_pGeNZwHjGg11WMLdEs4Y0nUWmDM7pKCFJ25NQqll0L0duSOR1Pil28etybJDSTkj',
      },
    })
    .then(r => {
      return r.data;
    });
}
function fetchCatByBreed(breedId) {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios
    .get(`${BASE_URL}/images/search?${params}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'live_pGeNZwHjGg11WMLdEs4Y0nUWmDM7pKCFJ25NQqll0L0duSOR1Pil28etybJDSTkj',
      },
    })
    .then(r => {
      if (!r.data.length) {
        throw new Error(r.statusText);
      }
      return r.data;
    });
}

export { fetchBreeds, fetchCatByBreed };
