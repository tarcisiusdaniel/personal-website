import ReactLogo from '../../assets/logo192.png';
import './Navbar.css';
import ResumePDF from "../../assets/Tarcisius's Resume.docx.pdf";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import styled from 'styled-components';
import React from 'react';

const NavButton = styled.button`
    & {
        width: 100%;
        height: 2rem;
        border-radius: 50px;
        border-width: 0;
        background: transparent;
        color: white;
    }

    &:hover {
        border-radius: 50px;
        border-width: 0;
        background: #e1ede9;
        color: black;
    }
`

export default function Navbar() {
    function scrollToSection(elementClass) {
        let section = document.getElementsByClassName(elementClass);
        if (section) {
            console.log(section[0].offsetTop);
            const offsetTop = section[0].offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
                
            });
        }
    }
    return (
        <div className = "navbar" style = {{backgroundColor: 'black'}}>
            <img src = {ReactLogo} alt = "Website Logo" className = "logo"/>
            <ul className = "shortcuts-options">
                <li>
                    <NavButton onClick = {() => scrollToSection('intro-outer')}>Home</NavButton>
                </li>
                <li>
                    <NavButton onClick = {() => scrollToSection('about-outer')}>About</NavButton>
                </li>
                {/* <li>
                    <NavButton onClick = {() => scrollToSection('skills-outer')}>Skills</NavButton>
                </li> */}
                <li>
                    <NavButton onClick = {() => scrollToSection('experience-outer')}>Experience</NavButton>
                </li>
                {/* <li>
                    <NavButton onClick = {() => scrollToSection('projects-outer')}>Projects</NavButton>
                </li> */}
                {/* The dark or bright mode switch */}
                <li>
                    <a href={ResumePDF} download = "Tarcisius_CV.pdf">
                        <NavButton>
                            Download CV
                        </NavButton>
                    </a>
                </li>
            </ul>   
        </div>
    );
}