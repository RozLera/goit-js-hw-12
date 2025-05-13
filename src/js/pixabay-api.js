import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const params = {
  image_type: 'photo',
  oriention: 'horizontal',
  safesearch: true,
};

export async function getImagesByQuery(query, page) {
  try {
    const res = await axios('', {
      params: {
        q: query,
        key: '50191530-19c60f56ef7d22126639596e8',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
