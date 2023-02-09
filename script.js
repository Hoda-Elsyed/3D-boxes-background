const magicBtn = document.querySelector('.magic')
const bigBox = document.querySelector('.big-box')

for (let i = 0; i < 4; i++) {
    for (let x = 0; x < 4; x++) {
        const smallBox = document.createElement('div')
        smallBox.classList.add('small')
        bigBox.appendChild(smallBox)
        smallBox.style.backgroundPosition = `${-x*125}px ${-i*125}px`
    }
    
}
magicBtn.addEventListener('click', ()=>{
    bigBox.classList.toggle('expand')
})