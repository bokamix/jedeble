import React from "react"
import aboutStyles from "./about.module.scss"

const About = () => {
return (
  <>
  <div className={aboutStyles.section}>
 <h2>Jestem programistem</h2>
 <div className={aboutStyles.wrapper__boxes}>
<div className={aboutStyles.box}>Box 1</div>
<div className={aboutStyles.box}>box 2</div>
<div className={aboutStyles.box}> box 3</div>

 </div>
 </div>
  </>
)

}

  export default About