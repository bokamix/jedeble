import React from "react";


import Layout from "../components/layout";




const albumTemplate = ({pageContext:{ data }}) => (
  <>
    
    <Layout>
    
  <h1>{data.name}</h1>
  <p>{data.about}</p>

    </Layout>








    
    
  </>
)

export default albumTemplate
