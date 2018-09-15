let asylumsong = ["Remnants", "Asylum", 'The Infection', 'Warrior', 'Another Way to Die', 'Never Again', 'The Animal', 'Crucified', 'Serpentine', 'My Child', 'Sacrifice', 'Innocence', 'Ishfwilf'];
let evolutionsong = ["Are You Ready", "No More", "A Reason to Fight", "In Another Time", "Stronger on Your Own", "Hold on to Memories", "Saviour of Nothing", "Watch You Burn", "The Best Ones Lie", "Already Gone"]
let dethalbumsong = ["Murmaider", "Go into the Water", "Awaken", "Bloodrocuted", "Go Forth and Die", "Fansong", "Better Metal Snake", "The Lost Vikings", "Thunderhorse", "Briefcase Full of Guts", "Birthday Dethday", "Hatredcopter", "Castratikro", "Face Fisted", "Dethharmonic"]
let dethalbum2song = ["Bloodlines", "The Gears", "Burn the Earth", "Laser Cannon Deth Sentence", "Black Fire Upon Us", "Dethsupport", "The Cyborg Slayers", "I Tamper with the Evidence at the Murder Site of Odin", "Murmaider II: The Water God", "Comet Song", "Symmetry", "Volcano"]
let dethalbum3song = ["I Ejaculate Fire", "Crush the Industry", "Andromeda", "The Galaxy", "Starved", "Killstardo Abominate", "Ghostqueen", "Impeach God", "Biological Warfare", "Skyhunter", "The Hammer", "Rejoin" ]

let albumspage = {
album: [
    {
            name:"Evolution",
            image:"./images/Evolution.jpg",
            release:"10/19/2018",
            songs:`${evolutionsong}`
    },
    {
        name:"Dethalbum III",
        image:"./images/DethalbumIII.jpg",
        release:"10/16/2012",
        songs:`${dethalbum3song}`
    },
    {
        name:"Asylum",
        image:"./images/asylum.jpg",
        release:"8/31/2010",
        songs:`${asylumsong}`
    },
    {
        name:"Dethalbum II",
        image:"./images/dethalbumII.jpg",
        release:"9/29/2009",
        songs:`${dethalbum2song}`
    },
    {
        name:"Dethalbum",
        image:"./images/dethalbum.jpg",
        release:"9/25/2007",
        songs:dethalbumsong
    }
]
}



const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

const albumspageprint = () => {
    const newString = `<p>${albumspage.album}</p>`
    printToDom(newString,'albumscard')
}

const albumspageprintbilder = () => {
    let newString = '';
    for(let i = 0; i < albumspage.album.length; i++) {
        newString +=``
    }
}

const statementsStringBuilder = () => {
    let newString = '';                               
    for(let i = 0; i < elizabethSanger.statements.length; i++) {
        newString +=`<div class="statement">`;
        newString +=    `<h4>${elizabethSanger.statements[i].category}: ${elizabethSanger.statements[i].statement}</h4>`;
        newString +=`</div>`;
    }
    printToDom(newString, 'statements');
};







albumspageprint()
