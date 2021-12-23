import styles from 'styled-components';


export const Main = styles.div`
  width:100%;
  height: 100%;
  padding-left: 142px;
  padding-right: 160px;
  

  @media screen and (max-width:1050px){
    padding-left: 100px;
    padding-right: 100px;
    
  }
  @media screen and (max-width:630px){
    padding-left: 50px;
    padding-right: 50px;
  }
`