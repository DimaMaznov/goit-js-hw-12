import { searchPhotos } from './js/pixabay-api.js';
import { markupInterface, listImg } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchButton = document.querySelector('.searchButton');
const loadMoreButton = document.querySelector('.load-more');
const input = document.querySelector('.input');
let query = '';
let page = 1;
let totalHits = 0;

const clearInput = () => {
  input.value = '';
};

const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

const handleSearch = async (event) => {
  event.preventDefault();
  query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'The search field cannot be empty! Please enter the search query!',
    });
    return;
  }

  page = 1;
  loadMoreButton.style.display = 'none';
  listImg.innerHTML = '';

  try {
    showLoader();
    const data = await searchPhotos(query, page);
    hideLoader();
    totalHits = data.totalHits;
    markupInterface(data);

    if (totalHits > 15) {
      loadMoreButton.style.display = 'block';
    }

    if (totalHits === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching data. Please try again later.',
    });
  }

  clearInput();
};

const handleLoadMore = async () => {
  page += 1;
  
  try {
    showLoader();
    const data = await searchPhotos(query, page);
    hideLoader();
    markupInterface(data);

    const totalLoadedImages = listImg.childElementCount;

    if (totalLoadedImages >= totalHits) {
      loadMoreButton.style.display = 'none';
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }


    const { height: cardHeight } = document.querySelector('.item-list').getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while loading more images. Please try again later.',
    });
  }
};

searchButton.addEventListener('click', handleSearch);
loadMoreButton.addEventListener('click', handleLoadMore);