import React from "react"
import TitleSectionStyle from "../components/titlesection.module.scss";
import titleImage from "../images/gatsby-icon.png"

const TitleSection = () => {
return (
  <>
  
  <div className={TitleSectionStyle.container}>
    <div className={TitleSectionStyle.box}><h2 className={TitleSectionStyle.main__title}>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.” ANTOINE DE SAINT-EXUPÉRY</h2>
    <p>Front-End Developer</p></div>
    <div className={TitleSectionStyle.box}></div>
    
  </div>
  <h2>Jakie są najpopularniejsze CMS?</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
 <div><p>Wordpress 59% </p>
  <p>Joomla 6.7%</p>
  <p>Drupal 4.7%</p>
  <p>Magento 2.3%</p></div>
  <div>
    <h3>to to tam</h3>
  <p>Data from 2018: BuiltWith.com, W3tech.com, SimilarTech, Google Trends.</p>
  </div>
  
  </div>

  <h2>Gdzie ludzie używają internetów?</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
  <div>
    <h3>BlaBla Bla</h3>
  <p>data from wearesocial.com, hootsuite.com</p>
  </div>
    <div className={TitleSectionStyle.value__content}>
      <span>64%</span> <p> Mobile</p>
      <span>57% </span><p>desktop</p>
      <span>45% </span><p>Social media user</p>
      <span>43% </span> <p>Mobile social media user</p>
    </div>


  </div>

  <h2>Co ich wkurza??</h2>
  <div className={TitleSectionStyle.statisctcs__container}>
    <div> <p>Długi czas wczytywania strony</p>
      <p>Reklamy</p>
      <p>Wyskakujące okienka</p>
      <p>Powtarzające się treści</p></div>
     <div><h2>takie tam sobie rzeczy</h2><p>sijdasdoasjdoijsaoi jsdoiasjdoi</p></div>
  </div>

  <h2>Rozwiązanie na niektóre problemy</h2>
  <p>Internetu nie naprawimy, ale możemy go przyśpieszyć i zadbać o jego większe bezpieczeństwo.  </p>
  <div className={TitleSectionStyle.statisctcs__container}>
  <div>Bezpieczny CMS</div>
  <div>Mobile first website</div>
  <div>Nie </div>
  <div>123123</div>
  </div>
  </>
)

}

  export default TitleSection