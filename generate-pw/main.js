let button = document.querySelector("#pw-button")
let result_panel = document.querySelector("#pw-result")

let symbols_text = "qwertyuiopasdfghjklzxcvbnm1234567890@#$_&"
let symbols = []
let pws = []

for (var i in symbols_text) {
  symbols.push(symbols_text[i])
}

const get_generate_pw = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
/*
button.addEventListener("click", () => {
  alert("Yeah")
})
*/
button.addEventListener("click", () => {
  let pw = ""
  for (let i in symbols) {
    if (pw.length < 10) {
      pw += get_generate_pw(symbols)
    } else {
      pws.push(pw)
      result_panel.innerHTML = `
      <input class="copyPw" value=${pw} readonly>
      <button id="copyButton">Скопировать</button>
      `
      pw = ""
      const copyButton = document.querySelector("#copyButton")
      copyButton.addEventListener("click", () => {
      let textToCopy = document.querySelector(".copyPw")
      textToCopy.select()
      textToCopy.setSelectionRange(0, 9999)
      document.execCommand("copy")
    })
    }
  }
})
