import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    body{
        box-sizing: border-box;
        background-color:${({ theme }) => theme.colors.gray[2]}
    }
    html{
        @media all and (min-width:1024px) {
            font-size:16px
        }
        font-size: 9px;
    }
    a{
        text-decoration: none;
        color:inherit;
    }
`;

export default GlobalStyle;
