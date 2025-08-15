import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
`;

export const RouterDiv = styled.div`
    position: relative;
    padding-top: 90px;
    background: linear-gradient(to bottom, rgba(51, 51, 51, 1) 5%, rgba(0, 70, 30, 1) 40%, rgba(0, 70, 30, 1) 60%, rgba(51, 51, 51, 1) 100%);
`;