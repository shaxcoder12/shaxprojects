let button = document.querySelector(".sun-moon")
let root = document.documentElement

let mode = 3

button.addEventListener("click", () => {
  if (mode == 1) {
    mode = 0
    root.style.setProperty("--bg-color", "#F8F8F8")
    root.style.setProperty("--hd-color", "#FFFDA0")
    root.style.setProperty("--text-color", "#151515")
    root.style.setProperty("--border-color", "#595959")
  } else if (mode == 0 ) {
    root.style.setProperty("--bg-color", "#262626")
    root.style.setProperty("--hd-color", "#373737")
    root.style.setProperty("--text-color", "#EAEAEA")
    root.style.setProperty("--border-color", "#A80EFF")
    mode = 1
  } else {
    root.style.setProperty("--bg-color", "#F8F8F8")
    root.style.setProperty("--hd-color", "#FFFDA0")
    root.style.setProperty("--text-color", "#151515")
    root.style.setProperty("--border-color", "#595959")
    mode = 0
  }
})

let mind_open = document.querySelector(".mind-open")
let mind_close = document.querySelector(".mind-close")
let open = document.querySelector(".mind-open-btn")
let close = document.querySelector(".mind-close-btn")
let mind = document.querySelector(".mind")


open.addEventListener("click", () => {
  mind.style.display = "block"
  mind_open.style.display = "none"
  mind_close.style.display = "block"
})

close.addEventListener("click", () => {
  mind.style.display = "none"
  mind_open.style.display = "block"
  mind_close.style.display = "none"
})
