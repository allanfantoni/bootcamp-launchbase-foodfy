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