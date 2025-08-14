import styled from "styled-components";

export const RecentProjectContainer = styled.div`
    min-height: 200px;
`;

export const Image = styled.img`
    width: 80%;
    margin: 50px auto 0px auto;
`;

export const ImageLink = styled.a`
  color: rgba(51, 51, 51, 0.5);

  &:hover {
        color: rgba(0, 150, 70, 1);
        cursor: pointer;
    }
`;
