//* Using juery becuase this was already being used

/*
This is the contact information that is added into the sidebar div. Change these to update the contact in the sidebar.
*/

/*foo*/

let organizerData = [
  {
    name: "Sandra Bae",
    weblink: "https://sandrabae.github.io/",
    affil: "University of Arizona",
    blurb: `is an assistant professor at the University of Arizona.
        Her main research focus is exploring how tangible interactions can help people understand complex ideas when analyzing data in its physical form.`,
  },
  {
    name: "Jürgen Bernard",
    weblink: "https://juergen-bernard.info",
    affil: "University of Zurich",
    blurb: `is an assistant professor at the University of Zurich and head of the Interactive Visual Data Analysis. His research focus is on visual analytics, human-centered machine learning, and artificial intelligence.`,
  },
  {
    name: "Michael Correll",
    weblink: "https://correll.io/",
    affil: "Northeastern University",
    blurb: `is a researcher professor at Northeastern University. His research interests include the ethical, accurate, and responsible communication of data, as well as graphical perception, statistical graphics, and uncertainty visualization.`,
  },
  {
    name: "Mai Elshehaly",
    weblink: "https://invisai.com/mai/",
    affil: "City St George's, University of London",
    blurb: `is a Senior Lecturer in Visualisation at City, University of London. She holds a Ph.D. and M.Sc. in Computer Science from the Center for Human-Computer Interaction at Virginia Tech. Before her current appointment, she worked at the Universities of Leeds and Bradford and was a NSF-funded postdoctoral researcher at the University of Maryland, Baltimore County.`,
  },
  {
    name: "Takanori Fujiwara",
    weblink: "https://takanori-fujiwara.github.io/",
    affil: "University of Arizona",
    blurb: `is an assistant professor at the University of Arizona.
        His research interests span network science, machine learning, and visual analytics, with a particular focus on developing interactive dimensionality reduction methods and exploring the use of 3D spaces and interfaces for high-dimensional data analysis.`,
  },
  {
    name: "Dan Keefe",
    weblink: "https://www.danielkeefe.net/",
    affil: "University of Minnesota",
    blurb: `is a Distinguished University Teaching Professor and Professor in the Department of Computer Science & Engineering at the University of Minnesota.  He is also an artist.  Dan's research centers on spatial human-data interaction in mixed reality environments, art+science collaborations, and, recently, community partnerships and digital design for revitalizing Indigenous culture and knowledge systems.`,
  },
  {
    name: "Mahsan Nourani",
    weblink: "https://mahsan.page",
    affil: "Northeastern University",
    blurb: `is an assistant research professor at Northeastern University. Her research focuses on human-centered AI/XAI, AI ethics, visual analytics, and human-AI collaborative decision-making. She holds a PhD in computer science from University of Florida.`,
  },
];

let publicityData = [
  {
    name: "Arran Zeyu Wang",
    weblink: "https://arranzeyuwang.github.io/",
    affil: "University of North Carolina at Chapel Hill",
    blurb: `is a PhD student at the University of North Carolina at Chapel Hill. His main research focus is exploring how people understand data from visualizations to build accessible, intelligent, and empirically grounded tools for easier exploratory data analysis and decision-making.`,
  },
];

let socialMedia = [{
    name: 'Twitter',
    weblink: 'https://twitter.com/belivworkshop',
    class: 'fab fa-twitter fa-3x'
  },
  {
    name: 'Email',
    weblink: 'mailto:beliv.workshop@gmail.com',
    class: 'fas fa-envelope fa-3x'
  }
]

/*
Code that adds data to div
*/

let wrapper = $("#side-contact");

wrapper.append("<h1>Organizers</h1>");
makeContact(organizerData, wrapper);

wrapper.append("<h1>Social Media Chair</h1>");
makeContact(publicityData, wrapper);

// wrapper.append("<h1>Local Chair</h1>");
// makeContact(localData, wrapper);

if ($("#organizer-bio").length > 0) {
  console.log('this is a test')
  makeBio(organizerData, $("#organizer-bio"))
}

if ($("#publicity-bio").length > 0) {
  console.log('this is a test')
  makeBio(publicityData, $("#publicity-bio"))
}

wrapper.append('<div class="social"></div>');



makeSocial(socialMedia, $(".social"));

function makeSocial(data, div) {
  console.log(div[0], data)
  for (let i in data) {
    div.append(`<a href=${data[i].weblink} target="_blank"><i class="${data[i].class}"></i></a>`);
  }
}

function makeContact(data, div) {
  for (let i in data) {
    div.append(`<a href='${data[i].weblink}'>${data[i].name}</a>: ${data[i].affil}<br>`);
  }
}

function makeBio(data, div) {
  for (let i in data) {
    div.append(`<p><a href='${data[i].weblink}'>${data[i].name}</a> ${data[i].blurb}</p>`);
  }

}