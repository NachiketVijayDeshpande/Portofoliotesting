import React,{ useRef } from 'react'
import About from "/Components/aboutme.jsx"
import TopButton from "/Components/TopButton.jsx"
import Projects from "/Components/Projects.jsx"
import Firstpage from "/Components/FirstPage.jsx"
import Social from "/Components/Socialmedia.jsx"
import Form from "/Components/Form.jsx"
import Footer from "/Components/Footer.jsx"



export default function App() {
    const[showdetail,setShowdetail] =React.useState(false)
    
    function toggleDetail(){
        setShowdetail(prev=>!prev)
    }
    
    function setToggleOf(){
        setShowdetail(prev=>false)
    }
    
   
  return (
    <div className="main" style={{ minHeight: "200vh" }}>
        <TopButton toggleDetail={toggleDetail}  setToggleOf={setToggleOf} />
       <Firstpage/>
       <Social/>
    { showdetail &&<About toggle={toggleDetail}/>}
    <Projects/>
    <Form  />
    <Footer/>
    </div>
  )
}

