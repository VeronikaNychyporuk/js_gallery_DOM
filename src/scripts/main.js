'use strict';

const allImages = document.querySelectorAll('.list-item__link');
const largeImage = document.querySelector('.gallery__large-img');

for (const img of allImages) {
  img.addEventListener('click', (e) => {
    e.preventDefault();

    largeImage.src = img.href;
  });
}
