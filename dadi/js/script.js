// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

const resultElement = document.querySelector("#result")

const buttonElement = document.querySelector("input[type='button']")

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let randomUser = random(1, 6);
let randomComputer = random(1, 6)

buttonElement.addEventListener("click",

    function () {

        if (randomUser > randomComputer) {
            resultElement.innerHTML = `Hai vinto!`
        }
        
        else if (randomUser < randomComputer) {
            resultElement.innerHTML = `Il computer vince`
        }

        else if (randomUser = randomComputer) {
            resultElement.innerHTML = `Pareggio`
        }
        
        const tuoPunteggioElement = document.querySelector(".tuo-punteggio")
        tuoPunteggioElement.innerText = `${randomUser}`
        
        const comPunteggioElement = document.querySelector(".com-punteggio")
        comPunteggioElement.innerText = `${randomComputer}`
    } 
)
    



// console.log(randomUser)
// console.log(randomComputer)