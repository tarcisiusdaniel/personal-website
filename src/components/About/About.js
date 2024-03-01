import './About.css';
import { BioDiv, InfoDiv, OuterDiv, PicDiv } from '../../utilities/Styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Nsc from '../../assets/nsc.png';
import Uwb from '../../assets/uwb.png';
import Neu from '../../assets/neu.png';

const schools = [Nsc, Uwb, Neu];

export default function About() {
    

    return (
        <div className = "about-outer">
            <Slide>
                {/* first slide, talk about yourself */}
                <OuterDiv>
                    
                </OuterDiv>
                {/* second slide, talk about studies */}
                <OuterDiv className = "about-outer">
                    <InfoDiv>
                        <PicDiv>
                            {
                                schools.map((school, index) => {
                                    return (
                                        <img src = {school} alt = "school image" className = {"school-pic" + (index % 2 === 0 ? " left" : " right")}/>
                                    )

                                })
                            }
                        </PicDiv>
                        <BioDiv>
                            <h1>My studies📚</h1>
                            <p>
                                I have done a 6-year span of study, which includes the following:
                                <ul>
                                    <li>Associate's Degree (Sep 2016 - Jun 2018): General studies, no concentration</li>
                                    <li>Bachelor's Degree (Sep 2018 - Dec 2020) : concentrated in Software Engineering</li>
                                    <li>Master's Degree (Jan 2022 - Jun 2023)   : concentrated in Software Engineering</li>
                                </ul>
                                I went to North Seattle College for my Associate's, University of Washington - Bothell campus for Bachelor's, and Northeastern University for Master's.
                                <br /><br />
                                Through all the 6 years, I have done several classes and tried different Software applications.
                                I focused on Web Development, as most of my projects are Web Development related.
                            </p>
                        </BioDiv>
                    </InfoDiv>
                </OuterDiv>
                {/* third slide, talk about hobbies */}
                <OuterDiv>

                </OuterDiv>
            </Slide>
        </div>
    );
}