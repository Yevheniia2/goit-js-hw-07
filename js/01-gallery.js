import { galleryItems } from './gallery-items.js';
// Change code below this line
const divElParent = document.querySelector('.gallery');

let instance;

function makeItemEls (elem) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
        })
        .join("");
}

const ImgItems = makeItemEls(galleryItems);
divElParent.insertAdjacentHTML('beforeend', ImgItems);
divElParent.addEventListener("click", onDivElParentClick);

function onDivElParentClick (event) {
    event.preventDefault();
    
    if (event.target.classList.contains('gallery')) return;
        const source = event.target.dataset.source;

    const options = {
        onClose: (instance) => { document.removeEventListener('keydown', onEscKeyPress); }
    }

    instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`, options);
    
    instance.show(document.addEventListener('keydown', onEscKeyPress));
};
console.log(galleryItems);

function onEscKeyPress(event) {
    if (event.key === 'Escape') {
        instance.close(document.removeEventListener('keydown', onEscKeyPress));
    }
}
