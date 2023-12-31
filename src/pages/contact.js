import patch5 from "../images/patch5.svg"
import patch6 from "../images/patch6.svg"

import '../styling/contact.css';


const Contact = () => {
  return (
<>
<img src={patch5} className="bg5" alt="background"/>
<img src={patch6} className="bg6"alt="background"/>
<div className="contact-container">
    <p className="paragraph">
    A passionate UX Researcher & Designer dedicated to driving social impact through design and
    transforming insights into intuitive solutions. I am driven to find the synergy between
    accessibility, usability, and aesthetics to craft a seamless experience that transcends
    functionality.<br /><br />
    <p >London based</p>
    <p >bethanyioscott@gmail.com</p>
    
    <h3>Thank you!</h3>
    </p>
    
      
{/* 
        <a className="contact-links" href="https://www.siennadev.com/" target="_blank" rel="noreferrer">○ sienna</a>
        <a className="contact-links" href="https://www.linkedin.com/in/bethanyioscott/" target="_blank" rel="noreferrer">○ linkedin</a>
        <a className="contact-links" href="https://www.codewars.com/users/bethanyios" target="_blank" rel="noreferrer">○ codewars</a> */}

  </div>
 </>
  );
}

export default Contact;
