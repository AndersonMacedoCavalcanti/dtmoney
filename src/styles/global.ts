import {createGlobalStyle} from 'styled-components'

export const GloablStyle = createGlobalStyle`
  
  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body:#969CB3;
    --shape: #FFFFFF;
    --green: #33CC95
  }
  
  * {
    margin:0;
   padding: 0;
   box-sizing: border-box;
 }
 
  // font-sise: 16px (Desktop)
  html{
    @media(max-width:1080px){
      font-size: 93.75%; //15px usando porcentagem ajuda a questao da acessibilidade do usuario caa ele tenha setado algum padra de tamanho de fonte
    }
    @media(max-width: 720px){
      font-size: 87.5% // 14px
    }
  }  
  
  //REM = 1rem = font-size (16px -(desktop))
  
 body{
   background: var(--background);
   -webkit-font-smoothing: antialiased;
 }
 
 body, input, textarea, button{
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
 }
 
 h1,h2,h3,h4,h5,h6,strong{
   font-weight: 600;
 }
 
 button{
   cursor: pointer;
 }
 
 [disabled]{
   opacity:0.6;
   cursor:not-allowed;
 }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom:0;
    right: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border: 0;

    transition: filter 0.2s linear;

    &:hover{
      filter: brightness(0.6);
    }

  }
 
 
`