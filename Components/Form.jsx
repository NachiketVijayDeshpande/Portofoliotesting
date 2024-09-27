import React from "react";
import introImage from '../images/image.png';  // Adjust paths according to your structure
import profileImage from '../images/Profileimage.jpeg';


const Form = React.forwardRef((props, ref) => {
  const [submit,setSubmit]= React.useState(false)
  function submitbtn(e){
    e.reventDefault()
    setSubmit(true)
  }
  return (
    <div className="formDiv">
      <h1 className="formheead">Form</h1>
          <img id="form-img" src={profileImage}/>
          <h2>NACHIKET</h2>
          {submit&&<h2>FORM SUBMITTED</h2>}
          <span className="">
            <a href="https://www.linkedin.com/in/nachiket-vijay-deshpande/">Linkedin</a>
          </span>
            <form className="formsection" netlify onSubmit={submitbtn} >
              <div className="inputdiv">
                <input type="text" required placeholder="Name" aria-label="Name" />
                <input type="email" required placeholder="Email" aria-label="Email" />
              </div>
              <input type="text" required placeholder="Subject" aria-label="Email" />
              <input id="message" type="text" required placeholder="Message" aria-label="Email" />
                <br />
                <button className="formbtn"  type="submit">Submit</button>
                {!submit&&<p className="fine-print">Get in touch</p>}
                
            </form>
       
    </div>
  );
});

export default Form;
