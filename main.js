

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


let mem1 = {id:'mem1',name:'Ben Rector',instrument:'Guitar',favoriteSong:'Born in the USA',picture:'https://www.billboard.com/files/media/Ben-Rector-bb21-hot-100-pr-2016-billboard-1548.jpg'};

let mem2 = {id:'mem2',name:'Terry',instrument:'Bass',favoriteSong:'In the Air Tonight', picture:'https://pmcvariety.files.wordpress.com/2018/08/terry-crews1.jpg'};

let mem3 = {id:'mem3',name:'Lady Gaga',instrument:'Lead Singer',favoriteSong:'Great Balls of Fire',picture:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-the-list-best-beauty-looks-of-the-year-lady-gaga-gettyimages-634472516-1512514124.jpg'};

let mem4 = {id:'mem4',name:'Questlove',instrument:'Drums',favoriteSong:'Hound Dog' ,picture:'https://media.pitchfork.com/photos/59c2b0b371249b1b0091dc7e/1:1/w_300/Questlove_Photo%20by%20Jason%20Kempin:WireImage_463076764%202.jpg'};

const members = [mem1,mem2,mem3,mem4];


const printToDom =(stringToPrint,divId) =>{
    const selectedDiv =document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};


const getMemberById = (id) =>{
    for (let i =0;i<members.length;i++){
        let member = members[i];
        if (member.id === id){
            return member
        }
    }
}

const needHelp = (event) => {
    if (event.target.tagName !== 'IMG'){
        return
    }
    let member = getMemberById(event.target.parentElement.id) 
    let bandInfo = "";
    bandInfo += `<div>`
    bandInfo +=     `<p>${member['name']}</p>`
    bandInfo +=     `<p>${member['instrument']}</p>`
    bandInfo +=     `<p>Favorite Song: ${member['favoriteSong']}</p>`
    bandInfo += `</div>`;
   printToDom(bandInfo,'test');
}

// function to loop thru band member info

document.getElementById('picture-container').addEventListener('click',needHelp)

const nfl = () =>{
    let imageString = '';
    for (let i=0;i<members.length;i++){
        imageString += `<div id="${members[i].id}">`;
        imageString += `<img class="mem-pic" src="${members[i].picture}" alt="${members[i].name}">`
        imageString += `</div>`
    }; 
    printToDom(imageString,'picture-container');
}

// CALL FUNCTIONS 
buttonsHover();
nfl();