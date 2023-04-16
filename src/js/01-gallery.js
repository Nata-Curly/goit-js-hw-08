import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

//      {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
const listItems = document.querySelector('.gallery');

(function () {
    const markup = galleryItems.map(({ preview, original, description }) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
    listItems.insertAdjacentHTML('beforeend', markup);
})()

listItems.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    evt.preventDefault();
    
}

const lightbox = new SimpleLightbox('.gallery a', { 
        captionSelector: 'img',
        captionsData: 'alt', 
        captionPosition: 'bottom',
        captionDelay: 250,
        enableKeyboard: true,
        animationSlide: true,
        overlay: true,
});