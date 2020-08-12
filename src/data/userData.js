const { themes } = require('../theme-context');

// ----- Landing Page ----- //
const LANDING_DATA = {
  name: "Divyanshu Maurya",
  bgImage: "lead-bg.jpg",
  resumeLink: "#",
  rotateTextItems: ["Developer", "Problem Solver", "Learner"],
};


// ----- Experience ------ //
const EXPERIENCE_DATA = {
  headerText: "Experience",
  subText: "Work and Internship",
  secondaryText: "",
  timelineIcon: "fa-map-marker",
  experiences: [
    {
      employerName: "American Express",
      jobTitle: "Internship",
      timeline: "June 2020 - July 2020",
      description: `Worked on the integration of different microservices for transactions
                    and a user interface using the OneApp framework.`,
    },

    // {
    //   employerName: "American Express",
    //   jobTitle: "Internship",
    //   timeline: "June 2020 - July 2020",
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //                       Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
    //                       tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
    //                       eget efficitur libero. Morbi dapibus porta quam laoreet
    //                       placerat.`,
    // },
  ],
};

// ------  Education and Certification ----------- //
const EDUCATION_DATA = {

  headerText: "Education",
  subText: " Basic Qualification and Certifcations",
  secondaryText: "",

  educations: [
    
    {
      instituteName: "Motilal Nehru National Institute of Technology Allahabad",
      location: "Prayagraj",
      duration: "2017-Present",
      course: "Bachelor Of Technology in Computer Science",
      description: null,
    },
    {
        instituteName: "St. Teresa's College",
        location: "Lucknow",
        duration: "2015-2016",
        course: "Class XII",
        description: null,
    },
    {
        instituteName: "St. Teresa's College",
        location: "Lucknow",
        duration: "2013-2014",
        course: "Class X",
        description: null,
    },
  ],


  certificates: [
    {
      title: "Getting Started with Go",
      description: "University of California, Irvine",
      image: "go_certi.jpg",
      link: "https://coursera.org/share/9b990545979b1dfaf3435577fd399311",
    },
  ]
};


// ------  Projects ----------- //
const PROJECT_DATA = {
  headerText: "Projects",
  subText: "My projects makes use of vast variety of latest technology and tools",
  // secondaryText: "",
  projects: [
    {
      image: "",
      name: "Interview Experience Share",
      description: "A web application where people can browse through interview experience or share their experiences as well",
      footnote: "ReactJS | GraphQL | ExpressJS",
    },
    {
      image: "",
      name: "QuizApp",
      description: "A java application where teachers can host quiz(s) and students can attempt, check instant marks, send feedback",
      footnote: "Java | MongoDB | FXML",
    },
    {
      image: "",
      name: "CryptoMomo",
      description: "A blockchain cryptocurrency mimicing the workings of bitcoin.",
      footnote: "JavaScript | Blockchain | ReactJS | Express",
    },
    {
      image: "",
      name: "Node-WikiQuote-Api",
      description: `A npm package for interacting with wikiquotes api and
                     fetching 'random quotes' or any specific person's quote`,
      footnote: "JavaScript | npm ",
    },
    {
      image: "",
      name: "Guess My Age",
      description: `An Alex Skill Kit available on Alexa Skill store, an interative game in which Alexa
      tries to guess your age through a simple mathematics. :p`,
      footnote: "JavaScript | AWS | Alexa-sdk",
    },
  ],
};


// -------- Skills -------- //
const SKILLS_DATA = {
  headerText: "Skills",
  skills: [
    {
      name:"C++",
      image:"cpp.png",
    },
    {
      name:"Java",
      image:"java.png",
    },
    {
      name:"JavaScript",
      image:"javascript.png",
    },
    {
      name:"NodeJs",
      image:"nodejs.png",
    },
    {
      name:"Python",
      image:"python.png",
    },
    {
      name:"Go",
      image:"go.png",
    },
    {
      name:"ReactJs",
      image:"reactjs.png",
    },
    {
      name:"MongoDB",
      image:"mongodb.jpg",
    },
  ],
};

// ----- Contact ---------- //
const CONTACT_DATA = {
  headerText: "Contact Me",
  subText: "",
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/divyanshu1610",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/divyanshu-maurya-135a1714a/",
    },
    {
      icon: "google",
      link: "mailto:divyanshu1610@gmail.com",
    },
    {
      icon: "twitter",
      link: "https://twitter.com/div1610",
    },
  ],
};



 /**
  * THEMES
  *  purpleTheme
  *  orangeTheme
  *  pinkTheme
  *  blueTheme
  */
const SELECTED_THEME = themes.purpleTheme;

const REPO_NAME = 'my-devportfolio';



module.exports = {
  LANDING_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  PROJECT_DATA,
  SKILLS_DATA,
  CONTACT_DATA,
  SELECTED_THEME,
  REPO_NAME,
};
