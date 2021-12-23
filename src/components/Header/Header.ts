import styles from "styled-components"

export const Header = styles.header`
  height: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;
  margin-bottom: 30px;

  @media screen and (max-width:1000px){
    padding-left:50px;
    padding-right: 50px;
    
  }
  @media screen and (max-width:600px){
    padding-left:20px;
    padding-right: 20px;
  }

  h1{
    font-family: "Montserrat";
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    color: var(--primary);
    cursor: pointer;
    @media screen and (max-width:600px){
      font-size: 16px;  
    }
  }
`
