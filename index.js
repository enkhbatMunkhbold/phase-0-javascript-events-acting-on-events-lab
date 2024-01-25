const dodger = document.getElementById('dodger')
// dodger.style.backgroundColor = "#FF69B4"

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)

  if(left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace('px', '')
  const left = parseInt(leftNumbers, 10)

  if(left < 400) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft') {
    moveDodgerLeft()
  } else if(e.key === 'ArrowRight') {
    moveDodgerRight()
  }
})