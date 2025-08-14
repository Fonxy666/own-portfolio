import { SectionContainer, Title, Section, Content } from "../../Styles/HomePage.Styled";
import { Picture, PictureContainer } from "../../Styles/Image.Styled";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import RecentProjects from "../RecentProjects";
import ownPicturePng from "../../Images/ownPicturePng.png"

const HomePage = () => {

    return (
        <div>
            <SectionContainer>
                <Section>
                    <PictureContainer>
                        <Picture src={ownPicturePng} alt="Portfolio picture"/>
                    </PictureContainer>
                    <Title id="0">
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
            <footer className="text-center bg-body-tertiary">
                <div className="text-center p-3" style={{backgroundColor: "rgb(45, 45, 45)", color: "white"}}>
                © 2025 Copyright: Viktor Poszt
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
