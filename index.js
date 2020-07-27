// Write your code here!

var element = document.querySelector('main');
element.remove();

var newHeader = document.createElement('h1');
console.log(newHeader.className)
newHeader.id = 'victory'
newHeader.innerHTML = 'Jaeson is the champion'
newHeader.className = 'victory';