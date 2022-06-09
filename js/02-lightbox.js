import { galleryItems } from './gallery-items.js';
// Change code below this line
const divElParent = document.querySelector('.gallery');

function makeItemEls(elem) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<ul class="gallery">
            <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image"
                src="${preview}"          
                alt="${description}"
                />
            </a>
            </li>
        </ul>`;
        })
        .join("");
    }

const ImgItems = makeItemEls(galleryItems);
divElParent.insertAdjacentHTML('beforeend', ImgItems);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
    });

console.log(galleryItems);
