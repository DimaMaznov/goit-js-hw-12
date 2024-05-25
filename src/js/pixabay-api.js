

import axios from 'axios';

export async function searchPhotos(query, page = 1) {
  const searchParams = new URLSearchParams({
    key: '43803497-a801e9cfe7ea9bdd19d306bb3',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  });

  try {
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}