const toggleThemeBtn = document.querySelector('.theme-switch')

// Check with localStorage which theme to apply
function setTheme() {
  if (localStorage.getItem('clockTheme') === 'light') {
    changeThemeTo('light')
  }
}

// Change theme with it's name in params
function changeThemeTo(theme = 'default') {
  const htmlTag = document.querySelector('html')
  let toggleThemeCheckbox = document.getElementById('js-theme-switch-checkbox')
  if (theme === 'default') {
    localStorage.setItem('clockTheme', 'default')
    htmlTag.classList.remove('light')
    toggleThemeCheckbox.checked = false
  } else {
    localStorage.setItem('clockTheme', 'light')
    htmlTag.classList.add('light')
    toggleThemeCheckbox.checked = true
  }
}

function setTime() {
  const hourEl = document.querySelector('.face__hour')
  const minuteEl = document.querySelector('.face__minute')
  const secEl = document.querySelector('.face__second')
  const timeEl = document.querySelector('.clock__time')
  const dateEl = document.querySelector('.clock__date')
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeEl.innerHTML = `${hoursForClock === 0 && ampm === 'PM' ? 12 : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}<span class="time__ampm">${ampm}</span>`
  dateEl.innerHTML = `${weekDays[day]}, ${monthsArr[month]} <span class="date__num">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTheme()
setTime()
setInterval(setTime, 1000)

// Toggle themes with a click
toggleThemeBtn.addEventListener('click', e => {
  e.preventDefault()

  if (localStorage.getItem('clockTheme') === 'light') {
    changeThemeTo('default')
  } else {
    changeThemeTo('light')
  }
})