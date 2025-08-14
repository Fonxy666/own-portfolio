import TextingerImage from "../../Images/textinger.jpg";
import FlappyBirdImage from "../../Images/flappy_bird.jpg";
import { Image, RecentProjectContainer, ImageLink } from "../../Styles/RecentProjects.Styled";
import { H5, GreenP } from "../../Styles/HomePage.Styled";

const RecentProjects = () => {

    return (
        <RecentProjectContainer>
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div class="container text-center">
                            <div class="row">
                                <div>
                                    <H5>Textinger</H5>
                                    <GreenP>Textinger is a chat application built with .NET, Angular, PostgreSQL.</GreenP>
                                    <GreenP>The aim was to build a secure, fast chat application.</GreenP>
                                    <GreenP>The application is production ready, check this out on github:
                                        <ImageLink href="https://github.com/Fonxy666/texting-application" target="_blank"> Textinger</ImageLink>
                                    </GreenP>
                                </div>
                                <div class="col">
                                    <Image src={TextingerImage} className="d-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="container text-center">
                            <div class="row">
                                <div>
                                    <H5>Flappy Bird AI</H5>
                                    <GreenP>This is a Flappy Bird clone game, which also includes an AI mode.</GreenP>
                                    <GreenP>The game was written in Python using the Pygame framework.</GreenP>
                                    <GreenP>Check it out on GitHub, or fork the repository to try it yourself:
                                        <ImageLink href="https://github.com/Fonxy666/FlappyBirdAi" target="_blank"> Flappy Bird</ImageLink>
                                    </GreenP>
                                </div>
                                <div class="col">
                                    <Image src={FlappyBirdImage} className="d-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </RecentProjectContainer>
    );
};

export default RecentProjects;
