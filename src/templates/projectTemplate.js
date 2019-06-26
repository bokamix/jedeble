import React from "react";
import templateStyles from "./template.module.scss";

import Layout from "../components/layout";



var x=1;

const projectTemplate = ({pageContext:{ data }}) => (
  <>
    
    <Layout>
    <div className={templateStyles.container}>
  <button onClick={()=>changeimg(data)} id="buttonM">dasd</button>
  <h1>{data.name}</h1>
  <p>{data.about}</p>
  <img id="project__img" className={templateStyles.project__img__desktop}src={(x===1 && data.screendesktop.url) || 0} alt={'Image' + data.name} />
  </div>
    </Layout>

    
  </>
)


function changeimg(data){
  let imgscreenvalue = document.querySelector("#project__img");
    if(x === 1)
    {
      
      imgscreenvalue.src = data.imgscreen.url      
      x=2
    }
else if( x === 2){

  
  imgscreenvalue.src = data.screendesktop.url 
  x=1
}

  }


export default projectTemplate