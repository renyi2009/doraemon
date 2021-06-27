import string from './css.js'

let n = 1
let id = undefined;
let time = 100
let isPlaying = false

const play = () => {
  console.log(1);
  if(isPlaying){
    return
  }
  id = setInterval(() => {
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    n += 1
    demo.scrollTop = demo.scrollHeight
  }, time)
}

const pause = () => {
  window.clearInterval(id)
  isPlaying = false
}
const slow = () => {
  pause()
  time = 300
  play()
}
const normal = () => {
  pause()
  time = 100
  play()
}
const fast = () => {
  pause()
  time = 10
  play()
}

play()
isPlaying = true

btnPause.onclick = () => {
  pause()
  // id = undefined;
}
btnPlay.onclick = () => {
  play()
  isPlaying = true
}
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast


console.log('test111.js')