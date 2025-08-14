import styled from "styled-components";

export const SectionContainer = styled.div`
    margin: auto;
    width: 60%;
    @media only screen and (max-width: 1200px) {
        margin: 0px !important;
        width: 100% !important;
    };
`;

export const Section = styled.div`
    border-radius: 10px;
    width: 100%;
    object-position: center;
`;

export const Title = styled.div` 
    margin-top: 70px;
    margin-bottom: 30px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-variant: small-caps;
    font-size: 25px;
    padding: 10px;
    border-radius: 10px;
    @media only screen and (max-width: 480px) {
        text-align: left;
        font-size: 20px;
    };
`;
export const StyledButton = styled.button`
    background-color: rgba(0, 100, 50, 0.9);
    color: rgba(220, 240, 230, 1);
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: rgba(0, 150, 70, 1);
        color: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    &:active {
        transform: translateY(0);
        box-shadow: none;
    }
`;

export const IconLink = styled.a`
    display: inline-block;
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;

    svg {
        width: 100%;
        height: 100%;
        fill: rgba(0, 100, 50, 0.9);
        transition: fill 0.3s ease, transform 0.3s ease;
    }

    &:hover svg {
        fill: rgba(0, 150, 70, 1);
        transform: scale(1.1);
    }
`;

export const H5 = styled.h5` 
    color: rgba(0, 100, 50, 1);
`;

export const GreenP = styled.p`
    color: rgba(0, 100, 50, 1);
`;

export const OpinionsP = styled.p`
    font-family: 'Dancing Script', cursive;
    color: rgba(0, 100, 50, 0.9);
    transition: color 0.3s ease;

    &:hover {
        color: rgba(0, 150, 70, 1);
        cursor: pointer;
    }
`;

export const Content = styled.div`
    padding: 90px;
    width: 100%;
    object-position: center;
    border-radius: 10px;
    background-color: rgba(220, 240, 230, 1);
    @media only screen and (max-width: 480px) {
        padding: 10px;
    };
`;

export const Nav = styled.nav`
    height: 90px;
    margin: 10px;
    background-color: rgba(51, 51, 51, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    text-align: center;
    color: white !important;
    font-weight: bold;
    font-variant: small-caps;
    font-size: 25px;
    padding: 10px;
`;

export const Footer = styled.footer`
    padding: 30px 0px 30px 0px;
    background-color: grey;
`;

export const StyledUl = styled.ul`
    @media only screen and (max-width: 991px) {
        background-color: rgba(0, 0, 0, 0.7);
        width: 30%;
        float: right;
        backdrop-filter: blur(2600px);
        border-radius: 25px;
        font-size: 15px;
    };
`;
