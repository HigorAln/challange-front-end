import styles from 'styled-components';

export const Body = styles.main`
  margin-top: 85px;
  width:100%;
  display: flex;
  flex-direction: column;
  padding-bottom:50px;

  @media screen and (max-width:500px){
    margin-top:50px
  }

  >button{
    align-self: center;
  }
`

export const EnterprisesStyle = styles.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
   height:114px;
   background-color: #fff;
   border-radius: 8px;
   padding:32px;
   margin-bottom:32px;

  @media screen and (max-width:1000px){
    padding:16px;
  }
  @media screen and (max-width:550px){
    height:160px;
    flex-direction: column;
    justify-content:center;
  }


  span{
    display: flex;
    flex-direction: column;

    h2{
      font-family: 'Inter';
      font-weight: bold;
      font-size: 20px;
      line-height:100%;
      color: var(--text);
      margin: 16px 0;

      @media screen and (max-width:800px){
        font-size:16px;
      }
    }
    
    p{
      font-family: 'inter';
      color: var(--secondary);
      font-size:14px;
      margin-bottom: 16px;

      @media screen and (max-width:800px){
        font-size:12px;
      }
    }
  }

  div{
    display: flex;
  }
`

export const ButtonEnterprises = styles.button`
  width: 113px;
  padding: 8px 0px;
  border:1px solid #8E85FF;
  border-radius: 71px;
  margin: 0 8px;
  background-color: transparent;
  transition: all 0.2s; 

  @media screen and (max-width:1000px){
    font-size:12px;
    width: 80px;
  }

  &:hover{
    opacity: 0.7;
  }
`