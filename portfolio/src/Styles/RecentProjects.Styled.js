import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 45vw;
`;

export const CarouselContainer = styled.div`
    margin: auto;
    width: 15vw;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 50vw !important;
    };
    @media only screen and (min-width: 480px) and (max-width: 960px) {
        width: 65vw;
    };
    @media only screen and (max-width: 1200px) {
        width: 35vw;
    };
`;

export const ImageContainer = styled.div`
    width: 100% !important;
    height: 100% !important;
    border-radius: 50% !important;
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 25%;
    object-position: center;
`;

export const ImageLink = styled.a`
    text-decoration: none;
    color: #FAF9F6;
`;
  
export const ImageLinkContainer = styled.div`
    width: 100%;
    background-color: rgba(128, 128, 128, 0.75) !important;
    text-align: center;
    left: 0px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        padding: 30px 0px 30px 0px;
        font-size: 20px;
    }
    @media only screen and (min-width: 480px) and (max-width: 720px) {
        padding: 30px 0px 30px 0px;
        font-size: 20px;
    }
    @media only screen and (min-width: 720px) and (max-width: 1200px) {
        padding: 20px 0px 30px 0px;
        font-size: 20px;
    };
`;
