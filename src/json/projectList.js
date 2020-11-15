import hp from "../images/hp-landing.png";
import configzmeImage from "../images/configzme.png";
import prereqCheck from "../images/prereqcheck.png";
import grotonToggle from "../images/grotonfd-toggle.gif";

const projectList = [
  {
    projectName: 'Hyper Protocol',
    description: 'Transformed paper emergency protocol manual into progressive web application that equips firefighters, EMTs, and paramedics with the ability to search and review emergency protocols on mobile devices while responding to emergencies, even when offline. Developed admin interface to manage users and create, update and delete emergency protocols.',
    // repoLink: 'https://github.com/bycdiaz/configzme/tree/master/frontend',
    // liveLink: 'https://configz.me/',
    madeWith: 'Made with Node/Express, React, styled-components, Indexed DB (Dexie), Mongodb, and sockets.',
    demo: 'Demo available upon request.',
    image: hp,
  },
  {
    projectName: 'Configz.me',
    description: 'Developed front-end for configuration files management tool that allows users to upload new files, edit files, view file contents, and delete files.',
    repoLink: 'https://github.com/bycdiaz/configzme/tree/master/frontend',
    liveLink: 'https://configz.me/',
    madeWith: 'Made with JavaScript, ReactJS, and CSS.',
    image: configzmeImage
  },
  {
    projectName: 'Pre-req Check',
    description: 'Web application that identifies pre-requisites, co-requisites, and post-requisites for any course at Drexel University.',
    repoLink: 'https://github.com/drexelbiomed/pre-req_check',
    liveLink: 'https://pre-req-check.herokuapp.com/',
    madeWith: 'Made with Sinatra, Ruby, and Bootstrap.',
    image: prereqCheck
  },
  {
    projectName: 'Groton Fire Rescue',
    description: 'Added tabs for displaying drawing winners by year for public/admin view and corrected visual artifacts on header image.',
    repoLink: 'https://github.com/I3uckwheat/GrotonFireRescue',
    liveLink: 'https://www.grotonfiredept.com/gun-drawing',
    madeWith: 'Made with JavaScript, Pug, and CSS.',
    image: grotonToggle
  }
]

export default projectList;
