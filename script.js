const menssagem = document.getElementById('menssagem')

const inputNum = document.getElementById('inputNum')
/* Label onde aparecera menssagem de numero baixo ou alto */
const labelInputNum = document.getElementById('labelInputNum')

const btnEnviar = document.querySelector('.btnEnviar')

/* Todas as li´s onde ficaram as jogadas */
const tentativa = document.querySelectorAll('.tentativa')

const numAleatorio = Number.parseInt((Math.random()*100) + 1)
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
/* cria btn reset */
function criaTag(){
    const TagButton = document.createElement("button")
    TagButton.classList.add('btnReset')
    const TagContent = document.createTextNode = "Jogar novamente"
    TagButton.textContent = TagContent
    menssagem.appendChild(TagButton)
    TagButton.addEventListener('click', function (e) {
        window.reload()

    })
}
function derrota(){
    if (tentativas[9] !== numAleatorio) {
        menssagem.innerText = `Desquelpe, não foi dessa vez!! \n ${numAleatorio} `
        labelInputNum.innerText = "Desanima não.. tenta de novo!! "
        menssagem.style.color = "red"
        inputNum.style.display = "none"
        btnEnviar.style.display = "none"
        criaTag()
    }
}
function contagemTentativas(){
    tentativas.push(jogada)
    if (tentativas.length == 10) {
        derrota()
    }
}
function numAltoBaixo(){
    if (jogada < numAleatorio) {
        labelInputNum.innerText = "muito baixo"
    } else if (jogada > numAleatorio) {
        labelInputNum.innerText = "muito alto"
    } else {
        labelInputNum.innerText = "Na mosca.. Parabens!! "
    }
}
function vitoria(){
    if (jogada == numAleatorio) {
        menssagem.innerText = `Parabens!! Voce Acertou \n ${numAleatorio} `
        menssagem.style.color = "blue"
        inputNum.style.display = "none"
        btnEnviar.style.display = "none"
        criaTag()
        numAltoBaixo()
    }
}
function validacao(){
    /* validando se esta vazia, com zero ou acima de 100 */
    if (inputNum.value == "" || inputNum.value <= 0  || inputNum.value > 100) {
        labelInputNum.innerText = "É  preciso um numero de 1 a 100"
        labelInputNum.style.color = "red"
    }
    else {
        if(inputNum.value !== jogada){
            jogada = inputNum.value
        getTentativas()
        labelInputNum.style.color = ""
        numAltoBaixo()
        contagemTentativas()}else{
           labelInputNum.innerText = "Esse você já tentou. Tente um outro numero!"
            labelInputNum.style.color = "red"
    }
    }
}
btnEnviar.addEventListener('click', function (e) {
    inputNum.focus()
    validacao()
    vitoria()
    inputNum.value = ""
    e.preventDefault()

})