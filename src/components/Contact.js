import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
margin-top: 30px;
margin-bottom: 40px;

.section-title {
  font-size: 22pt;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14pt;
  }
}
`

function Contact() {
  return (
    <ContactContainer id="contact" className="content-container">
      <h1 className="section-title">Contact</h1>
      <p className="contact">
        Check out my <a href="https://github.com/bycdiaz">GitHub</a>.
        You can contact me through <a href="mailto:bycdiaz@protonmail.com">my email</a> or
        through <a href="https://www.linkedin.com/in/bycdiaz/">LinkedIn</a>.
      </p>
    </ContactContainer>
  );
}

export default Contact;
