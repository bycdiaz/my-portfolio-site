import React from 'react';
import skillList from "../json/skillList";
import styled from 'styled-components';
const SkillsContainer = styled.div`
display: flex;
flex-direction: row;
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
`

function Skills() {
  return (
    <SkillsContainer>
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
    </SkillsContainer>
  );
}

export default Skills;
