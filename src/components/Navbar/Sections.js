import ResumePDF from "../../assets/Tarcisius's Resume.docx.pdf";
import styled from 'styled-components';

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
        border-radius: ${(props) => props.$parentSection === "modal" ? "0" : "50px"};
        border-width: 0;
        background: #e1ede9;
        color: black;
    }
`

export default function Sections({className, parentSection}) {
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
        <ul className = {className}>
            <li>
                <NavButton onClick = {() => scrollToSection('intro-outer')} $parentSection = {parentSection}>Home</NavButton>
            </li>
            <li>
                <NavButton onClick = {() => scrollToSection('about-outer')} $parentSection = {parentSection}>About</NavButton>
            </li>
            <li>
                <NavButton onClick = {() => scrollToSection('skills-outer')} $parentSection = {parentSection}>Skills</NavButton>
            </li>
            <li>
                <NavButton onClick = {() => scrollToSection('experience-outer')} $parentSection = {parentSection}>Experience</NavButton>
            </li>
            <li>
                <NavButton onClick = {() => scrollToSection('projects-outer')} $parentSection = {parentSection}>Projects</NavButton>
            </li>
            {/* The dark or bright mode switch */}
            <li>
                <a href={ResumePDF} download = "Tarcisius_CV.pdf">
                    <NavButton $parentSection = {parentSection}>
                        Download CV
                    </NavButton>
                </a>
            </li>
        </ul>
    );
}