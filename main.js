const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

function buttonsHover() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            let btnColor = event.target;
            btnColor.setAttribute('style', 'background-color:#ef6817');
        });
        el.addEventListener('mouseout', function () {
            let btnColor = event.target;
            btnColor.setAttribute('style', 'background-color:#21201f');
        });
    });
}

buttonsHover();

const displayForm = () => {
    let newString = "";
    for (let i = 0; i < length; i++) {

    }
    printToDom(newString, 'homepage-form');
}

const validateHomepageForm = () => {
    let nameInput = document.getElementById('form-name');
    let emailInput = document.getElementById('form-email');
    let button = document.getElementById('homepage-submit-btn');
    let outputFormString = "";
    button.addEventListener('click', e => {
        if (nameInput === null && emailInput === null) {
            outputFormString = `Please enter your name and email.`
        } else if (nameInput === null && emailInput === "") {
            outputFormString = `Please enter your name.`;
        } else if (nameInput === '' && emailInput === null) {
            outputFormString = `Please enter your email.`
        } else {
            outputFormString = `Thank you for being a Kinky Slinky fan!`
        }
        printToDom(outputFormString, 'homepage-form-message');
    }
)}
