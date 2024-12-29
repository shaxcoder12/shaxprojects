let open = document.querySelector("#open")
let order = document.querySelector("#order")
let mainBox = document.querySelector("main")
let formBox = document.querySelector("form")

let tg = window.Telegram.WebApp;
tg.expand()

open.addEventListener("click", () => {
  formBox.style.display = "block"
  mainBox.style.display = "none"
})

order.addEventListener("click", () => {
  let name = document.querySelector("#name").value
  let phone = document.querySelector("#phone").value
  let data = {
    "name": name,
    "phone": phone
  }
  
  tg.sendData(JSON.stringify(data))
  
})