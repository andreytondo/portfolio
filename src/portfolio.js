/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "portfolio.username",
  title: "portfolio.greeting",
  subTitle: emoji("portfolio.description"),
  resumeLink: "portfolio.resumeLink", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/andreytondo",
  linkedin: "https://linkedin.com/in/andreytondo",
  gmail: "andreytondo0408@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "skills.title",
  subTitle: "skills.subTitle",
  skills: [
    emoji("skills.skill1"),
    emoji("skills.skill2"),
    emoji("skills.skill3")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "angular", fontAwesomeClassname: "fab fa-angular"},
    {skillName: "react", fontAwesomeClassname: "fab fa-react"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "databases", fontAwesomeClassname: "fas fa-database"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "jenkins", fontAwesomeClassname: "fab fa-jenkins"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "cloud", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "education.utfpr.schoolName",
      logo: require("./assets/images/utfprLogo.png"),
      subHeader: "education.utfpr.subHeader",
      duration: "education.utfpr.duration",
      desc: "education.utfpr.desc",
      descBullets: ["education.utfpr.bullet1", "education.utfpr.bullet2"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "techStack.frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "techStack.backend",
      progressPercentage: "70%"
    },
    {
      Stack: "techStack.programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "work.cit.role",
      company: "work.cit.company",
      date: "work.cit.date",
      desc: "work.cit.desc"
    },
    {
      role: "work.idsArchitect.role",
      company: "work.idsArchitect.company",
      companylogo: require("./assets/images/idsLogo.png"),
      date: "work.idsArchitect.date",
      desc: "work.idsArchitect.desc",
      descBullets: ["work.idsArchitect.bullet1"]
    },
    {
      role: "work.idsFullstack.role",
      company: "work.idsFullstack.company",
      companylogo: require("./assets/images/idsLogo.png"),
      date: "work.idsFullstack.date",
      desc: "work.idsFullstack.desc",
      descBullets: ["work.idsFullstack.bullet1"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "bigProjects.title",
  subtitle: "bigProjects.subtitle",
  projects: [
    {
      projectName: "bigProjects.delfos.name",
      projectDesc: "bigProjects.delfos.desc"
    },
    {
      projectName: "bigProjects.cacambeiro.name",
      projectDesc: "bigProjects.cacambeiro.desc"
    },
    {
      image: require("./assets/images/dainfLogo.png"),
      projectName: "bigProjects.dainf.name",
      projectDesc: "bigProjects.dainf.desc"
    },
    {
      image: require("./assets/images/idrLogo2.png"),
      projectName: "bigProjects.idr.name",
      projectDesc: "bigProjects.idr.desc",
      footerLink: [
        {
          name: "bigProjects.idr.visit",
          url: "https://www.idrparana.pr.gov.br/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("achievements.title"),
  subtitle: "achievements.subtitle",

  achievementsCards: [
    // {
    //   title: "achievements.codein.title",
    //   subtitle: "achievements.codein.subtitle",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "achievements.codein.imageAlt",
    //   footerLink: [
    //     {
    //       name: "achievements.codein.certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "achievements.codein.award",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "achievements.codein.blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "achievements.assistant.title",
    //   subtitle: "achievements.assistant.subtitle",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "achievements.assistant.imageAlt",
    //   footerLink: [
    //     {
    //       name: "achievements.assistant.view",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "achievements.pwa.title",
    //   subtitle: "achievements.pwa.subtitle",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "achievements.pwa.imageAlt",
    //   footerLink: [
    //     {name: "achievements.pwa.certification", url: ""},
    //     {
    //       name: "achievements.pwa.finalProject",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "blogs.title",
  subtitle: "blogs.subtitle",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "blogs.blog1.title",
      description: "blogs.blog1.description"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "blogs.blog2.title",
      description: "blogs.blog2.description"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "talks.title",
  subtitle: emoji("talks.subtitle"),

  talks: [
    {
      title: "talks.talk1.title",
      subtitle: "talks.talk1.subtitle",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("podcast.title"),
  subtitle: "podcast.subtitle",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "resume.title",
  subtitle: "resume.subtitle",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("contact.title"),
  subtitle: "contact.subtitle",
  number: "contact.number",
  email_address: "contact.email"
};

// Twitter Section

const twitterDetails = {
  userName: "false", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  resumeSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
