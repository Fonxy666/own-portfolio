import React from "react";
import { TextContainer } from "../../Styles/HomePage.Styled";
import Layout from "../../Layout/Layout";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import RecentProjects from "../RecentProjects";

const HomePage = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Layout/>
      </nav>

      <TextContainer>
        <div>
          <AboutMe/>
        </div>
        <div>
          <RecentProjects/>
        </div>
        <div>
          <Contact/>
        </div>
      </TextContainer>

    </div>
  );
};

export default HomePage;
