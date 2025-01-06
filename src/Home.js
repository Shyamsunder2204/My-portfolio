import React, { useState } from 'react'
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,faWhatsapp,faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import myImage from "./images/my-pic.jpeg"
// import myImage from "./images/myPic.jpg"
// import myPic from "./images/my-image.png"
import {  FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';



export default function Home() {
    const [name, setName]=useState("");
    const [number, setNumber]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [result,setResult]=useState("");
    const [resultVisible, setResultVisible] = useState(false);
    const [error, setError] = useState("");


   const handleNameChange=(e)=>{
    const name=e.target.value;
     setName(name)
     setError("");
   }
   const handleNumberChange=(e)=>{
    const number=e.target.value;
     setNumber(number);
     setError("");
   }
   const handleEmailChange=(e)=>{
    const email=e.target.value;
     setEmail(email);
     setError("");
   }
   const handleMessageChange=(e)=>{
    const message=e.target.value;
     setMessage(message);
     setError("");
   }
   const handleClick = () => {
    if (!name || !number || !email || !message) {
        setError("Please fill in all fields.");
        setResultVisible(false);
        return;
    }
    const result = `Thank you, ${name}! Your message has been sent successfully.`;
    setResultVisible(true);
    setResult(result);
    setError("");

    setTimeout(() => {
        setResultVisible(false);
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
    }, 5000); 
}
const handleMenuClick = () => {
    const checkBox = document.getElementById('check');
    checkBox.checked = false;
};
  return (
    <div className="main-container">
      <nav className="nav-bar">
        <div className="nav-content">
            <div className="logo">SHYAM</div>
            <div className="nav-toggle">
                <label htmlFor="check" className="toggle-btn">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </div>
            <input type="checkbox" name="check" id="check" />
            <ul className="nav-links" onClick={handleMenuClick}>
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#aboutMeContainer">About Me</a></li>
            </ul>
        </div>
      </nav>
      <div className="profile">
        <div className="heading">
          <h4>Hello, I'm <span className="my-name">Shyamsunder</span></h4>
          <h1>Web Developer</h1>
          <p>I am a passionate web developer dedicated to crafting engaging and user-friendly websites.</p>
        </div>
        <div className="my-image">
          <img src={myImage} alt="Shyamsunder" />
        </div>
      </div>
        <div className="social-web-container">
        <div className="social-container">
                    <h4>FIND ME ON</h4>
                    <a href="https://wa.me/+919885340110" target="_blank"><FontAwesomeIcon icon={faWhatsapp}  className="icon"/></a>
                     <a href="https://github.com/Shyamsunder2204" target="_blank"><FontAwesomeIcon icon={faGithub}  className="icon" /></a> 
                     <a href="http://www.linkedin.com/in/shyamsunder-sattu-8b9926256"target="_blank"><FontAwesomeIcon icon={faLinkedin}  className="icon"/></a>  
                     <a href="mailto:shyamnani77393@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}  className="icon"/></a>      
                </div>
                <div className="stack-container">
                    <h4>BEST WEB STACK</h4>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact className="icon" /></a>
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><FaNodeJs className="icon" /></a>
                    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><FaPython className="icon" /></a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><FaDatabase className="icon" /></a>
                </div>

        </div>
        <div className="skill-container">
            <h3>Skill Overview</h3>
            <p style={{textAlign:'center'}}>Eager and Passionate Full-Stack Web Developer with 1 year of hands-on experience building responsive web applications. Proficient in HTML5, CSS3, JavaScript, jQuery, React.js, PHP, Python, Node.js, and MySQL, with expertise in REST APIs, JSON data, and OpenAI API integration. Skilled in designing user-friendly interfaces, developing scalable backend solutions, and ensuring seamless database connectivity. A collaborative team player with strong communication skills, willing to learn and adapt to emerging technologies. Committed to delivering innovative, AI-driven tools and modern web solutions while staying updated with industry trends.</p>
             <a href="">Checkout my online resume</a>  
        </div>
        <div className="myskills-heading" id="skill-set-div">
        <h3>My Skills</h3>
        </div>
        <div className="skill-set-div " >
            <div className="frontend-div">
                <h5>Frontend</h5>
                <ul>
                    <li>HTML5, CSS, Bootstrap</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React JS</li>
                </ul>
            </div>
            <div className="backend-div">
                <h5>Backend</h5>
                <ul>
                    <li>PHP</li>
                    <li>Node JS</li>
                    <li>Python/Django</li>
                    <li>MySQl</li>
                </ul>
            </div>
            <div className="others-div">
                <h5>others</h5>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Bitbucket</li>
                </ul>
            </div>
        </div>
        <div className="aboutMe-container" id="aboutMeContainer"  >
            <h3>About Me</h3>
            <p >As a recent graduate with a degree in MCA, I'm excited to launch my career in software development. During my studies, I gained hands-on experience in programming language as Python, as well as web development technologies like HTML, CSS, and JavaScript, React js , Node js. I'm a fast learner with a passion for problem-solving, and I'm always eager to take on new challenges. I'm seeking a role where I can apply my skills and contribute to the development of innovative software solutions.</p>
            <div className='btn-div'>
                <button className="btn">Education</button>
                <button className="btn"><a href="#skill-set-div">Professional Skills</a></button>
                <button className="btn">Intrests</button>
                <button className="btn">Experience</button>
            </div>
        </div>
        <h3 className="project-heading" id="projects">My Projects</h3>
        <div className="my-projects-container">
            <div className="project-1">
            <div className="image-container">
            <img src="https://img.freepik.com/free-photo/cute-animals-group-white-background_23-2150038562.jpg"  alt="not found"/>
            </div>
            <div className="project-description">
          <a href="https://github.com/Shyamsunder2204/Projects/tree/master/pythonproject" style={{textDecoration:"none", color:"white"}} target="_blank"> <h5>Pet Hub</h5></a> 
            <p>Developed and Designed a Responsive website to help pet owners find information on pet care through Questionarie based approach using Python, Django Framework, HTML5, CSS3,
                BOOTSTRAP,PostgreSQL</p>
            </div>
            </div>
            <div className="project-2">
            <div className="image-container">
            <img src="https://t4.ftcdn.net/jpg/03/91/64/51/360_F_391645127_Z02luwZD8RgDMaRcmROiWep611QgXAtw.jpg"  alt="not found"/>
            </div>
            <div className="project-description">
            <a href="https://github.com/Shyamsunder2204/Projects/tree/master/HRMS"style={{textDecoration:"none", color:"white"}} target='_blank'><h5>Human Resource Managment</h5></a>
            <p>Designed and developed a comprehensive HRMS with core 
            functionalities using React.js,Node.js for the backend, and PostgreSQL for the database</p>
            </div>
            </div>
            <div className='project-3'>
                <div className='image-container'>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*-_RZQUIVlitKZ8-PaD_AcQ.jpeg" alt="not found"/>
                </div>
                <div className='project-description'>
                    <h5>To-Do-List</h5>
                    <p>Developed a To-Do application using react, node, PostgreSQL</p>
                </div>
            </div>
        </div>
        
        <div className='contact-container' id="contact">
        <h3>Let's Connect</h3> 
            <div className='contact-flex-div'>
                <div className='imageContainer'>
                    <img src="https://img.freepik.com/premium-photo/lets-join-forces-become-best-closeup-shot-two-unrecognizable-businesspeople-shaking-hands-office_590464-9660.jpg" alt="not found"/>
                </div>
                <div className='contact-form'>
                    <div className="name-div">
                    <div>
                        <label htmlFor='name'>Your Name</label>
                        <input type="text" placeholder='Enter your name' onChange={handleNameChange} value={name} />
                    </div>
                    <div>
                        <label htmlFor='number'>Your Number</label>
                        <input type="number" placeholder='Enter your number' onChange={handleNumberChange} value={number}/>
                    </div>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email" placeholder='Enter your email' onChange={handleEmailChange} value={email}/>
                    </div>
                    <div>
                        <label htmlFor='text'>Message</label>
                        <textarea rows={3} placeholder='Enter your message' onChange={handleMessageChange} value={message}></textarea>
                    </div>
                    <button type="button" onClick={handleClick}>Send Message</button>
                    {error && <div style={{ color: 'red',marginTop:"10px",textAlign:"center" }}>{error}</div>}
                    {resultVisible &&
                        <div style={{
                        backgroundColor: "rgb(25 27 30 )",
                        color: '#0ef',
                        padding: '8px',
                        borderRadius: '4px',
                        boxShadow: '0 0 10px rgba(0, 0, 10px #0ef)',
                        marginTop:"20px",
                        marginLeft:"10px",
                        width:"100%"
                }}>
                     <p className='resultMessage'>{result}</p>
                </div>
            }    
                </div>
            </div>

        </div>
        <div className='footer'>
            <div className="social-icon">
                <a href="http://www.linkedin.com/in/shyamsunder-sattu-8b9926256"><FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" /></a>
                <a href="https://www.instagram.com/_mr_nani_cruzz" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon-instagram" /></a>
                <a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} className="icon-twitter" /></a>
                <a href="https://wa.me/+919885340110" target="_blank"><FontAwesomeIcon icon={faWhatsapp}  className="icon-whatsapp"/></a>
            </div>
            <div>
                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#aboutMeContainer">About Me</a></li>
                    <li><a href="#">Need Help ?</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
        </div>
        </div>
        
    </div>
  )
}
