import TextingerImage from "../../Images/textinger.jpg";
import FlappyBirdImage from "../../Images/flappy_bird.jpg";
import { Image, RecentProjectContainer, ImageLink } from "../../Styles/RecentProjects.Styled";
import { H5, GreenP } from "../../Styles/HomePage.Styled";

const RecentProjects = () => {

    return (
        <RecentProjectContainer>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="container text-center">
                            <div className="row">
                                <div>
                                    <H5>Textinger</H5>
                                    <GreenP>Textinger is a chat application built with .NET, Angular, PostgreSQL.</GreenP>
                                    <GreenP>The aim was to build a secure, fast chat application.</GreenP>
                                    <GreenP>The application is production ready, check this out on github:
                                        <ImageLink href="https://github.com/Fonxy666/texting-application" target="_blank"> Textinger</ImageLink>
                                    </GreenP>
                                </div>
                                <div className="col">
                                    <Image src={TextingerImage} className="d-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="container text-center">
                            <div className="row">
                                <div>
                                    <H5>Flappy Bird AI</H5>
                                    <GreenP>This is a Flappy Bird clone game, which also includes an AI mode.</GreenP>
                                    <GreenP>The game was written in Python using the Pygame framework.</GreenP>
                                    <GreenP>Check it out on GitHub, or fork the repository to try it yourself:
                                        <ImageLink href="https://github.com/Fonxy666/FlappyBirdAi" target="_blank"> Flappy Bird</ImageLink>
                                    </GreenP>
                                </div>
                                <div className="col">
                                    <Image src={FlappyBirdImage} className="d-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </RecentProjectContainer>
    );
};

export default RecentProjects;
