import { OuterDiv, PicDiv, BioDiv } from '../../utilities/Styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Skills.css';

const SkillList = [
    ['Java', 'Python', 'C++'],
    ['JavaScript', 'HTML', 'CSS'], 
    ['Dart', 'SQL']
];

export default function Skills() {
    return (
        <OuterDiv $bg = 'white' className = 'skills-outer' $columnChange = {700} $minHeight = {73}>
            <PicDiv $fontColor = "white">
                <h1>My skills</h1>
            </PicDiv>
            <BioDiv $fontColor = "black">
                <Slide indicators = {true} 
                    duration = {5000000} 
                    transitionDuration={500}
                    >
                    {
                        SkillList.map((skills, index) => {
                            return <div className = "slider-content" key = {index}>
                                {skills.map((skill, ind) => {
                                    return (<div>
                                        
                                    </div>);
                                })}
                            </div>
                        })
                    }
                </Slide>
            </BioDiv>
        </OuterDiv>
    );
}