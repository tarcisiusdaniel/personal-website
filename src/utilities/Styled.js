import styled from "styled-components";

export const OuterDiv = styled.div`
    background: ${(props) => props.$bgColor};
    display: flex;
    flex-direction: row;
    padding: 8rem 5%;
    padding-left: 4rem;
    height: ${(props) => props.$minHeight}vh;
    min-height: fit-content;
    overflow-y: hidden;

    @media only screen and (max-width: ${(props) => props.$columnChange}px) {
        padding-top: 4rem;
        flex-direction: column;
        min-height: 80vh;
        height: 100%;
    }
`

export const BioDiv = styled.div`
    width: 70%;
    
    @media only screen and (max-width: ${({$columnChange}) => $columnChange}px) {
        width: 93%;
    }

    & h1 {
        color: ${({$fontColor}) => $fontColor};
    }

    & p {
        color: ${({$fontColor}) => $fontColor};
    }

    & ul li {
        color: ${({$fontColor}) => $fontColor};
    }

    & p.headline {
        font-size: 25px;
    }

    .animate-right {
        animation: slidein-vertical 0.5s linear calc(1);
    }

    @keyframes slidein-vertical {
    from {
        transform: translateX(10rem);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`

export const InfoDiv = styled.div`
    display: flex;
`

export const PicDiv = styled.div`
    width: 30%;
    padding-right: 1rem;

    @media only screen and (max-width: ${({$columnChange}) => $columnChange}px) {
        width: 100%;
    }

    & h1 {
        color: ${({$h1Color}) => $h1Color};
        align-self: center;
        font-size: 50px;
    }

    .animate-left {
        animation: slidein-horizontal 0.5s linear calc(1);
    }

    @keyframes slidein-horizontal {
    from {
        transform: translateY(5rem);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`

export const SkillButton = styled.button`
    width: 100px;
    height: 2rem;
    border-radius: 50px;
    border-width: 1px;
    border-color: white;
    background: transparent;
    color: white;
    margin-right: 2rem;
    margin-bottom: 1rem;

    &:hover {
        background: black;
        color: white;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`