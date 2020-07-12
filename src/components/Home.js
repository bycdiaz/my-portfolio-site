import React from 'react';
import styled from 'styled-components';
const AboutContainer = styled.div`
.bio > * {
  font-size: 14pt;
  margin: 15px 0px;
  line-height: normal;
}
`

function Home() {
  return (
    <AboutContainer>
      <div className="bio">
        <p className="coding">
          I'm Carlos and I'm currently a freelance web developer. I started learning in 
          late 2018 with <a href="https://www.theodinproject.com/">The Odin 
          Project</a>. I've found joy in coding in a lot of ways. Making
          stuff is cool. Helping new learners in The Odin Project community
          has also been rewarding. I also find that I enjoy solving problems
          in the context of larger projects and <a href="https://www.codewars.com/users/bycdiaz">
          codewars exercises</a>.
        </p>
        <p className="personal">
          I grew up in Los Angeles, California and currently live in Philly, PA.
          Presently, I'm an academic advisor for an undergraduate engineering
          major. I have formal training as a Salsa dancer and spent several years
          teaching and performing. I'm also currently attempting to get myself
          back to conversational in Russian.
        </p>
        <p className="contact">
          Check out my <a href="https://github.com/bycdiaz">GitHub</a>.
          You can contact me through <a href="mailto:bycdiaz@protonmail.com">my email</a> or
          through <a href="https://www.linkedin.com/in/bycdiaz/">LinkedIn</a>.
        </p>
      </div>
    </AboutContainer>
    
  );
}

export default Home;
