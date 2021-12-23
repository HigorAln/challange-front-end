import { Button } from "../../styles/components/Button";
import { IReponseEnterprises } from "../../types/Enterprises"
import { Body } from './Body'
import { EnterprisesItem } from './EnterprisesItem';
import { Dispatch, SetStateAction, useState } from 'react';

type BodyProps = {
  enterprises: IReponseEnterprises[],
  nextValue: number;
  setNextValue: Dispatch<SetStateAction<number>>;
  button: boolean;
}

export function BodyComponent({enterprises, nextValue, setNextValue, button}: BodyProps){
  function handleChangeValue(){
    setNextValue(nextValue+1)
  }


  return(
    <Body>
      {enterprises.map(element => (
        <EnterprisesItem key={element.id} enterprises={element}/>
      ))}
      {button && (
        <Button isWidth onClick={handleChangeValue} >Carregar mais</Button>
        )}
    </Body>
  )
}