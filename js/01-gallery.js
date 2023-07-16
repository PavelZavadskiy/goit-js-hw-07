import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector('.gallery');

// create via innerHTML
const items = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" />
        </a>
      </li>`
  )
  .join('');
gallery.innerHTML = items;

// create via createElement
// let items = [];
// for (let i = 0; i < galleryItems.length; i++) {
//   let item = document.createElement('li');
//   item.classList.add('gallery__item');
//   {
//     {
//       let link = document.createElement('a');
//       link.classList.add('gallery__link');
//       link.href = galleryItems[i].original;
//       {
//         let img = document.createElement('img');
//         img.src = galleryItems[i].preview;
//         img.alt = galleryItems[i].description;
//         img.setAttribute('data-source', galleryItems[i].original);
//         img.classList.add('gallery__image');
//         link.append(img);
//       }
//       item.append(link);
//     }
//   }
//   item.classList.add('gallery__item');
//   items.push(item);
// }
// gallery.append(...items);

gallery.addEventListener('click', zoom);

function zoom(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) return;
  basicLightbox
    .create(`<img src="${event.target.getAttribute('data-source')}" width="800" height="600">`, {
      onShow: instance => {
        document.onkeydown = function (evt) {
          evt = evt;
          let isEscape = false;
          if ('key' in evt) {
            isEscape = evt.key === 'Escape' || evt.key === 'Esc';
          } else {
            isEscape = evt.keyCode === 27;
          }
          if (isEscape) {
            document.onkeydown = null;
            instance.close();
          }
        };
      },
    })
    .show();
}

console.log(galleryItems);
