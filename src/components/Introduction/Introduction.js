import ProfilePicture from '../../assets/IMG_2037.PNG';
import { TiLocationOutline } from "react-icons/ti";
import { FcOk } from "react-icons/fc";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import './Introduction.css';

export default function Introduction () {
    return (
        <div className = "intro-outer">
            <div className = "intro-bio">
                <h1>Hi, I'm Daniel😁👋</h1>
                <p>
                    I am a Recent Master's Graduate from Northeastern University seeking for Software Engineering position.
                    I am focusing on Full Stack Development (React.js and Node.js) leaning more to Front End.
                    I like to create exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                    I also like to solve problems using my skills in data structure and algorithms.
                    I have been creating several websites and doing Software-related projects for 2-3 years (inside and outside of my studies).
                    Regardless, I want to learn more about new things in Software as I have grown fond of it.
                </p>
                <div className = "intro-info">
                    <section className = "status">
                        <span><TiLocationOutline /> Seattle, Washington, United States</span>
                        <span><FcOk /> Available for new projects</span>
                    </section>
                    <section className = "links">
                        <span>
                            <a href = "https://www.linkedin.com/in/tarcisiusdaniel/">
                                <AiFillLinkedin size={'2.5rem'} className = "links-icon"/>
                            </a>
                        </span>
                        <span>
                            <a href = "https://github.com/tarcisiusdaniel" >
                                <AiFillGithub size={'2.5rem'} className = "links-icon"/>        
                            </a> 
                        </span>
                    </section>
                </div>
            </div>
            <div className = "profile-picture-section">
                <img src = {ProfilePicture} className = "profile-picture"/>
                <div className = "backshadow-gray">
                    <div className = "backshadow-white" />
                </div>
            </div>
        </div>  
    )
}