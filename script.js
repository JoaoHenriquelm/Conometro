var horastela = document.getElementById("hora")
var minutostela = document.getElementById("minutos")
var segundostela = document.getElementById("segundos")
var start = document.getElementById("botao-start")
var pause = document.getElementById("botao-pause")
var refresh = document.getElementById("botao-refresh")
start.addEventListener("click", play)
pause.addEventListener("click", play)
refresh.addEventListener("click", reiniciar)

var horas = 0
var minutos = 0
var segundos = 0

var tempo = 1000
var cron

function play() {
  if (start.style.display == "block") {
    start.style.display = "none"
    pause.style.display = "block"
    iniciar()
  } else {
    pause.style.display = "none"
    start.style.display = "block"
    stop()
  }
}

function iniciar() {
  cron = setInterval(() => {
    conometro()
  }, tempo)
}

function stop() {
  clearInterval(cron)
}

function reiniciar() {
  clearInterval(cron)
  horas = 0
  minutos = 0
  segundos = 0

  horastela.textContent = `00`
  minutostela.textContent = `00`
  segundostela.textContent = `00`
  pause.style.display = "none"
  start.style.display = "block"
}

function conometro() {
  segundos++

  if (minutos == 60) {
    minutos = 0
    horas++
  } else if (segundos == 60) {
    segundos = 0
    minutos++
  }

  segundostela.textContent = segundos < 10 ? `0${segundos}` : segundos
  minutostela.textContent = minutos < 10 ? `0${minutos}` : minutos
  horastela.textContent = horas < 10 ? `0${horas}` : horas
}
