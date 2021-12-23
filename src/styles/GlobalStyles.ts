import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  :root{
    --primary: #4F46BB;
    --text: #302E45;
    --secondary: #6D6C7B;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Inter";
  }
  body{
    background-color:#E5E5E5;
  }
  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  button{
    cursor: pointer;
  }
  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`