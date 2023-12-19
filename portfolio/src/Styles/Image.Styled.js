import styled from "styled-components";

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
  width: 20vw;
  padding: 10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 70vw;
  };
  @media only screen and (min-width: 480px) and (max-width: 1200px) {
    width: 35vw;
  };
`
