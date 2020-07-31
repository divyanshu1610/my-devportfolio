const { themes } = require('../theme-context');
// ----- Landing Page ----- //
const LANDING_DATA = {
  name: "Divyanshu Maurya",
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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                          tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                          eget efficitur libero. Morbi dapibus porta quam laoreet
                          placerat.`,
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
  ],
};

// ----- Contact ---------- //
const CONTACT_DATA = {
  headerText: "Contact Me",
  subText: "",
  socialLinks: [
    {
      icon: "github",
      link: "#",
    },
    {
      icon: "linkedin",
      link: "#",
    },
    {
      icon: "google",
      link: "#",
    },
    {
      icon: "twitter",
      link: "#",
    },
  ],
};

const SELECTED_THEME = themes.orangeTheme;
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
