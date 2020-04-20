
let dateData = [
    {event: 'Paper submission due', date: 'July, 10, 2020' },
    {event: 'First notification', date: 'Aug 10, 2020' },
    {event: 'Revisions due', date: 'Aug 24, 2020' },
    {event: 'Final notification', date: 'Aug 31, 2020' },
    {event: 'Camera-ready', date: 'Sept 5, 2020' },
   // {event: 'BELIV workshop', date: 'Oct 21, 2018' },

]


/*
Code that adds data to div
*/

let dateWrapper = $("#side-dates");

dateWrapper.append("<h1>Important Dates</h1>");
makeEvent(dateData, dateWrapper);

function makeEvent(data, div){
    for(let i in data){
        div.append(`${data[i].date}</a>: ${data[i].event}<br>`);
    }
}