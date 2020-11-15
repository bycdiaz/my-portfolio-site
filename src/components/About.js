import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
margin-top: 30px;

.bio > * {
  font-size: 14pt;
  margin: 15px 0px;
  line-height: normal;
}

.section-title {
  font-size: 22pt;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}
`

function About() {
  return (
    <AboutContainer id="about" className="content-container">
      <h1 className="section-title">About</h1>
      <div className="bio">
        <p className="coding">
          I'm Carlos and I'm currently a freelance web developer. My most recent experience is with front-end
          techologies like JavaScript and React. I started learning in 
          late 2018 with <a href="https://www.theodinproject.com/" rel="noopener noreferrer" target="_blank">The Odin 
          Project</a>, an open source web dev curriculum, and currently serve as a core member in
          that community.
          I've found joy in coding in a lot of ways. Making
          stuff is cool. Helping new learners in The Odin Project community
          has also been rewarding. I also find that I enjoy solving problems
          in the context of larger projects and <a href="https://www.codewars.com/users/bycdiaz" rel="noopener noreferrer" target="_blank">
          codewars exercises</a>.
        </p>
        <p>
          You can see my recent coding activity on 
          <a href="https://github.com/bycdiaz" rel="noopener noreferrer" target="_blank"> my github</a>. In my time volunteering 
          with The Odin project there are questions that come up frequently. New learners often wonder which programming language
          they should learn. I had that question too so I gathered my thoughts on the matter <a href="https://medium.com/@bycdiaz/choosing-the-right-language-a-short-guide-on-how-not-to-ruin-your-career-2b353be1371?source=friends_link&sk=a963c1d5933d329241ae42360d218411" rel="noopener noreferrer" target="_blank">
          in this blog post</a>.
        </p>
        <p className="personal">
          By day, I'm also an academic advisor for an undergraduate engineering
          major. I have formal training as a salsa dancer and spent several years
          teaching and performing. I'm also currently attempting to get myself
          back to conversational in Russian.
        </p>
      </div>
    </AboutContainer>
  );
}

export default About;
