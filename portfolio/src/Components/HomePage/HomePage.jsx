import React from "react";
import { SectionContainer, Title, Section, Content, ContentForImage } from "../../Styles/HomePage.Styled";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import RecentProjects from "../RecentProjects";

const HomePage = () => {

  return (
    <div>
      <SectionContainer>
        <Section id="0">
          <Title>
            About Me
          </Title>
          <ContentForImage>
            <AboutMe/>
          </ContentForImage>
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

      <footer className="text-center bg-body-tertiary">
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2023 Copyright: Viktor Poszt
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
