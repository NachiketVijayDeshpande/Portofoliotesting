import React from "react"
import useToggle from "/Components/UseToogle.jsx"
import vanlifeImg from '../images/Vanlife.png';
import quizicalImg from '../images/Quizical.png';
import movieSearchImg from '../images/mvie-search.png';
import tenziesImg from '../images/tenzy.png';

export default function Projects(){
  
    const {texthover, hovertext} = useToggle()
    
    return(
        <div className="Projects">
        <h1>PROJECTS</h1>
        <h2>VAN-LIFE</h2>
        <div className="image-container">
            <button onMouseEnter={hovertext} onMouseLeave={hovertext} className="btn41-43 btn-41">
            {texthover && <p className="hovertext">01</p>}
            <img className="projectimg " src={vanlifeImg}/>
            </button>
            <div className="prjdetailsdiv">
            <p>The Van Life project is a React-based van rental platform featuring React Router 6 for smooth navigation across pages. The app uses Firebase as its database to store user data and van information. It includes functionality to restrict certain tabs or features, making them accessible only to signed-up users.</p>
            <div className="prjdetails">
                <a href="https://github.com/NachiketVijayDeshpande/Van-Life">GITHUB</a>
                <a href="https://vanreact-project.netlify.app/">LIVE DEMO</a>
            </div>
            </div>
        </div>
        <h2>Quizical</h2>
          <div className="image-container">
             <button onMouseEnter={hovertext} onMouseLeave={hovertext} className="btn41-43 btn-41">
            {texthover && <p className="hovertext">02</p>}
            <img className="projectimg " src={quizicalImg}/>
            </button>
            <div className="prjdetailsdiv">
            <p>Developed a trivia quiz application using React and integrated the Open Trivia Database API to fetch random questions. Implemented features such as dynamic question rendering, user score tracking, and responsive design for an engaging user experience.</p>
            <div className="prjdetails">
                <a href="https://github.com/NachiketVijayDeshpande/quizical">GITHUB</a>
                <a href="https://quizzical-nachiket.netlify.app/">LIVE DEMO</a>
            </div>   
            </div>

        </div>
          <h2>Movie Search</h2>
          <div className="image-container">
          <button onMouseEnter={hovertext} onMouseLeave={hovertext} className="btn41-43 btn-41">
            {texthover && <p className="hovertext">03</p>}
            <img className="projectimg " src={movieSearchImg}/></button>
            <div className="prjdetailsdiv">

            <p>Developed a movie search application using javascript and integrated the OMDb API to search for movies by title. The application features dynamic search, movie details display, and a responsive interface for seamless user experience.</p>
            <div className="prjdetails">
                <a href="https://github.com/NachiketVijayDeshpande/Movie-search">GITHUB</a>
                <a href="https://movieratingsearch.netlify.app/">LIVE DEMO</a>
            </div>
            </div>
            </div>
              <h2>React Tenzies Game</h2>
          <div className="image-container">
            <button onMouseEnter={hovertext} onMouseLeave={hovertext} className="btn41-43 btn-41">
             {texthover && <p className="hovertext">04</p>}
             <img className="projectimg " src={tenziesImg}/> </button>
             <div className="prjdetailsdiv">
            <p>Developed a Tenzies game using React, where players roll dice and attempt to match all dice to the same number. The game implements state management to track rolls and the game status, and features a responsive design for an engaging user experience.</p>
            <div className="prjdetails">
                <a href="https://github.com/NachiketVijayDeshpande/react-tenzies">GITHUB</a>
                <a href="https://sunny-churros-a9ca4c.netlify.app/">LIVE DEMO</a>
            </div>

             </div>
            </div>
        </div>
    )
}
