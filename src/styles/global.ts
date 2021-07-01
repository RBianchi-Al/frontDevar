import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
   :root{
    --background:#FCFCFC;
       --red: #E52e4d;
       --blue: #8F80FF;

       --blue-light: #6933ff;

       --text-title:#5E2EE5;
       --text-primary:#1C0C3F;
       --text-subtitle: #25CBD3;
       --text-button: #67D42D;
       --text-buttondois: #24A22B;

       --shape: #ffffff;
       --clicked: #FCFCFC;

   }
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button {
       font-family: "Poppins", sans-serif;
       font-weight: 400;
   }
    h1, h2, h3, h4, h5, h6, strong{
            font-weight: 600;
    }
        html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }


    body{
        background: var(--shape);
        
    }
    
    button {
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`