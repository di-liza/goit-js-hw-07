import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const makeGalleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryListEl.innerHTML = makeGalleryItemsMarkup;
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`;
    })
    .join("");
}

const makeSimpleLightBoxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
