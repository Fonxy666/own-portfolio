import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: auto;
  width: 60vw;
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
`;

export const Content = styled.div`
  padding: 90px;
  width: 100%;
  object-position: center;
  border-radius: 10px;
  background-color: white;
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

export const ContentForAboutMe = styled.div`
  padding: 90px;
  width: 100%;
  object-position: center;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, grey 20%, white 50px);
`;
