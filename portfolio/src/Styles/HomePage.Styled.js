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
  background-color: grey;
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

export const Content = styled.div`
  padding: 90px;
  width: 100%;
  object-position: center;
  border-radius: 10px;
  background-color: white;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const Nav = styled.nav`
  height: 90px;
  margin: 10px;
  background-color: rgba(128, 128, 128, 0.5);
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
