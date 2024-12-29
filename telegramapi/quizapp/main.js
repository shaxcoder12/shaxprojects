let select1 = document.querySelector("#answer1")
let select2 = document.querySelector("#answer2")
let select3 = document.querySelector("#answer3")
let select4 = document.querySelector("#answer4")

let button = document.querySelector("#send_data")
let tg = window.Telegram.WebApp;
tg.expand()


button.addEventListener("click", () => {
  let trues = 0
  
  if (select1.value == "c") {
    trues += 1;
  }
  if (select2.value == "a") {
    trues += 1;
  }
  if (select3.value == "d") {
    trues += 1;
  }
  if (select4.value == "a") {
    trues += 1;
  }
  data = {
    "answers": trues,
    "falses": 4-trues
  }
  tg.sendData(JSON.stringify(data))
})


let url = "https://shaxcoder12.github.io/shaxprojects/telegramapi/quizapp/main.sj"

// Функция для получения данных, отправленных с Python бота
fetch(url)
    .then(response => response.json())  // Преобразуем ответ в формат JSON
    .then(data => {
        console.log('Полученные данные:', data);
    })
    .catch(error => console.error('Ошибка:', error));
