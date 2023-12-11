import React from "react";
import { HomeContainer, SectionContainer, Title, Section, Content, Nav, Footer } from "../../Styles/HomePage.Styled";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import RecentProjects from "../RecentProjects";

const HomePage = () => {

  return (
    <HomeContainer>
      <SectionContainer>
        <Section id="0">
          <Title>
            About Me
          </Title>
          <Content>
            <AboutMe/>
          </Content>
        </Section>
        <Section id="1">
          <Title>
            Recent Projects
          </Title>
          <Content>
            <RecentProjects/>
          </Content>
        </Section>
        <Section id="2">
          <Title>
            Contact Me
          </Title>
          <Content>
            <Contact/>
          </Content>
        </Section>
      </SectionContainer>

      <Footer>
        
      </Footer>
    </HomeContainer>
  );
};

export default HomePage;
