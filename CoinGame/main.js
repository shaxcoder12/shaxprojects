let coinClick = document.querySelector("#coinClick")
let balanceView = document.querySelector("#balance")
let clickUpdate = document.querySelector("#clickUpdate")
let saveData = document.querySelector("#save-data")

let aboutClick = document.querySelector(".about-click")
let randomer = document.querySelector("#buy-randomer")

let promoInput = document.querySelector("#promo")
let promoBtn = document.querySelector("#promo-btn")

let userBalance = 0;
let oneClick = 1;
let userlvl = 1;
let secondCoin = 1;

let tg = window.Telegram.WebApp;
tg.expand()

coinClick.addEventListener("click", () => {
  userBalance += oneClick;
  balanceView.textContent = `${userBalance}`
})

saveData.addEventListener("click", () => {
  data = {
    "balance": userBalance,
    "lvl": userlvl
  }
  tg.sendData(JSON.stringify(data))
  tg.close()
})

clickUpdate.addEventListener("click", () => {
  if (userlvl == 1 && userBalance >= 200) {
    userlvl++;
    oneClick = 2;
    userBalance -= 200;
    aboutClick.textContent = "One click +2 coin"
    clickUpdate.innerHTML = `
    <h3>Click Update</h3><h3>+3C</h3><h3>500C</h3>`
    balanceView.textContent = `${userBalance}`
    alert("Done!")
    
  } else if (userlvl == 2 && userBalance >= 600) {
    userlvl++;
    oneClick = 3;
    userBalance -= 600;
    aboutClick.textContent = "One click +3 coin"
    clickUpdate.innerHTML = `
    <h3>Click Update</h3><h3>+5C</h3><h3>2500C</h3>`
    balanceView.textContent = `${userBalance}`
    alert("Done!")
    
  } else if (userlvl == 3 && userBalance >= 1200) {
    userlvl++;
    oneClick = 5;
    userBalance -= 1200;
    aboutClick.textContent = "One click +5 coin"
    clickUpdate.innerHTML = `
    <h3>Click Update</h3><h3>+8C</h3><h3>5000C</h3>`
    balanceView.textContent = `${userBalance}`
    alert("Done!")
    
  } else if (userlvl == 4 && userBalance >= 5000) {
    userlvl++;
    oneClick = 8;
    userBalance -= 5000;
    aboutClick.textContent = "One click +8 coin"
    clickUpdate.innerHTML = `
    <h3>Click Update</h3><h3>Max</h3><h3>Max</h3>`
    balanceView.textContent = `${userBalance}`
    alert("Done!")
    
  } else if (userlvl == 5) {
    alert("You are at the maximum level")
  } else {
    alert("You don't have enough coins")
  }
})

randomer.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber)
  if (userBalance >= 5000) {
    if (randomNumber == 1) {
      alert("You Win!")
      userBalance += 5000;
      balanceView.textContent = userBalance
    } else {
      alert("You Lose!")
      userBalance -= 5000;
      balanceView.textContent = userBalance
    }
  }
})

promoBtn.addEventListener("click", () => {
  let promo = promoInput.value;
  if (promo == "Hello") {
    alert("Okay!")
  } else if (promo == "thebestdevelopershax") {
    userBalance += 1234;
    balanceView.textContent = userBalance
    alert("Thanks. See to your balance")
  } else {
    alert(`${promo} don't found`)
    promoInput.value = "";
  }
})

document.querySelector("#d").addEventListener("click", () => {
  userBalance += 100;
})
