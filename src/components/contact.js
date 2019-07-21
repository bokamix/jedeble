import React from "react"
import contactStyles from "./contact.module.scss";
import profileImg from "../images/gatsby-icon.png";

const contact = () => {
return (
  <>
  <h2>Contact</h2>
  <div className={contactStyles.container}>
    <div className={contactStyles.box}>
      <h2>Contact with me:</h2>
      <p>LinkedIn Profile (<a target="_blank" href="https://www.linkedin.com/in/wojciech-janiak-7a7808136/">click</a>)</p>
      <p>Facebook Messenger (<a target="_blank" href="https://www.m.me/jedepl">click</a>)</p>
      <p>Email: jededesign@gmail.com</p>
    </div>
    <div className={contactStyles.box}><img className={contactStyles.avatar} src={profileImg} width="200" alt="Author" /></div>
  </div>
  </>
)

}

  export default contact