import React from 'react'
import animatedimg from "/images/side-image.png"
export default function about(props){
    return (
            <div className="aboutDetail aboutmeclass">
                <div >
                    <h1>ABOUT ME</h1>
                    <p>Front-end Developer with 3 years of experience specializing in building dynamic, responsive web applications using React, JavaScript, HTML5, and CSS3. Proficient in modern development tools such as Git, Vite, and Node.js, with hands-on experience deploying and managing applications on platforms like Netlify and Firebase. Skilled in collaborating with backend teams, managing state, and integrating APIs for seamless and efficient web solutions.</p>
                    <div className="skillset">
                            <button className="btn41-43 btn-41">#javaScript</button>
                            <button className="btn41-43 btn-41">#react.js</button>
                            <button className="btn41-43 btn-41">#redux</button>
                            <button className="btn41-43 btn-41">#html</button>
                            <button className="btn41-43 btn-41">#css</button>
                            <button className="btn41-43 btn-41">#git</button>
                            <button className="btn41-43 btn-41">#github</button>
                            <button className="btn41-43 btn-41">#figma</button>
                            <button className="btn41-43 btn-41">#terminal</button>
                            <button className="btn41-43 btn-41">#agile</button>
                            <button className="btn41-43 btn-41">#vscode</button>
                    </div>
                    <div className="imagesdiv">
                    <i className=" icons  fa-brands fa-html5"></i>
                    <i className=" icons fa-brands fa-css3-alt"></i>
                    <i className=" icons fa-brands fa-js"></i>
                    <i className=" icons fa-brands fa-react"></i>
                    </div>
                </div>
            <div>
            <img src={animatedimg}/>
            </div>
            <div>
            <button onClick={props.toggle} className="bn3637 close bn38 top">X</button>
            </div>
                
            </div>
        
                
        
    )
}