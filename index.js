const newHeader = document.createElement('h1');

document.querySelector('body').removeChild(document.querySelector('body').firstElementChild);

document.body.appendChild(newHeader);

newHeader.id = "victory";

newHeader.innerHTML = "YOUR-NAME is the champion";