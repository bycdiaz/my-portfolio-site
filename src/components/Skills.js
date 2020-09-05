import React from 'react';
import styled from 'styled-components';

import skillList from "../json/skillList";

const SkillsContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
flex-wrap: wrap;

.skill-image {
  height: 60px;
  width: 60px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 15px;
}

.skill-name {
  margin: 15px 0px;
}

.sinatra {
  height: 60px;
  width: 86px;
}

.section-title {
  font-size: 22pt;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`

function Skills() {
  return (
    <SkillsContainer id="skills" className="content-container">
      <h1 className="section-title">Skills</h1>
      <div className="skill-list">
      {skillList.map(skill => {
          return (
            <div className="skill" key={skill['skillName']}>
              <img
                className={skill['skillName'] === 'Sinatra' ? 'sinatra' : 'skill-image'}
                src={skill['image']}
                alt={`${skill['skillName']} icon`}
              ></img> 
              <p className="skill-name">{skill['skillName']}</p>
            </div>
          )
        })}
      </div>
    </SkillsContainer>
  );
}

export default Skills;
