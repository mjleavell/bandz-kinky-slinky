let asylumsong = ["Remnants", "Asylum ", "The Infection ", "Warrior ", "Another Way to Die ", "Never Again", "The Animal ", 'Crucified ', 'Serpentine ', 'My Child ', 'Sacrifice ', 'Innocence ', 'Ishfwilf ']
let evolutionsong = ["Are You Ready ", "No More ", "A Reason to Fight ", "In Another Time ", "Stronger on Your Own ", "Hold on to Memories ", "Saviour of Nothing ", "Watch You Burn ", "The Best Ones Lie ", "Already Gone "]
let dethalbumsong = ["Murmaider ", "Go into the Water ", "Awaken ", "Bloodrocuted ", "Go Forth and Die ", "Fansong ", "Better Metal Snake ", "The Lost Vikings ", "Thunderhorse ", "Briefcase Full of Guts ", "Birthday Dethday ", "Hatredcopter ", "Castratikro ", "Face Fisted ", "Dethharmonic "]
let dethalbum2song = ["Bloodlines ", "The Gears ", "Burn the Earth ", "Laser Cannon Deth Sentence ", "Black Fire Upon Us ", "Dethsupport ", "The Cyborg Slayers ", "I Tamper with the Evidence at the Murder Site of Odin ", "Murmaider II: The Water God ", "Comet Song ", "Symmetry ", "Volcano "]
let dethalbum3song = ["Crush the Industry", "Andromeda ", "The Galaxy ", "Starved ", "Killstardo Abominate ", "Ghostqueen ", "Impeach God ", "Biological Warfare ", "Skyhunter ", "The Hammer ", "Rejoin "]

let albumspage = {
album: [
    {
        name:"Evolution",
        image:"../images/Evolution.jpg",
        release:"10/19/2018",
        songs:evolutionsong,
        purchase:"https://www.amazon.com/Evolution-Disturbed/dp/B07GHPFHG2/ref=sr_1_2?ie=UTF8&qid=1537072286&sr=8-2&keywords=disturbed+evolution&dpID=51r9Iupe-BL&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum III",
        image:"../images/DethalbumIII.jpg",
        release:"10/16/2012",
        songs:dethalbum3song,
        purchase:"https://www.amazon.com/Dethalbum-III-Metalocalypse-Dethklok/dp/B0090PX5XA/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1537072493&sr=1-1-catcorr"
    },
    {
        name:"Asylum",
        image:"../images/asylum.jpg",
        release:"8/31/2010",
        songs:asylumsong,
        purchase:"https://www.amazon.com/Asylum-Disturbed/dp/B003TUGUHU/ref=sr_1_1?s=music&ie=UTF8&qid=1537072549&sr=1-1&keywords=Asylum&dpID=61CCVajpD3L&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum II",
        image:"../images/dethalbumII.jpg",
        release:"9/29/2009",
        songs:dethalbum2song,
        purchase:"https://www.amazon.com/Dethalbum-II-Metalocalypse-Dethklok/dp/B002H3ETJG/ref=sr_1_1?s=music&ie=UTF8&qid=1537072588&sr=1-1&keywords=Dethalbum+II&dpID=5148MYvDWnL&preST=_SY300_QL70_&dpSrc=srch"
    },
    {
        name:"Dethalbum",
        image:"../images/dethalbum.jpg",
        release:"9/25/2007",
        songs:dethalbumsong,
        purchase:"https://www.amazon.com/Dethalbum-Dethklok/dp/B000UGG38W/ref=sr_1_1?s=music&ie=UTF8&qid=1537072621&sr=1-1&keywords=Dethalbum&dpID=613NtwcRxlL&preST=_SY300_QL70_&dpSrc=srch"
    }
]
}

