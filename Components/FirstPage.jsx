import React from "react"
import logo from '../images/nlogo.png';

export default function firstpage(){
    
     const [isScrolled, setIsScrolled] = React.useState(false);


  const handleScroll = () => {
    if (!isScrolled) {
      setIsScrolled(true);

      const scrollStep = window.innerHeight*1.24 / 100; // How much to scroll per interval
      const scrollInterval = 10; // Interval in milliseconds
      const totalSteps = 100; // Number of steps to reach 100vh
      let stepCount = 0;

      const scrollAnimation = setInterval(() => {
        if (stepCount >= totalSteps) {
          clearInterval(scrollAnimation);
        } else {
          window.scrollBy(0, scrollStep);
          stepCount++;
        }
      }, scrollInterval);
    }
  };
    return (
        <div className="firstpage">
        <p>Pixel-perfect designs, lightning-fast performance</p>
        <div>
            <h1>Nachiket Deshpande</h1>
            <p>Frontend Developer</p>
            <a  href="https://docs.google.com/document/d/12rMqPbxFuuq850AmzIOakiWewQriG_ov/edit?usp=sharing&ouid=104586618153199560889&rtpof=true&sd=true"  target="_blank" className="top resume">Resume</a>
        </div>
        <div>
            <img className="logoimage" src={logo}/>
        </div>      
        {/* {!isScrolled &&<button className="Scroll btn41-43" onClick={handleScroll}>Projects<br/><i className="fa-solid fa-arrow-down-long"></i></button>} */}
        </div>
    )
}
