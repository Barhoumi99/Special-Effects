const text = 'Hover Me!'
const hoverMe = document.getElementById('hover-me')
for(let i = 0; i < text.length; i++) {
    let char = document.createElement('span')
    char.innerText = text[i]
    char.classList.add('letter')
    hoverMe.appendChild(char)
}

const letters = document.getElementsByClassName('letter')
function ranInt(max, min) {
    return Math.ceil(Math.random() * (max - min) + min)
}

hoverMe.addEventListener('mouseover', () => {

    for(let i of letters) {
        i.style.transition = 'transform 1s ease-in-out'
        i.style.transform = `translate(${ranInt(-20, 20)}px, ${ranInt(-20, 20)}px) rotate(${ranInt(-50, 50)}deg)`
    }
})
hoverMe.addEventListener('mouseleave', () => {
    for(let i of letters) {
        i.style.transform = 'none'
        i.style.transition = 'transform 1s ease-in-out'
    }
})