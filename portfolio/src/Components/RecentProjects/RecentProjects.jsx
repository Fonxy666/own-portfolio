import React from "react";
import ConstructImage from "../../Images/construct.jpg";
import EmployeeTableImage from "../../Images/employee_table.jpg";
import SolarWatchImage from "../../Images/solarwatch.jpg";
import { Image, ImageContainer, ImageLink, ImageLinkContainer, CarouselContainer } from "../../Styles/RecentProjects.Styled";

const RecentProjects = () => {

  return (
    <CarouselContainer id="carousel" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <ImageContainer className="carousel-inner">
        <div className="carousel-item active">
          <Image src={SolarWatchImage} alt="..."/>
          <ImageLinkContainer className="bg-dark carousel-caption">
            <ImageLink href="https://github.com/CodecoolGlobal/solarwatch-api-1-csharp-Fonxy666" target="_blank" >Solar Watch Application</ImageLink>
          </ImageLinkContainer>
        </div>
        <div className="carousel-item">
          <Image src={EmployeeTableImage} alt="..."/>
          <ImageLinkContainer className="bg-dark carousel-caption">
            <ImageLink href="https://github.com/CodecoolGlobal/the-employee-madness-v2-react-Fonxy666" target="_blank" >Employee Table Application</ImageLink>
          </ImageLinkContainer>
        </div>
        <div className="carousel-item">
          <Image src={ConstructImage} alt="..." />
          <ImageLinkContainer className="bg-dark carousel-caption">
            <ImageLink href="https://github.com/huttnerdavid/codebusters" target="_blank" >Constructor Application</ImageLink>
          </ImageLinkContainer>
        </div>
      </ImageContainer>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </CarouselContainer>
  );
};

export default RecentProjects;
