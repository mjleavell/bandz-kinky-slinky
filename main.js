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
    {month: 31, firstDay: 0},
    {month: 28, firstDay: 0},
    {month: 31, firstDay: 0},
    {month: 30, firstDay: 0},
    {month: 31, firstDay: 0},
    {month: 30, firstDay: 0},
    {month: 31, firstDay: 0},
    {month: 31, firstDay: 0},
    {month: 30, firstDay: 0},
    {month: 31, firstDay: 0},
    {month: 30, firstDay: 0},
    {month: 31, firstDay: 0}
]

const monthObject = {
    January: year[0],
    February: year[1],
    March: year[2],
    April: year[3],
    May: year[4],
    June: year[5],
    July: year[6],
    August: year[7],
    September: year[8],
    October: year[9],
    November: year[10],
    December: year[11]
}

const januaryFirstDay = 1;
let first = -1;
let date = 0;
let dateCard = '';

const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
}

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
    document.getElementById('calendarMenu').addEventListener('click', function() {
        let menuSelect = document.getElementById('select').value;
        let monthSelect = monthObject[menuSelect].month;
        date = 0;
        for(let i = 0; i < 37; i++) {
            date++;
            dateCard = `<h4 class='dateCardHeader'></h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
        let dateHeader = 0;
        date = monthObject[menuSelect].firstDay;
        for(let i = 0; i < monthSelect; i++) {
            date++;
            dateHeader++;
            dateCard = `<h4 class='dateCardHeader'>${dateHeader}</h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
    })
}

function eventListerCalendar(month) {
    let eventClass = '';
    let dateFirst = monthObject[month].firstDay;
    for(let i = 0; i < events[month].length; i++) {
        let dateString = '' + (parseInt(events[month][i].date) + dateFirst);
        let eventString = document.getElementById('dateDiv'+dateString).innerHTML;
        eventString +=  `<div class=${eventClass}>`
        eventString +=      `<h3 class='jsEventsHeader'>${events[month][i].name}</h3>`
        eventString +=      `<p class='jsEventsPar'>Date: ${month} ${events[month][i].date}</p>`
        eventString +=      `<p class='jsEventsPar'>Location: ${events[month][i].venue}</p>`
        eventString +=      `<p class='jsEventsPar'>ShowTime: ${events[month][i].time}</p>`
        eventString +=      `<p class='jsEventsPar'>${events[month][i].description}</p>`
        eventString +=  `</div>`;
        printToDom(eventString, 'dateDiv'+dateString);
    };    
}

function dateCardSelector() {
    document.getElementById('calendarMenu').addEventListener('click', function() {
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
            if(first === 7) {
                first = 0;
            }
            year[i].firstDay = first;
        }
    }
}

buttonsHover();
firstDayOfMonth();
eventLister('April');
eventLister('May');
eventLister('June');
monthCardSelector();
dateCardSelector();
calendarAtPageLoad();