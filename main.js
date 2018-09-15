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


// const displayForm = () => {
//     let newString = "";
//     for (let i = 0; i < length; i++) {

//     }
//     printToDom(newString, 'homepage-form');
// }

const validateHomepageForm = () => {
    let nameInput = document.getElementById('form-name').value;
    let emailInput = document.getElementById('form-email').value;
    let button = document.getElementById('homepage-submit-btn');
    let outputFormString = "";
    button.addEventListener('click', (event) => {
        if (nameInput !== "" && emailInput !== "") {
            outputFormString = `Thank you for being a Kinky Slinky Fan.`
        }else if (nameInput !== "" && emailInput === "") {
            outputFormString = `Please enter your email.`
        }else if (nameInput === "" && emailInput !== ""){
            outputFormString = `Please enter your name.`
        }else {
            outputFormString = `Please enter your name and email.`
        }
        printToDom(outputFormString, 'homepage-form-message');
        event.preventDefault();
    }
)};

// CALL FUNCTIONS HERE
buttonsHover();
validateHomepageForm();