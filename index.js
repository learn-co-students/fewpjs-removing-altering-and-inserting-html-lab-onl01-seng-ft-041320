// Write your code here!

document.getElementById('main').remove()

let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.innerHTML = `YOUR-NAME is the champion`
newHeader.id = "victory"

