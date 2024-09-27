import React from "react";
import introImage from '../images/image.png';  // Adjust paths according to your structure
import profileImage from '../images/Profileimage.jpeg';
const Form = React.forwardRef((props, ref) => {
    
    
    
    
  return (
    <div>
      <h1 className="formheead">Form</h1>
      <div className="form-page">
        {/* Introduction section */}
        <section className="intro">
         <img className="formimg" src={introImage}/>
          </section>

        {/* Main content */}
        <main className="main-content">
          <img
            className="img-main"
            src={profileImage}
            alt="My Scrimba avatar."
          />
          <h2>NACHIKET</h2>
          <span className="subheading">
            <a href="https://www.linkedin.com/in/nachiket-vijay-deshpande/">LinkedIn</a>
          </span>
          <p>
            Front-end magician, transforming ideas into interactive masterpieces. I build
            websites that not only look good, but feel amazing. Your vision, my code.
            Let's create something extraordinary.
          </p>

          {/* Form section */}
          <form ref={ref}>
            <input type="text" required placeholder="Name" aria-label="Name" />
            <input type="email" required placeholder="Email" aria-label="Email" />
            <input type="file" required accept="image/png, image/jpg" aria-label="Choose file" />
            <br />
            <button className="btn btn-primary" type="submit">Submit</button>
            <p className="fine-print">We'll never share your information without permission.</p>
          </form>
        </main>
      </div>
    </div>
  );
});

export default Form;
