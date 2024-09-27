
import React from 'react'


export default function TopButton(props){
        const [isScrolled, setIsScrolled] = React.useState(false);
        const [isScrolledcon, setIsScrolledcon] = React.useState(false);
    

  const handleScroll = () => {
    props.setToggleOf()
    if (!isScrolled) {
      const scrollStep = window.innerHeight*1.25 / 100; // How much to scroll per interval
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
  
    const handleScrollcon = () => {
           props.setToggleOf()
    if (!isScrolledcon) {

      const scrollStep = window.innerHeight*5.25 / 100; // How much to scroll per interval
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
      <div className="top">
            <button onClick={props.toggleDetail} className="bn3637 bn38">About Me</button>
            <button onClick={handleScroll}className="bn3637 bn38">Work</button>
            <button className="bn3637 bn38">More</button>
            <button onClick={handleScrollcon} className="bn3637 bn38">Contact</button>
    </div>
   ) 
}