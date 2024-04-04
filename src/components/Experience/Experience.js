import './Experience.css';
import { BioDiv, OuterDiv, PicDiv, SkillButton, SkillsContainer } from '../../utilities/Styled';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const TechUsedPerExperience = {
    relaymile: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Python Flask', 'Figma', 'GitHub'],
    codex: ['ReactJS', 'GitHub', 'Cypress.io', 'Zepplin']
}

export default function Experience() {
    return (
        <OuterDiv $bgColor = "black" className = 'experience-outer' $columnChange = {1000} $minHeight = {73}>
            <PicDiv $h1Color = "white" $columnChange = {1000}>
                <AnimatedOnScroll animationIn = "fadeInLeft">
                    <h1>My Experience</h1>
                </AnimatedOnScroll>
            </PicDiv>
            <BioDiv $fontColor = "white" $columnChange = {1000}>
                {/* first experience */}
                <div className = "head-container">
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {100}>
                        <p className = "headline">Front-End Developer Intern, Relaymile</p>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {500}>
                        <p className = "date">Mar 2021 - Jun 2021</p>
                    </AnimatedOnScroll>
                </div>
                
                <ul>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {600}>
                        <li>Engineered 5 web pages to have an appealing responsive styling for all desktop and mobile screen sizes.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {650}>
                        <li>Created a collapsible messaging component on the front-end side of the project by using React.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {700}>
                        <li>Implemented APIs that support the features available for the messaging component by using Python Flask.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {750}>
                        <li>Integrated floating clickable messaging icon in the notification bar to make messaging features available and accessible across all
                        the company’s web pages by using React.</li>
                    </AnimatedOnScroll>
                </ul>
                <SkillsContainer>
                    {
                        TechUsedPerExperience['relaymile'].map((skill, index) => {
                            return (
                                <AnimatedOnScroll animationIn = "fadeInRightBig" animationInDelay = {600 + (index * 50)}>
                                    <SkillButton>
                                        {skill}
                                    </SkillButton>
                                </AnimatedOnScroll>);
                        })
                    }
                </SkillsContainer>
                

                {/* second experience */}
                <div className = "head-container">
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {100}>
                        <p className = "headline">Front-End Developer Intern, Telkom Indonesia</p>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {500}>
                        <p className = "date">Jun 2019 - Sep 2019</p>
                    </AnimatedOnScroll>
                </div>
                <ul>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {600}>
                        <li>Designed web pages for human resources team internal tool to manage applicants that applied to specific jobs by using Zepplin.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {650}>
                        <li>Created reusable components for buttons, search bar, header, footer, navigation-bar by using ReactJS and MaterialUI for its styling.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {700}>
                        <li>Re-engineered search functionality and state management for showing top applicants' names accurately by using React and Redux.</li>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn = "fadeInRight" animationInDelay = {750}>
                    <li>Integrated end-to-end testing for authentication process and applicants search functionality by using Cypress.io.</li>
                    </AnimatedOnScroll>
                </ul>
                <SkillsContainer>
                    {
                        TechUsedPerExperience['codex'].map((skill, index) => {
                            return (
                                <AnimatedOnScroll animationIn = "fadeInRightBig" animationInDelay = {600 + (index * 50)}>
                                    <SkillButton>
                                        {skill}
                                    </SkillButton>
                                </AnimatedOnScroll>);
                        })
                    }
                </SkillsContainer>
            </BioDiv>
        </OuterDiv>
    );
}