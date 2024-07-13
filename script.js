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

function getTentativas(){
    const tentativaZero = tentativa.item(0)
    const tentativaUm = tentativa.item(1)
    const tentativaDois = tentativa.item(2)
    const tentativaTres = tentativa.item(3)
    const tentativaQuadro = tentativa.item(4)
    const tentativaCinco = tentativa.item(5)
    const tentativaSeis = tentativa.item(6)
    const tentativaSete = tentativa.item(7)
    const tentativaOito = tentativa.item(8)
    const tentativaNove = tentativa.item(9)
    /* tentativaZero */
    function formatJogada(getTag) {
        getTag.innerText = jogada
        if (jogada == numAleatorio) {
            getTag.style = "background-color:blue"
            getTag.style.color = "#fff"
        } else {
            getTag.style = "background-color:red"
            getTag.style.color = "#fff"
        }
    }
    for (i = 0; i < 11; i++) {
        if (tentativaZero.innerText == "") {
            formatJogada(tentativaZero) 
            break 
        }
        if (tentativaUm.innerText == "") {
            formatJogada(tentativaUm)
            break
        }
        if (tentativaDois.innerText == "") {
            formatJogada(tentativaDois)
            break
        }
        if (tentativaTres.innerText == "") {
            formatJogada(tentativaTres)
            break
        }
        if (tentativaQuadro.innerText == "") {
            formatJogada(tentativaQuadro)
            break
        }
        if (tentativaCinco.innerText == "") {
            formatJogada(tentativaCinco)
            break
        }
        if (tentativaSeis.innerText == "") {
            formatJogada(tentativaSeis)
            break
        }
        if (tentativaSete.innerText == "") {
            formatJogada(tentativaSete)
            break
        }
        if (tentativaOito.innerText == "") {
            formatJogada(tentativaOito)
            break
        }
        if (tentativaNove.innerText == "") {
            formatJogada(tentativaNove)
            break
        }
    }
}