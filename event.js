var StorageOfEvents = [];

var today = new Date();

var events = [
    {
        name: "Игра NaVi - EHOME",
        dateStart: new Date(2011, 10, 22, 12, 0),
        dateEnd: new Date(2011, 10, 22, 14, 0),
        location: "Кёльн"
    },
    {
        name: "Игра NaVi - Team Secret",
        dateStart: new Date(2016, 6, 24, 17, 0),
        dateEnd: new Date(2016, 6, 24, 19, 0),
        location: "Лос-Анджелес"
    },
    {
        name: "Чемпионат по шахматам",
        dateStart: new Date(2017, 1, 8, 12, 0),
        dateEnd: new Date(2017, 2, 8, 12, 0),
        location: "Полтава"
    },
    {
        name: "Golden Byte",
        dateStart: new Date(2017, 2, 1, 12, 0),
        dateEnd: new Date(2017, 2, 10, 17, 0),
        location: "Полтава"
    },
    {
        name: "1 сентября",
        dateStart: new Date(2017, 8, 1, 0, 0),
        dateEnd: new Date(2017, 8, 1, 24, 0),
        location: "Полтава"
    },
    {
        name: "International 2017",
        dateStart: new Date(2017, 5, 22, 12, 0),
        dateEnd: new Date(2017, 7, 14, 12, 0),
        location: "Сиэтл"
    }
];

function dateFormat(date)
{
    var months = [
        'января',
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];
    var minutes="";
    if (date.getMinutes()<10)
        minutes="0"+date.getMinutes();
    else
        minutes=date.getMinutes();
    var hours="";
    if (date.getHours()<10)
        hours="0"+date.getHours();
    else
        hours=date.getHours();
    return date.getDate() + " "
        + months[date.getMonth()] + " "
        + date.getFullYear() + " "
        + hours + ":"
        + minutes;

}

function getDateByID(id){
    if (StorageOfEvents[id] != undefined || StorageOfEvents[id] != null)
        return eventToString(StorageOfEvents[id]);
    else
        return "\nStorage doesn't have event with this id";
}

function addEventsToStorage(events)
{
    events.forEach(function(item){
        StorageOfEvents[StorageOfEvents.length] = {
            name : item.name,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            location: item.location
        }
    });
}
addEventsToStorage(events);

function getEvents(chosen){
    return ListOfEvent(StorageOfEvents.filter(function(item,i,StorageOfEvents){
        if(chosen==-1){
            return item.dateEnd.getTime() < today.getTime();
        }
        else if(chosen==0){
            return item.dateStart.getTime() < today && item.dateEnd.getTime() >= today;
        }
        else if(chosen==1){
            return item.dateStart.getTime() > today;
        }
    }));


}

function ListOfEvent(list)
{
    return list.map(function(item) {
        if(item != undefined || item != null)
            return eventToString(item);
    });
}

function eventToString(event)
{
    return "\n\nНазвание: "  + event.name + ";\nДата начала: "+ dateFormat(event.dateStart) + ";\nДата окончания: " +
    dateFormat(event.dateEnd) + ";\nМесто проведения: " + event.location;
}

console.log("Текущая дата - " + dateFormat(today));
console.log("*************************************");

console.log("1 cобытие  "+getDateByID(0));
console.log("*************************************");


console.log("228 cобытие  "+getDateByID(228));
console.log("*************************************");

console.log("Прошедшие событии  "+getEvents(-1));
console.log("*************************************");

console.log("Текущие событии  "+getEvents(0));
console.log("*************************************");

console.log("Будущие событии"+getEvents(1));
console.log("*************************************");

console.log("Все события"+ListOfEvent(StorageOfEvents));
console.log("*************************************");



