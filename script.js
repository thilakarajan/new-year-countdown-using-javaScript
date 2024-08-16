const countdownElement = document.getElementById('countdown')

function countdown() {
  const currentDate = new Date()
  const nextYear = currentDate.getFullYear() + 1
  const newYearDate = new Date(nextYear, 0, 1)
  const timeDifference = newYearDate - currentDate

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
if(days<=1) {countdownElement.innerHTML = `
    ${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds
  `
  if(hours<=1){
    countdownElement.innerHTML = `
    ${days} day, ${hours} hour, ${minutes} minutes, ${seconds} seconds
  `
  }
}
  else{
    countdownElement.innerHTML = `
    ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds
  `
  }


  if (timeDifference <= 0) {
    countdownElement.innerHTML = 'Happy New Year!'
  } else {
    setTimeout(countdown, 1000)
  }
}

countdown()
