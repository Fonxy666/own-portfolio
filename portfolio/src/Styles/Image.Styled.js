import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
`;

export const Image = styled.img`
  width: 100%;
  object-position: center;
`;

export const CarouselContainer = styled.div`
  margin: auto;
  width: 15vw;
`;

export const ImageLink = styled.a`
  text-decoration: none;
  color: #FAF9F6;
`;
  
export const ImageLinkContainer = styled.div`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.75) !important;
  text-align: center;
  left: 0px;
`;

export const Picture = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid white;
`;

export const PictureContainer = styled.div`
  width: fit-content;
  margin: auto;
  width: 25%;
  padding: 10px;
`
