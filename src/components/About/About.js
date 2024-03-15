import './About.css';
import { BioDiv, InfoDiv, OuterDiv, PicDiv } from '../../utilities/Styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Nsc from '../../assets/nsc.png';
import Uwb from '../../assets/uwb.png';
import Neu from '../../assets/neu.png';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const schools = [Nsc, Uwb, Neu];

export default function About() {
    return (
        <OuterDiv className = "about-outer" $bgColor = "black" $columnChange = {600} $minHeight = {31}>
            <PicDiv $h1Color = "white" $columnChange = {600}>
                {/* {
                    schools.map((school, index) => {
                        return (
                            <img src = {school} alt = "school logo" className = {"school-pic" + (index % 2 === 0 ? " left" : " right")}/>
                        )

                    })
                } */}
                <AnimatedOnScroll 
                    animationIn = "fadeInDownBig" 
                    animationInDuration = {500}>
                    <h1>About Me</h1>
                </AnimatedOnScroll>
            </PicDiv>
            <BioDiv $fontColor = "white" $columnChange = {600}>
                <AnimatedOnScroll animationIn = "fadeInDownBig" animationInDuration = {800}>
                    <p className = "headline">
                        I am a Recent Graduate from Northeastern University. <br/>
                        I have experience in Web Development (Front-End focused).<br/>
                    </p>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                    animationIn = "fadeInDownBig" 
                    animationInDuration = {800}
                >
                    <p>
                        {/* I have done a 6-year span of study, which includes the following:
                        <ul>
                            <li>Associate's Degree (Sep 2016 - Jun 2018): General studies, no concentration</li>
                            <li>Bachelor's Degree (Sep 2018 - Dec 2020) : concentrated in Software Engineering</li>
                            <li>Master's Degree (Jan 2022 - Jun 2023)   : concentrated in Software Engineering</li>
                        </ul>
                        I went to North Seattle College for my Associate's, University of Washington - Bothell campus for Bachelor's, and Northeastern University for Master's.
                        <br /><br />
                        Through all the 6 years, I have done several classes and tried different Software applications.
                        I focused on Web Development, as most of my projects are Web Development related. */}
                        I am a Recent Graduate from Northeastern University seeking for Software Engineering position.
                        I am focusing on Full Stack Development (React.js, Node.js, Express.js, and MongoDB) leaning more to Front End.
                        I am passionate to create exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
                        I also like to solve problems using skills in data structure and algorithms.
                        I have been creating several websites and doing Software-related projects for 1-2 years.
                        Outside programming, I like to play basketball and go to the gym.
                        I want to learn more about new things in Software to improve my skill.
                    </p>
                </AnimatedOnScroll>
            </BioDiv>
        </OuterDiv>
    );
}