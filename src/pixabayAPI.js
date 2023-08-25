import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38894004-6d48aacf53b986fdbdf72bda8';

export default class FetchPhotosFromAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
    this.totalHits = null;
  }
  async getPhotos() {
  
    const response = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&page=${this.page}&per_page=${this.per_page}`,
    );

    if (this.page === 1 && response.data.totalHits !== 0) {
      Notiflix.Notify.success('Hooray! We found totalHits images.');
    }
    this.incrementPage();

    return response.data.hits;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
    this.totalHits = null;
  }
}