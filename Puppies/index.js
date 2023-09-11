import axios from 'axios';
require('dotenv').config();
let page = 1;
const imagesPerPage = 20;
const mainContainer = document.querySelector('.mainContainer');
const allButton = document.querySelector('#allButton');
const colorButtons = document.querySelectorAll('.colorButton');
let imageDataArray = [];

document.addEventListener('DOMContentLoaded', function () {
  let currentFilterColor = '';
  function fetchAndLoadImages() {
    const URL = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppies&page=${page}&per_page=${imagesPerPage}`;
    axios
      .get(URL)
      .then(function (response) {
        if (response.data) {
          const dataResult = response.data.results;
          imageDataArray = imageDataArray.concat(dataResult);
          renderFilteredImages(currentFilterColor);
        }
        page++;
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }

  function renderFilteredImages(color) {
    mainContainer.innerHTML = '';
    imageDataArray.forEach((result) => {
      const photographerName = result.user.name;
      const photographerProfileUrl = result.user.links.html;
      const imageUrl = result.urls.regular;
      const imageAltTag = result.alt_description;

      const imageAltTagLowercase = imageAltTag.toLowerCase();

      if (color === '' || imageAltTagLowercase.includes(color)) {
        const attribution = generateUnsplashAttribution(photographerName, photographerProfileUrl);

        const attributionP = document.createElement('p');
        attributionP.innerHTML = attribution;

        const image = document.createElement('img');
        image.src = `${imageUrl}`;
        image.alt = `${imageAltTag}`;

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageDiv');
        imageContainer.appendChild(image);
        imageContainer.appendChild(attributionP);
        mainContainer.appendChild(imageContainer);
      }
    });
  }

  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener('click', () => {
      currentFilterColor = colorButton.getAttribute('data-color');
      renderFilteredImages(currentFilterColor);
    });
  });

  allButton.addEventListener('click', () => {
    currentFilterColor = '';
    renderFilteredImages(currentFilterColor);
  });

  fetchAndLoadImages();

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      fetchAndLoadImages();
    }
  });

  function generateUnsplashAttribution(photographerName, photographerProfileUrl) {
    const referral = '?utm_source=Puppies&utm_medium=referral';
    return `Photo by <a href="${photographerProfileUrl}${referral}" target="_blank" rel="noopener noreferrer">
      ${photographerName}</a> on 
      <a href="https://unsplash.com/${referral}" target="_blank" rel="noopener noreferrer"">Unsplash</a>`;
  }
});
