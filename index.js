// Write your code here!
document.querySelector("main").remove();

let h1 = document.createElement('h1');
document.body.appendChild(h1);

let newHeader = document.querySelector('h1');

newHeader.id = 'victory';

newHeader.innerHTML = "David is the champion";