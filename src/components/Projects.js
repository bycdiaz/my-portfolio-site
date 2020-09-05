import React from 'react';
import styled from 'styled-components';

import projectList from "../json/projectList";

const ProjectContainer = styled.section`
.project-name {
  font-size: 20pt;
  margin: 10px 0px;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}

.made-with {
  margin: 10px 0px;
}

.project-links {
  margin: 25px auto;
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.project-image {
  width: 60%;
  @media (max-width: 600px) {
    min-width: 80%;
  }
  height: auto;
  display: block;
  border: 3px solid #000000;
  margin: 30px auto;
}

.section-title {
  font-size: 22pt;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}
`

function Projects() {
  return (
    <ProjectContainer id="projects" className="content-container">
      <h1 className="section-title">Projects</h1>
      {
        projectList.map(project => {
          return (
            <div className="project" key={project['projectName']}>
              <h2 className="project-name">{project['projectName']}</h2>
              <h3 className="project-description">{project['description']}</h3>
              <h3 className="made-with">{project['madeWith']}</h3>
              <div className="project-links">
                <a 
                  href={project['repoLink']}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repository
                </a>
                <a 
                  href={project['liveLink']}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live View
                </a>
              </div>
              <img
                className="project-image"
                src={project['image']}
                alt={`${project['projectName']} screenshot`}
              ></img>
            </div>
          )
        })
      }
    </ProjectContainer>
  );
}

export default Projects;
