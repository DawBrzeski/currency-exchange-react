import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing:inherit;
}
body{
    font-family: 'Ubuntu', sans-serif;
    margin: auto;
    text-align: center;
    min-width: none;
    background-image: linear-gradient(to top, rgba(255, 192, 203, 0.644) 0%, rgba(247, 150, 187, 0.822) 100%);
    background-repeat: no-repeat;
    background-color: #eee;
    background-size: 100% 600px;
}

`;