const events = {
    April: [
        {
            name: 'Event 1',
            date: '6',
            venue: 'Venue 1',
            time: '9:30',
            description: 'Description 1'
        },
        {
            name: 'Event 2',
            date: '14',
            venue: 'Venue 2',
            time: '10:30',
            description: 'Description 2'
        },
        {
            name: 'Event 3',
            date: '26',
            venue: 'Venue 3',
            time: '8:00',
            description: 'Description 3'
        },
        {
            name: 'Event 11',
            date: '29',
            venue: 'Venue 11',
            time: '8:30',
            description: 'Description 11'
        }
    ],
    May: [
        {
            name: 'Event 4',
            date: '9',
            venue: 'Venue 4',
            time: '9:00',
            description: 'Description 4'
        },
        {
            name: 'Event 5',
            date: '15',
            venue: 'Venue 5',
            time: '10:00',
            description: 'Description 5'
        },
        {
            name: 'Event 6',
            date: '16',
            venue: 'Venue 6',
            time: '9:30',
            description: 'Description 6'
        },
        {
            name: 'Event 7',
            date: '28',
            venue: 'Venue 7',
            time: '8:30',
            description: 'Description 7'
        }
    ],
    June: [
        {
            name: 'Event 8',
            date: '5',
            venue: 'Venue 8',
            time: '8:00',
            description: 'Description 8'
        },
        {
            name: 'Event 9',
            date: '12',
            venue: 'Venue 9',
            time: '9:00',
            description: 'Description 9'
        },
        {
            name: 'Event 10',
            date: '20',
            venue: 'Venue 10',
            time: '10:00',
            description: 'Description 10'
        },
        {
            name: 'Event 12',
            date: '22',
            venue: 'Venue 12',
            time: '12:00',
            description: 'Description 12'
        }
    ]
};

let year = [
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 28, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0},
    {month: 30, firstDay: 0, lastDay: 0},
    {month: 31, firstDay: 0, lastDay: 0}
]

const monthObject = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
}

const januaryFirstDay = 1;
let first = -1;
let date = 0;
let dateCard = '';

const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const albumspageprintbilder = () => {
    let newString = '';
    for(let i = 0; i < albumspage.album.length; i++) {
        newString +=`<div class="page">`;
        newString +=`<div class="wraper">`;
        newString +=`<div class="albImg">`
        newString +=    `<a href="${albumspage.album[i].purchase}"><img id="ablumImg_${i}" src="${albumspage.album[i].image}" alt="${albumspage.album[i].name}"></a>`
        newString +=    `<ol>`
            for (let j = 0; j < albumspage.album[i].songs.length; j++){
            newString +=    `<li>${albumspage.album[i].songs[j]}</li>`
        }
        newString +=`</ol>`
        newString +=`</div>`
        newString +=`<div class="albInfo">`
        newString +=    `<h3>Album Name: ${albumspage.album[i].name}:</h3>`
        newString +=    `<div class="albreleaseinfo">`
        newString +=    `<h4>Release Date: ${albumspage.album[i].release}:</h4>`
        newString +=    `</div>`
        newString +=    `</div>`
        newString +=`</div>`
    };
    printToDom(newString, 'albumscard');
};

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

function eventLister(month) {
    let eventString = `<h2 class='jsEventsMonth'>${month}</h2>`;
    let eventClass = '';
    for(let i = 0; i < events[month].length; i++) {
        if(i === 0) {
            eventClass = 'jsEventsDiv1';
        }
        else if(i === 1 || i === 3) {
            eventClass = 'jsEventsDiv2';
        }
        else if(i === 2) {
            eventClass = 'jsEventsDiv3';
        }
        eventString +=  `<div class=${eventClass}>`
        eventString +=      `<h3 class='jsEventsHeader'>${events[month][i].name}</h3>`
        eventString +=      `<p class='jsEventsPar'>Date: ${month} ${events[month][i].date}</p>`
        eventString +=      `<p class='jsEventsPar'>Location: ${events[month][i].venue}</p>`
        eventString +=      `<p class='jsEventsPar'>ShowTime: ${events[month][i].time}</p>`
        eventString +=      `<p class='jsEventsPar'>${events[month][i].description}</p>`
        eventString +=  `</div>`;
    };
    printToDom(eventString, 'events'+month+'Div');
}


