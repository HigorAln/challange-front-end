import styles from 'styled-components';

export const HeaderStyle = styles.header`
  height: 80px;
  width:100%;
  padding-left: 157px;
  padding-right 157px;
  display:flex;
  align-items: center;
  margin-bottom: 48px;
  background-color: white;

  @media screen and (max-width:1000px){
    padding-left: 50px;
  }
  @media screen and (max-width:680px){
    padding-right:0;
  }
  @media screen and (max-width:450px){
    padding-left:15px;
  }

  h1{
    margin-left: 24px;
    font-family: "Montserrat";
    font-weight: bold;
    font-size: 24px;
    color: var(--primary);

    @media screen and (max-width:600px){
      font-size:18px;
    }
    @media screen and (max-width:450px){
      font-size:15px;
    }
  }
`

export const MainRegisterStyle = styles.main`
  width: 100%;
  display:flex;
  justify-content: center;

  form{
    width: 622px;
    border-radius: 8px;
    background-color: white;
    padding:30px;
    display:flex;
    flex-direction: column;
    align-items:center;

    @media screen and (max-width:450px){
      padding-left:15px;
      padding-right:15px;
    }

    h1{
      font-family: 'Inter';
      font-weight: 700;
      font-size: 18px;
      color: var(--text);
      margin-bottom:35px;
      align-self: start;
    }

    section{
      margin-bottom:20px;
      align-self: start;
      font-family: 'Inter';
      font-size:14px;
      line-height:130%;
      color:var(--text);
    }

    input, select{
      background-color: transparent;
      outline: none;
      width:100%;
      border:0;
      border-bottom: 2px solid #BBB8D9;
      margin-bottom:35px;
      padding: 10px 0px;
      font-family: "Inter";
      font-size: 16px;
      color: var(--text);
    }
  }
`


export const SelectLancamento = styles.select`
`