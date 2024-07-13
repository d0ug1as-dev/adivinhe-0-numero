const menssagem = document.getElementById('menssagem')

const inputNum = document.getElementById('inputNum')
/* Label onde aparecera menssagem de numero baixo ou alto */
const labelInputNum = document.getElementById('labelInputNum')

const btnEnviar = document.querySelector('.btnEnviar')

/* Todas as li´s onde ficaram as jogadas */
const tentativa = document.querySelectorAll('.tentativa')

const numAleatorio = Number.parseInt(Math.random(100) * 101)
const tentativas = [];
let jogada;
