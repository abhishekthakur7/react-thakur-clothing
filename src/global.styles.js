import { createGlobalStyle } from 'styled-components';

const GlobalSyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 0px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalSyle;