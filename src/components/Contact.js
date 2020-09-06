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

.contact {
  margin: 30px 0px;
}
`

function Contact() {
  return (
    <ContactContainer id="contact" className="content-container">
      <h1 className="section-title">Contact</h1>
      <p className="contact">
        You can contact me <a href="mailto:bycdiaz@protonmail.com">through email</a> or
        <a href="https://www.linkedin.com/in/bycdiaz/" rel="noopener noreferrer" target="_blank"> LinkedIn</a>.
      </p>
    </ContactContainer>
  );
}

export default Contact;
