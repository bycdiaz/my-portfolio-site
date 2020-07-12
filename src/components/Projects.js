import React from 'react';
import projectList from "../json/projectList";
import styled from 'styled-components';
const ProjectContainer = styled.div`
.project-name {
  font-size: 20pt;
  margin: 10px 0px;
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
  width: 400px;
  height: 400px;
  display: block;
  border: 3px solid #000000;
  margin: 30px auto;
}
`

function Projects() {
  return (
    <ProjectContainer>
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
