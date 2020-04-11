console.log('hello world');

//* Using juery becuase this was already being used

/*
This is the contact information that is added into the sidebar div. Change these to update the contact in the sidebar.
*/

let organizerData = [
    {name: 'Michael Sedlmair', weblink: 'https://homepage.univie.ac.at/michael.sedlmair/', affil: 'Univ. of Stuttgart'},
    {name: 'Petra Isenberg', weblink: 'https://petra.isenberg.cc/', affil: 'Inria'},
    {name: 'Miriah Meyer', weblink: 'https://www.cs.utah.edu/~miriah/', affil: 'University of Utah'},
    {name: 'Tobias Isenberg', weblink: 'https://tobias.isenberg.cc/', affil: 'Inria'},
];

let publicityData = [
    {name: 'Jen Rogers', weblink: 'https://vdl.sci.utah.edu/team/rogers/', affil: 'University of Utah'}
];

let localData = [
    {name: 'Tanja Blascheck', weblink: 'https://aviz.fr/blaschta/', affil: 'Inria'}
];

/*
Code that adds data to div
*/

let wrapper = $("#side-contact");

wrapper.append("<h1>Organizers</h1>");
makeContact(organizerData, wrapper);

wrapper.append("<h1>Publicity Chair</h1>");
makeContact(publicityData, wrapper);

wrapper.append("<h1>Local Chair</h1>");
makeContact(localData, wrapper);


function makeContact(data, div){
    for(let i in data){
        div.append(`<a href='${data[i].weblink}'>${data[i].name}</a>: ${data[i].affil}<br>`);
    }
}