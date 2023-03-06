import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(galleryItems) {
  const makeGallery = galleryItems
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
  return makeGallery;
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  const prewievImage = event.target.nodeName === "IMG";
  if (!prewievImage) {
    return;
  }
  showLargeGalleryImage(event);
}

let galleryModal = null;

function showLargeGalleryImage({ target }) {
  const largeImage = target.dataset.source;

  galleryModal = basicLightbox.create(
    ` <img
        src="${largeImage}"
      />`
  );
  document.addEventListener("keydown", onEscapeKeyDown);
  galleryModal.show();
}

function closeGalleryModal() {
  document.removeEventListener("keydown", onEscapeKeyDown);
  galleryModal.close();
}
function onEscapeKeyDown(event) {
  if (event.key === "Escape") {
    closeGalleryModal();
  }
}
