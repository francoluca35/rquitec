import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root{
      
        --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color:#11111A;
        --background-about-color:#212121;
        --border-color:#2e344e;
        --background-light-color:#F1F1F1;
        --white-color:#FFF;
        --font-light-color:#a4acc4;
        --font-dark-color:#313131;
        --font-dark-color-two:#151515;
        --sidebar-dark-color:#111111
        --btn-gnrl-color: #F39F5A;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Poppins', 'Nunito', sans-serif;
        
    }
    body{
        background-color:var(--background-dark-color);
        overflow-x:hidden;
    }
`;
export default GlobalStyle;