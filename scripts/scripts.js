function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { 
            elmnt.innerHTML = this.responseText; 
            setBoldLink();
          }
          if (this.status == 404) { 
            elmnt.innerHTML = "Page not found."; 
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function setBoldLink() {
  const urlCurrentPage = window.location.href;
  const aboutLink = document.querySelector('#about-link');
  const recipesLink = document.querySelector('#recipes-link');
  
  if (!aboutLink || !recipesLink) {
    return;
  }

  if (urlCurrentPage === aboutLink.href) {
    aboutLink.classList.remove('other-links');
    aboutLink.classList.add('bold-link');
  } else if (urlCurrentPage === recipesLink.href) {
    recipesLink.classList.remove('other-links');
    recipesLink.classList.add('bold-link');
  }
}