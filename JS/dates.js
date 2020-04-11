
let dateData = [
    {event: 'Paper submission due', date: 'Jun 30, 2018' },
    {event: 'First notification', date: 'Aug 1, 2018' },
    {event: 'Revisions due', date: 'Aug 15, 2018' },
    {event: 'Final notification', date: 'Aug 20, 2018' },
    {event: 'Camera-ready', date: 'Aug 25, 2018' },
    {event: 'BELIV workshop', date: 'Oct 21, 2018' },

]


/*
Code that adds data to div
*/

let dateWrapper = $("#side-dates");

dateWrapper.append("<h1>Impoprtant Dates</h1>");
makeEvent(dateData, dateWrapper);

function makeEvent(data, div){
    for(let i in data){
        div.append(`${data[i].date}</a>: ${data[i].event}<br>`);
    }
}