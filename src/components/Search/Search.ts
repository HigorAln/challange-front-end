import styles from 'styled-components';


export const Search = styles.input`
  background-color: transparent;
  border:0;
  outline: none;
  width: 100%;
  font-family: 'Inter'
  font-size:16px;
  
  &::placeholder{
    color: var(--text);
  }
`
export const LabelSearch = styles.label`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 2px solid #BBB8D9;
  display: flex;
`