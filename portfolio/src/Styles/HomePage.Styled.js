import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: auto;
  width: 60vw;
`;

export const Section = styled.div`
  border-radius: 10px;
  background-color: #f5f4e9;
  width: 100%;
  object-position: center;
`;

export const Title = styled.div` 
  border: 2px solid black;
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
  border-bottom: solid black 2px;
  background-color: #B5AFA6;
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

export const ContentForImage = styled.div`
  padding: 90px;
  width: 100%;
  object-position: center;
  border-radius: 10px;
  background-color: white;
  background: linear-gradient(to bottom, #B5AFA6 20%, white 50px);
`;
