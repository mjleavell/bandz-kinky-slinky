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
        }
    ]
};

const year = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
}

const monthObject = {
    'January': year.January,
    'February': year.February,
    'March': year.March,
    'April': year.April,
    'May': year.May,
    'June': year.June,
    'July': year.July,
    'August': year.August,
    'September': year.September,
    'October': year.October,
    'November': year.November,
    'December': year.December
}

let date = 0;
let dateCard = '';

const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML = stringToPrint;
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
        let monthSelect = monthObject[menuSelect];
        date = 0;
        for(let i = 0; i < 31; i++) {
            date++;
            dateCard = `<h4 class='dateCardHeader'></h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
        date = 0;
        for(let i = 0; i < monthSelect; i++) {
            date++;
            dateCard = `<h4 class='dateCardHeader'>${date}</h4>`;
            let dateString = ''+date;
            printToDom(dateCard, 'dateDiv'+dateString);            
        }
    })
}

function eventListerCalendar(month) {
    let eventClass = '';
    for(let i = 0; i < events[month].length; i++) {
        let dateString = events[month][i].date;
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

eventLister('April');
eventLister('May');
eventLister('June');
monthCardSelector();
dateCardSelector();