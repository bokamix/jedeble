import React from "react"
import Header from './header'
import Footer from './footer'
import layoutStyle from './layout.module.scss'
const Layout = (props) => {
return (
    <>
      <Header />
      <div className={layoutStyle.container}>
      {props.children}  
     
      </div>
      <Footer />
    </>
)

}

  export default Layout