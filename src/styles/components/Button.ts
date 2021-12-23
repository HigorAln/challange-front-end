import styles from 'styled-components'

interface ButtonProps {
  isWidth?: boolean;
}

export const Button = styles.button<ButtonProps>`
  width: ${props => props.isWidth ? "195px" : "185px" };
  padding: 10px 40px;
  background-Color: var(--primary);
  border-radius: 71px;
  color: white;
  font-size: 16px;
  font-family: 'Inter';
  border:0;
  display:flex;
  justify-content: center;
  font-weight: bold;
  &:hover{
    filter: opacity(0.8);
  }

  @media screen and (max-width:600px){
    font-size:14px;
    padding: 10px 20px;
    width: ${props => props.isWidth ? "195px" : "150px" };
  }
  
}
`