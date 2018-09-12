
let mem1 = {Name:'Joe',Instrument:'Guitar',FavoriteSong:'Born in the USA'};

let mem2 = {Name:'Terry',Instrument:'Bass',FavoriteSong:'In the Air Tonight'};

let mem3 = {Name:'Bella',Instrument:'Lead Singer',FavoriteSong:'Great Balls of Fire',};

let mem4 = {Name:'Rick',Instrument:'Drums',FavoriteSong:'Hound Dog'};

let mem5 = {Name:'Kay',Instrument:'Piano',FavoriteSong:'Pink Cadillac'};


const printToDom =(stringToPrint,divId) =>{
    const selectedDiv =document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
    };

const member1Info = (Name,Instrument,FavoriteSong) =>{

    
};




const bandMember1 = document.getElementById('member1Pic');
bandMember1.addEventListener('click',member1Info);