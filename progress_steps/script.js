const progressLine = document.getElementById('js-progress-line')
const btnProgressPrev = document.getElementById('js-progress-prev')
const btnProgressNext = document.getElementById('js-progress-next')
const progressCircles = document.querySelectorAll('.progress__circle')

let progressCurrent = 1
btnProgressNext.addEventListener('click', () => {
  progressCurrent++

  if(progressCurrent > progressCircles.length){
    progressCurrent = progressCircles.length
  }

  updateProgress()

})

btnProgressPrev.addEventListener('click', () => {
  progressCurrent--

  if(progressCurrent < 1){
    progressCurrent = 1
  }

  updateProgress()
  
})

function updateProgress(){

  // Light up border around circles
  progressCircles.forEach((circle, idx) => {
    if(idx < progressCurrent){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })

  // Light up progress bar
  const actives = document.querySelectorAll('.active')
  progressLine.style.width = ((actives.length - 1) / (progressCircles.length - 1)) * 100 + '%'

  // Manage btns states
  if(progressCurrent === 1){
    btnProgressPrev.disabled = true
  } else if(progressCurrent === progressCircles.length){
    btnProgressNext.disabled = true
  }else{
    btnProgressPrev.disabled = false
    btnProgressNext.disabled = false
  }
}