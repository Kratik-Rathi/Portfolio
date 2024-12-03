/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kratik Rathi",
  title: "Hi all, I'm Kratik",
  subTitle: emoji(
    "A passionate Data Scientist and Data Analyst 🚀 with expertise in data analysis, visualization, and API automation. Proficient in Python and its libraries, Flask framework, Tableau, and Power BI, with hands-on experience delivering actionable insights and streamlining workflows through advanced technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zVvjwtEV3ZW-9nppKG8QXgx-w6ZCeg0n/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kratik-Rathi",
  linkedin: "https://www.linkedin.com/in/kratikrathi/",
  gmail: "krarathi@iu.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy Data Enthusiast who wants explore the World of Data and the Technologies it has to offer!",
  skills: [
    emoji(
      "⚡ Proficient in Exploratory Data Analysis (EDA), time-series forecasting, and solving classification problems, while actively learning and expanding expertise in Deep-Learning using TensorFlow, Keras and Scikit-Learn."
    ),
    emoji(
      "⚡ Skilled in database management and integration with SQL, MySQL, SQL Server, PostreSQL, SQLite, and JSON."
    ),
    emoji("⚡ Experienced in deploying APIs and scheduling tasks using tools like Flask, .NET Framework, Docker and cronjob automation. "),
    emoji(
      "⚡ Adept in using data visualization tools like Tableau, Power BI and Microsoft Excel for insightful dashboards and reports."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "devicon-python-plain"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "devicon-r-plain"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "devicon-docker-plain"
  },
  {
    skillName : "Tableau",
    fontAwesomeClassname : "devicon-minitab-plain"
  },
  {
    skillName : "C#",
    fontAwesomeClassname : "devicon-csharp-plain"
  },
  {
    skillName : ".NET",
    fontAwesomeClassname : "devicon-dotnetcore-plain"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "devicon-sqldeveloper-plain"
  },
  {
    skillName: "Microsoft SQL Server",
    fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
  },
  {
    skillName: "SQLite",
    fontAwesomeClassname: "devicon-sqlite-plain"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "devicon-mysql-original"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "devicon-postgresql-plain"
  },
  {
    skillName : "Postman",
    fontAwesomeClassname : "devicon-postman-plain"
  },
  {
    skillName : "Gitlab",
    fontAwesomeClassname : "devicon-gitlab-plain"
  },
  {
    skillName : "Github",
    fontAwesomeClassname : "devicon-github-original"
  },
  {
    skillName : "Git",
    fontAwesomeClassname : "devicon-git-plain"
  },
  {
    skillName : "Flask",
    fontAwesomeClassname : "devicon-flask-original"
  },
  {
    skillName : "Numpy",
    fontAwesomeClassname : "devicon-numpy-plain"
  },
  {
    skillName : "Pandas",
    fontAwesomeClassname : "devicon-pandas-plain"
  },
  {
    skillName : "Tensorflow",
    fontAwesomeClassname : "devicon-tensorflow-original"
  },
  {
    skillName : "Keras",
    fontAwesomeClassname : "devicon-keras-plain"
  },
  {
    skillName : "Scikit-Learn",
    fontAwesomeClassname : "devicon-scikitlearn-plain"
  },
  {
    skillName : "Matplotlib",
    fontAwesomeClassname : "devicon-matplotlib-plain"
  },
  {
    skillName : "Prometheus",
    fontAwesomeClassname : "devicon-prometheus-original"
  },
  {
    skillName : "Jupyter",
    fontAwesomeClassname : "devicon-jupyter-plain"
  },
  {
    skillName : "Power BI",
    fontAwesomeClassname : "devicon-minitab-plain"
  }


],
display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indiana University - Bloomington",
      logo: require("./assets/images/Indiana-University-Symbol.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2024 - May 2026",
      //desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Current Coursework - Introduction to Statistics, Applied Machine Learning, Advance Database Concepts",
      ]
    },
    {
      schoolName: "Medi-Caps University",
      logo: require("./assets/images/20230208142941.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2019 - July 2023",
      //desc: "GPA: 3.43",
      descBullets: ["GPA: 3.43", "Completed Coursework in: Data Mining, Data Science, Data Visualization, Big Data Engineering, Database Management, Python Programming, Data Structures and Algorithms, Design and Analysis of Algorithms and many more."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization Tools (Tableau / Power BI)", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database Technologies", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "API Framework (Flask / .NET)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Swastika Investmart Ltd.",
      companylogo: require("./assets/images/swastikainvestmart.png"),
      date: "January 2024 – July 2024",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Automated Digital Marketing reports using Flask API and Python which analyzed 5 million records daily of potential clients from different zones and scheduled reports on mail at midnight via cronjob.",
        "Developed an ASP.NET API to check the PendateStatus of clients in the MutualFunds database for the past 7 days and update the Netcore list for further actions.",
        "Designed a Docker-based universal scheduler, streamlining API scheduling for the team from a single system."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "Mahindra & Mahindra Ltd.",
      companylogo: require("./assets/images/Mahindra-Mahindra-MM.jpg"),
      date: "January 2023 – April 2023",
      descBullets: [ 
        "Constructed ARIMAX and SARIMAX time-series forecasting models using Python on 20 years of monthly regression data (2001-2020), achieving 87% accuracy in predicting financial trends for the next 6 years. Also, performed ETL processes for data preparation, enabling further visualization and analysis.",
        "Created matrix of 1k+ data on MS Excel for different car models to enhance individual tracking of parts."
      ]
    },
    {
      role: "Student Trainee",
      company: "Tech Mahindra Ltd.",
      companylogo: require("./assets/images/Tech_Mahindra-Logo.wine.png"),
      date: "June 2022 – August 2022",
      descBullets: [
        "Acquired in-depth knowledge of CRM, E2E Billing, OSS, and BSS systems.",
        "Analyzed structured CRM data using MS Excel and enhanced data interpretability by creating 5 interactive dashboards in Tableau enhancing insights for better decision-making."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "Some of my projects to showcase my skill / experience",
  projects: [
    {
      image: require("./assets/images/1493169.png"),
      projectName: "Point-to-Contact",
      projectDesc: "Point-of-Contact API leverages MS SQL Server, Flask, Docker, and cron jobs to automate the api. Designed to fetch information, enhance its readability, and deliver it as an Excel file via SMTP, the API ensures timely and efficient communication in a team enviornment by running scheduled triggers in a Dockerized environment.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Point-of-contact-API"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/LR.png"),
      projectName: "Boston House Price Prediction model",
      projectDesc: "This project predicts Boston house prices using multiple regression models, including Linear, Ridge, and Lasso, to evaluate and compare their performance. The models are trained on the Boston housing dataset, showcasing the application of machine learning techniques in real estate price prediction.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Boston-House-Price-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/Classification.png"),
      projectName: "Breast Cancer Classification",
      projectDesc: "This implements a machine learning pipeline for breast cancer classification using a dataset containing features of breast tumors. The goal is to predict whether a tumor is benign or malignant based on its features. The project compares several classification algorithms and evaluates their performance to select the best model for this task.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Breast-Cancer-Classification"
        }
      ]
    },
    {
      image: require("./assets/images/Classification.png"),
      projectName: "Lung Xray Classification",
      projectDesc: "This project aims to classify lung X-ray images into three categories: COVID-19, Normal, and Pneumonia. Using k-Means Clustering and deep learning particularly Convolutional Neural Networks (CNNs).",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Lung-Xray-Classification-Covid19-Normal-Pneumonia-"
        }
      ]
    },
    {
      image: require("./assets/images/time-series.png"),
      projectName: "Air Passengers ARIMAX-SARIMAX",
      projectDesc: "The project uses the Air Passengers dataset, which is a monthly dataset of air passengers from 1949 to 1960. The dataset is split into a training set and a test set. The training set is used to train the ARIMAX and SARIMAX models, while the test set is used to evaluate the performance of the models.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Air_Passengers_ARIMAX-SARIMAX"
        }
      ]
    },
    {
      image: require("./assets/images/81dhrxbzydl-ac-sl1500--500x500.png"),
      projectName: "Traffic Sign Classification System",
      projectDesc: "The Traffic Sign Classification System uses Convolutional Neural Networks (CNN) to recognize and classify road signs for applications in driver assistance and autonomous vehicles. The model, trained with image augmentation and grayscale intensity equalization, achieved a prediction accuracy of 94% on unseen data.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Kratik-Rathi/Traffic-Sign-Classification-System"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or have an opportunity for me. Feel free to contact!",
  number: "+1 (812) 822-7764",
  email_address: "krarathi@iu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
