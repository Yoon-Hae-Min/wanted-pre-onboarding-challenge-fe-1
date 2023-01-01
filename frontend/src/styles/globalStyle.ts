import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
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
        font-size: 20px;
    }
`;

export default GlobalStyle;
