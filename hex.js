const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const button = document.getElementById('button')
const color = document.querySelector('.color')

button.addEventListener("click", lalala)
function lalala(){
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNum()]
        // console.log(hexColor);
    }
     color.textContent = hexColor
     document.body.style.backgroundColor = hexColor
        // console.log(randomNumber);
}
function getRandomNum(){
    return Math.floor(Math.random()*hex.length)
}