import styled from "styled-components";

export const ImageCircle = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-left: 200px;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Text1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const Image1 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

export const Text2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

export const Image2 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;

export const Text3 = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

export const Image3 = styled.div`
  grid-area: 3 / 2 / 4 / 3;
`;