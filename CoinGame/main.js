let coinClick = document.querySelector("#coin-click");
let balanceView = document.querySelector(".balance");
let sendBalance = document.querySelector("#send-balance")

let userBalance = 0
let oneClick = 1
let clickLimit = 100

let tg = window.Telegram.WebApp;
tg.expand()

coinClick.addEventListener("click", () => {
  userBalance += oneClick;
  balanceView.innerHTML = `
  <h2>Balance: ${userBalance}</h2>
  `
})

sendBalance.addEventListener("click", () => {
  let data = {
    "balance": userBalance
  }
  tg.sendData(JSON.stringify(data));
  tg.close()
})