function monthCardSelector() {
    document.getElementById('calendarButton').addEventListener('click', function() {
        let menuSelect = document.getElementById('select').value;
        let monthSelect = monthObject[menuSelect];
        date = 0;
        for(let i = 0; i < 37; i++) {
            date++;
            dateCard = `<h4 class='dateCardHeader'></h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
        let dateHeader = 0;
        let dateMonthBefore = 0;
        let dateMonthAfter = 0;
        date = year[monthObject[menuSelect]].firstDay;
        for(let i = 0; i <= 37; i++) {
            if(dateMonthBefore < year[monthObject[menuSelect]].firstDay) {
                dateCard = `<h4 class='dateCardHeader'>${dateMonthBefore+year[(monthObject[menuSelect]-1)].month-year[(monthObject[menuSelect]-1)].lastDay}</h4>`;
                dateMonthBefore++;
                let dateString = ''+dateMonthBefore;
                printToDom(dateCard, 'dateDiv'+dateString); 
            }
            else if(date <= (year[monthSelect].month + year[monthObject[menuSelect]].firstDay)) {
                date++;
                dateHeader++;
                dateCard = `<h4 class='dateCardHeader'>${dateHeader}</h4>`;
                let dateString = ''+date;
                printToDom(dateCard, 'dateDiv'+dateString);            
        }
            else {
                let daysToAdd = year[(monthObject[menuSelect]-1)].lastDay;
                if(daysToAdd === 6) {
                    daysToAdd = -1;
                }
                dateMonthAfter++;
                dateCard = `<h4 class='dateCardHeader'>${dateMonthAfter}</h4>`;
                let dateString = ''+(dateMonthAfter+daysToAdd+year[monthObject[menuSelect]].month+1);
                printToDom(dateCard, 'dateDiv'+dateString);
            }
    }
})
}

function eventListerCalendar(month) {
    let dateFirst = year[monthObject[month]].firstDay;
    let divArray = document.getElementsByClassName('dateClass');
    for(let i = 0; i <divArray.length; i++) {
        divArray.namedItem('dateDiv'+[(i+1)]).style.backgroundColor = '#383838';
    }
    for(let i = 0; i < events[month].length; i++) {
        let dateString = '' + (parseInt(events[month][i].date) + dateFirst);
        let eventString = document.getElementById('dateDiv'+dateString).innerHTML;
        eventString +=  `<div>`
        eventString +=      `<h3 class='jsEventsHeader'>${events[month][i].name}</h3>`
        eventString +=      `<p class='jsEventsPar'>Date: ${month} ${events[month][i].date}</p>`
        eventString +=      `<p class='jsEventsPar'>Location: ${events[month][i].venue}</p>`
        eventString +=      `<p class='jsEventsPar'>ShowTime: ${events[month][i].time}</p>`
        eventString +=      `<p class='jsEventsPar'>${events[month][i].description}</p>`
        eventString +=  `</div>`;
        printToDom(eventString, 'dateDiv'+dateString);
        document.getElementById('dateDiv'+dateString).style.backgroundColor = '#ef6817';
    };    
}

function dateCardSelector() {
    document.getElementById('calendarButton').addEventListener('click', function() {
        let menuSelect = document.getElementById('select').value;
        eventListerCalendar(menuSelect);
    })
}

function calendarAtPageLoad() {
        let dateHeader = 0;
        date = januaryFirstDay;
        for(let i = 0; i < year[0].month; i++) {
            date++;
            dateHeader++;
            dateCard = `<h4 class='dateCardHeader'>${dateHeader}</h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
}

function firstDayOfMonth() {
    for(let i = 0; i <year.length; i++) {    
        if(first === -1) {
            first = januaryFirstDay;
            year[0].firstDay = first;
        }
        else {            
            first = first + year[(i-1)].month - 28;
            if(first > 6) {
                first = first - 7;
            }
            year[i].firstDay = first;
        }
    }
}

function lastDayOfMonth() {
    for(let i = 0; i <year.length; i++) {
        year[i].lastDay = year[i].firstDay + year[i].month -29;
        if(year[i].lastDay > 6) {
            year[i].lastDay = year[i].lastDay - 7;
        }
    }
}

function schedulePage() {
    if(window.location.pathname === '/html/schedule.html') {
        firstDayOfMonth();
        lastDayOfMonth();
        eventLister('April');
        eventLister('May');
        eventLister('June');
        monthCardSelector();
        dateCardSelector();
        calendarAtPageLoad();
    }
}

function albumsPageFnc() {
    if(window.location.pathname === '/html/albums.html')
    albumspageprintbilder();
}

buttonsHover();
schedulePage();
albumsPageFnc();


