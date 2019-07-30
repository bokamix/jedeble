import React from "react";
import templateStyles from "./template.module.scss";

import Layout from "../components/layout";



var x=1;

const projectTemplate = ({pageContext:{ data }}) => (
  <>
    
    <Layout>
    <div className={templateStyles.container}>
 
  <h1>{data.name}</h1>
  <p>{data.about}</p>
  <div className={templateStyles.wrapper__button}>
    
    <button  className={templateStyles.button__mobile} onClick={()=>changeimg(data)} id="buttonMobile">SHOW MOBILE VERSION</button></div>
  <img id="project__img" className={templateStyles.project__img__desktop}src={(data.screendesktop.url)} alt={'Image' + data.name} />

 
  </div>
    </Layout>

    
  </>
)


function changeimg(data){
  let imgscreenvalue = document.querySelector("#project__img");
  let buttonMobile = document.querySelector("#buttonMobile");
    if(x === 1)
    {
      
      imgscreenvalue.src = data.screenmobile.url  ;
      buttonMobile.innerHTML = "SHOW DESKTOP VERSION" ;   
      imgscreenvalue.classList.remove(templateStyles.project__img__desktop);
      imgscreenvalue.classList.add(templateStyles.project__img__mobile);
      x=2;
    }
else if( x === 2){

  
  imgscreenvalue.src = data.screendesktop.url;
  buttonMobile.innerHTML = "SHOW MOBILE VERSION";
  imgscreenvalue.classList.remove(templateStyles.project__img__mobile);
  imgscreenvalue.classList.add(templateStyles.project__img__desktop);
  x=1;
}

  }


export default projectTemplate