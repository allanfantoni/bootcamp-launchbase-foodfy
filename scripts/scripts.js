function setBoldLink() {
  const urlCurrentPage = window.location.href;
  const aboutLink = document.querySelector('#aboutLink');
  const recipesLink = document.querySelector('#recipesLink');
  
  if (!aboutLink || !recipesLink)
    return;

  if (urlCurrentPage === aboutLink.href)
    aboutLink.classList.add('bold-link');
  else if (urlCurrentPage === recipesLink.href)
    recipesLink.classList.add('bold-link');
}

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  const image = card.getElementsByTagName('img')[0];
  image.addEventListener('click', function() {
    const image = card.getElementsByTagName('img')[0].alt;
    const title = card.getElementsByTagName('h3')[0].textContent;
    const info = card.getElementsByTagName('p')[0].textContent;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `layouts/assets/${image}.png`;
    modalOverlay.querySelector('h3').textContent = title;
    modalOverlay.querySelector('p').textContent = info;
  });
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
});