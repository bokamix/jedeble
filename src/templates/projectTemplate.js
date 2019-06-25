import React from "react";
import templateStyles from "./template.module.scss";

import Layout from "../components/layout";




const projectTemplate = ({pageContext:{ data }}) => (
  <>
    
    <Layout>
    <div className={templateStyles.container}>
  <h1>{data.name}</h1>
  <p>{data.about}</p>
  <img className={templateStyles.project__img__desktop}src={data.screendesktop.url} alt={'Image' + data.name} />
  </div>
    </Layout>

    
  </>
)

export default projectTemplate
