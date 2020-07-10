
let dateData = [
    {event: 'Deadline for submissions', date: 'July, 10, 2020 at 11:59 pm AoE' },
    {event: 'Notification of acceptance', date: 'Aug 10, 2020' },
    {event: 'Deadline for revision', date: 'Aug 24, 2020' },
    {event: 'Final notification', date: 'Aug 29, 2020' },
    {event: 'Camera-ready due', date: 'Sept 3, 2020' },
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