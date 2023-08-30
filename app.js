const colors = ['green', 'red', 'rgba(133, 122, 200)', '#F15025']
const button = document.getElementById("button")
const color = document.querySelector(".color")

button.addEventListener("click", chiroyli)
function chiroyli(){
    const randomNum = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
}