const btnsRipple = document.querySelectorAll('.btn-ripple')
const formLabels = document.querySelectorAll('.form-ctrl__label')

function addRipplesToBtns(selectedClass = null){
  if(selectedClass !== null){
    selectedClass.forEach(btn => {
      btn.addEventListener('click', function(e) {
        const xClientPos = e.clientX
        const yClientPos = e.clientY
    
        const btnTopPos = e.target.offsetTop
        const btnLeftPos = e.target.offsetLeft
    
        const xInsideBtn = xClientPos - btnLeftPos
        const yInsideBtn = yClientPos - btnTopPos
    
        const circle = document.createElement('span')
        circle.classList.add('btn__circle')
        circle.style.top = yInsideBtn + 'px'
        circle.style.left = xInsideBtn + 'px'
    
        this.appendChild(circle)
    
        setTimeout(() => {
          circle.remove()
        }, 500);
      })
    })
  }
}

formLabels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span class='label__letter' style='transition-delay:${idx * 20}ms'>${letter}</span>`)
    .join('')
})

addRipplesToBtns(btnsRipple)