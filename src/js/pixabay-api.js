import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
  }
  
  export function searchPhotos(input) {
    showLoader(); 
  
    const searchParams = new URLSearchParams({
      key: '43952869-c947639c32813e7ff22513d15',
      q: input.value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
  
    return fetch(url);
  }