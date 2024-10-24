import React from "react";
import introImage from '../images/image.png';  // Adjust paths according to your structure
import profileImage from '../images/Profileimage.jpeg';


const Form = React.forwardRef((props, ref) => {
  const [result, setResult] = React.useState("");
  const [submit,setSubmit]= React.useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbc82cd7-cef8-469a-b7fb-7886f36cd2cc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="formDiv">
      <h1 className="formheead">Form</h1>
          <img id="form-img" src={profileImage}/>
          <h2>NACHIKET</h2>
          <h3>{result}</h3>         
        {submit&&<h2>FORM SUBMITTED</h2>}
          <span className="">
            <a href="https://www.linkedin.com/in/nachiket-vijay-deshpande/">Linkedin</a>
          </span>
            <form className="formsection" onSubmit={onSubmit} >
              <div className="inputdiv">
                <input type="text" required placeholder="Name" name='name' aria-label="Name" />
                <input type="email" required placeholder="Email" name='email' aria-label="Email" />
              </div>
              <input type="text" required placeholder="Subject" name='subject' aria-label="Subject" />
              <input id="message" type="text" required placeholder="Message" name='message' aria-label="message" />
                <br />
                <button className="formbtn"  type="submit">Submit</button>
                {!submit&&<p className="fine-print">Get in touch</p>}
                
            </form>
       
    </div>
  );
});

export default Form;
