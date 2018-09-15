// PRINT TO DOM FUNCTION
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

// NAVBAR FUNCTION
function buttonsHover() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(function(el) {
        el.addEventListener('mouseover', function() {
            let btnColor = event.target; 
            btnColor.setAttribute('style', 'background-color:#ef6817');
        });
        el.addEventListener('mouseout', function() {
            let btnColor = event.target; 
            btnColor.setAttribute('style', 'background-color:#21201f');
        });
    });
}


let mem1 = {name:'Ben Rector',instrument:'Guitar',favoriteSong:'Born in the USA',picture:'https://www.billboard.com/files/media/Ben-Rector-bb21-hot-100-pr-2016-billboard-1548.jpg'};

let mem2 = {name:'Terry',instrument:'Bass',favoriteSong:'In the Air Tonight', picture:'https://pmcvariety.files.wordpress.com/2018/08/terry-crews1.jpg'};

let mem3 = {name:'Lady Gaga',instrument:'Lead Singer',favoriteSong:'Great Balls of Fire',picture:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-the-list-best-beauty-looks-of-the-year-lady-gaga-gettyimages-634472516-1512514124.jpg'};

let mem4 = {name:'Questlove',instrument:'Drums',favoriteSong:'Hound Dog' ,picture:'https://www.phillymag.com/wp-content/uploads/sites/3/2012/08/questloveuncropped1.jpg'};

const members = [mem1,mem2,mem3,mem4];


const printToDom =(stringToPrint,divId) =>{
    const selectedDiv =document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// function to loop thru info

const nfl = () =>{
    for (let i=0;i<members.length;i++){
        let imageString = `<div id="mem${i+1}">`;
        imageString += `<img class="mem-pic" src="${members[i].picture}" alt="${members[i].name}" onclick="">`
        imageString += `</div>`
        printToDom(imageString,'picture-container');
    }; 
}
nfl();



// onclick event function

// var mem1Info = document.getElementById('pic1');
// mem1Info.addEventListener('click',)

// CALL FUNCTIONS 
buttonsHover();