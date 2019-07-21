import React from "react"
import contactStyles from "./contact.module.scss";
import profileImg from "../images/gatsby-icon.png";

const contact = () => {
return (
  <>
  <h2 className={contactStyles.section__title}>Contact</h2>
  <div className={contactStyles.container}>
    <div className={contactStyles.box}>
      <h2>Contact with me:</h2>
      <p>LinkedIn Profile (<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/wojciech-janiak-7a7808136/">click</a>)</p>
      <p>Facebook Messenger (<a rel="noopener noreferrer" target="_blank" href="https://www.m.me/jedepl">click</a>)</p>
      <p>Email: jededesign@gmail.com</p>
    </div>
    <div className={contactStyles.box}><img className={contactStyles.avatar} src={profileImg} width="200" alt="Author" /></div>
  </div>
  </>
)

}

  export default contact