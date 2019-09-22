import React from "react"
import contactStyles from "./contact.module.scss";
import profileImg from "../images/gatsby-icon.png";
import LinkedInLogo from "../images/LI-Logo.png";
import MessengerLogo from "../images/messenger-logo.png";
const contact = () => {
return (
  <>
  <h2 className={contactStyles.section__title}>Contact</h2>
  <div className={contactStyles.container}>
    <div className={contactStyles.box}>
      <h2>Contact with me:</h2>
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/wojciech-janiak-7a7808136/"><img width="120" src={LinkedInLogo} alt="logo LinkedIn" /></a>
      <a rel="noopener noreferrer" target="_blank" href="https://www.m.me/jedepl"><img width="40" src={MessengerLogo} alt="Logo Messenger" /></a>
      <h3>wjaniak@jede.pl</h3>
    </div>
    <div className={contactStyles.box}><img className={contactStyles.avatar} src={profileImg} width="200" alt="Author" /></div>
  </div>
  </>
)

}

  export default contact