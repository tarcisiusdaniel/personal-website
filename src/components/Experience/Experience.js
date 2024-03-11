import './Experience.css';
import { BioDiv, InfoDiv, OuterDiv, PicDiv, SkillButton, SkillsContainer } from '../../utilities/Styled';

const TechUsedPerExperience = {
    relaymile: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Python Flask', 'Figma', 'GitHub'],
    codex: ['ReactJS', 'GitHub', 'Cypress.io', 'Zepplin']
}

export default function Experience() {
    return (
        <OuterDiv $bgColor = "black" className = 'experience-outer'>
            <PicDiv $h1Color = "white">
                <h1>My Experience</h1>
            </PicDiv>
            <BioDiv $fontColor = "white">
                {/* first experience */}
                <div className = "head-container">
                    <p className = "headline">Front-End Developer Intern, Relaymile</p>
                    <p className = "date">Mar 2021 - June 2021</p>
                </div>
                
                <ul>
                    <li>Engineered 5 web pages to have an appealing responsive styling for all desktop and mobile screen sizes.</li>
                    <li>Created a collapsible messaging component on the front-end side of the project by using React.</li>
                    <li>Implemented APIs that support the features available for the messaging component by using Python Flask.</li>
                    <li>Integrated floating clickable messaging icon in the notification bar to make messaging features available and accessible across all
the                     company’s web pages by using React.</li>
                </ul>
                <SkillsContainer>
                    {
                        TechUsedPerExperience['relaymile'].map((skill, index) => {
                            return (<SkillButton>{skill}</SkillButton>);
                        })
                    }
                </SkillsContainer>
                

                {/* second experience */}
                <div className = "head-container">
                    <p className = "headline">Front-End Developer Intern, Telkom Indonesia</p>
                    <p className = "date">June 2019 - Sept 2019</p>
                </div>
                <ul>
                    <li>Designed web pages for human resources team internal tool to manage applicants that applied to specific jobs by using Zepplin.</li>
                    <li>Created reusable components for buttons, search bar, header, footer, navigation-bar by using ReactJS and MaterialUI for its styling.</li>
                    <li>Re-engineered search functionality and state management for showing top applicants' names accurately by using React and Redux.</li>
                    <li>Integrated end-to-end testing for authentication process and applicants search functionality by using Cypress.io.</li>
                </ul>
                <SkillsContainer>
                    {
                        TechUsedPerExperience['codex'].map((skill, index) => {
                            return (<SkillButton>{skill}</SkillButton>);
                        })
                    }
                </SkillsContainer>
            </BioDiv>
        </OuterDiv>
    );
}