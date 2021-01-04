const paintSquaresContainer = document.getElementById('js-paint-squares')

function paintSquares(container = ''){
  const clientWidth = document.body.clientWidth
  const clientHight = document.body.clientHeight
  const squares = Math.round(clientWidth * clientHight / 16) // Can't do full screen because of perfomance issue, maybe a table would work

  for(let i = 0; i < 500; i++){
    const square = document.createElement('div')
    square.classList.add('paint-squares__square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
  }
}

function setColor(el = ''){
  const colorsArr = ['#e74c3c', '#8ea44ad', '#3498db', '#e67e22', '#2ecc71']
  const color = getRandomColor(colorsArr)
  el.style.background = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el = ''){
  el.style.background = '#242424'
  el.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(colors = ['']){
  return colors[Math.floor(Math.random() * colors.length)]
}

paintSquares(paintSquaresContainer)