import ProfilePicture from '../../assets/IMG_2037.PNG';
import { TiLocationOutline } from "react-icons/ti";
import { FcOk } from "react-icons/fc";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { OuterDiv } from '../../utilities/Styled';
import './Introduction.css';

export default function Introduction () {
    return (
        <OuterDiv $bg = 'white' className = 'intro-outer' $columnChange = {700} $minHeight = {31}>
            <div className = "intro-bio">
                <h1>Hi, I'm Daniel😁👋</h1><br/>
                <p>
                    A front end developer passionate in building accessible and user friendly website.
                </p>
                <div className = "intro-info">
                    <section className = "status">
                        <span><TiLocationOutline /> Seattle, Washington, United States</span>
                        <span><FcOk /> Available for new projects</span>
                    </section>
                    <section className = "links">
                        <span>
                            <a href = "https://www.linkedin.com/in/tarcisiusdaniel/" target="_blank" rel="noreferrer">
                                <AiFillLinkedin size={'2.5rem'} className = "links-icon"/>
                            </a>
                        </span>
                        <span>
                            <a href = "https://github.com/tarcisiusdaniel" target="_blank" rel="noreferrer">
                                <AiFillGithub size={'2.5rem'} className = "links-icon"/>        
                            </a> 
                        </span>
                    </section>
                </div>
            </div>
            <div className = "profile-picture-section">
                <img src = {ProfilePicture} className = "profile-picture" alt = "pictures for introduction"/>
                <div className = "backshadow-gray">
                    <div className = "backshadow-white" />
                </div>
            </div>
        </OuterDiv>  
    )
}