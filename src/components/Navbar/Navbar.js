import ReactLogo from '../../assets/logo192.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "navbar">
            <img src = {ReactLogo} alt = "Website Logo" className = "logo"/>
            <ul className = "shortcuts-options">
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Dark / Light</li>
                <li>Download CV</li>
            </ul>   
        </div>
    );
}