import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        background-color:${({ theme }) => theme.colors.gray[2]}
    }
`;

export default GlobalStyle;
