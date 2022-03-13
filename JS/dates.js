let dateData = [{
    event: 'Deadline for submissions',
    date: 'June, 30, 2022 at 11:59 pm AoE'
  },
  {
    event: 'Notification of acceptance',
    date: 'Aug 1, 2022'
  },
  {
    event: 'Deadline for revision',
    date: 'Sept 1, 2022'
  },
  {
    event: 'Final notification',
    date: 'Sept 7, 2022'
  },
  {
    event: 'Camera-ready due',
    date: 'Sept 15, 2022'
  },
  // {event: 'BELIV workshop', date: 'Oct 21, 2018' },

]


/*
Code that adds data to div
*/

let dateWrapper = $("#side-dates");

dateWrapper.append("<h1>Important Dates</h1>");
makeEvent(dateData, dateWrapper);

function makeEvent(data, div) {
  for (let i in data) {
    div.append(`${data[i].date}</a>: ${data[i].event}<br>`);
  }
}