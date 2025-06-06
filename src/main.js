import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  simpleLightbox,
} from './js/render-functions';

let query = '';
let page = 1;

const formEl = document.querySelector('.js-form');
const loader = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.btn-loader');

formEl.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onFormSubmit(event) {
  event.preventDefault();
  page = 1;

  query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    iziToast.warning({
      position: 'topRight',
      message: 'Please enter the correct query!',
    });
    return;
  }
  clearGallery();
  showLoader(loader);

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.warning({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader(loadMoreBtn);
      clearGallery();
      return;
    }
    if (data.totalHits > 15) {
      showLoader(loadMoreBtn);
    }

    createGallery(data.hits);

    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideLoader(loader);
    formEl.reset();
  }
}

async function onLoadMoreBtnClick() {
  showLoader(loader);

  try {
    page += 1;

    const data = await getImagesByQuery(query, page);
    if (page * 15 >= data.totalHits) {
      hideLoader(loadMoreBtn);

      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    createGallery(data.hits);
    const galleryItem = document.querySelector('.gallery-item');
    const elementHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: elementHeight * 2,
      behavior: 'smooth',
    });

    simpleLightbox.refresh();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `ERROR: ${error}`,
    });
  } finally {
    hideLoader(loader);
    formEl.reset();
  }
}
