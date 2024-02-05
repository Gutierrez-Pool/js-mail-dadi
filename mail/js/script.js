// array mail
const mails= ["primo@gmail.com", "secondo@gmail.com", "terzo@gmail.com", "quarto@gmail.com", "quinto@gmail.com", "sesto@gmail.com", "settimo@gmail.com", "ottavo@gmail.com", "nono@gmail.com", "decimo@gmail.com"];

console.log (mails)


const checkButtonElement = document.querySelector("#check-button");

checkButtonElement.addEventListener("click,", 

    function() {

        const userMail = document.querySelector("#user-mail").value;

        let mailFound = false;

        for(let i = 0; i < mails.length; i++) {

            if(mails[i] == userMail) {

                mailFound = true;
            }
        }

        const outputElement = document.querySelector("#output");

        if(mailFound) {

            outputElement.innerText = "Acceso consentito";

        } else {

            outputElement.innerText = "Acceso negato";
        }
        console.log (outputElement)
    }
)