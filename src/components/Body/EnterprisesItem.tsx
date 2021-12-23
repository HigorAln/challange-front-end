import { ButtonEnterprises, EnterprisesStyle } from "./Body";
import {FaPen} from 'react-icons/fa'
import {FiTrash} from 'react-icons/fi'
import { IReponseEnterprises } from "../../types/Enterprises";
import Link from "next/link";
import axios from "axios";

interface IEnterprisesItemsProps {
  enterprises: IReponseEnterprises
}

const styleIcon = {
  fontSize:'16px',
  color: "4F46BB",
  cursor: `pointer`,
  marginLeft:'5px'
}

export function EnterprisesItem({ enterprises }:IEnterprisesItemsProps){

  async function deleteEnterprises(){
    if(confirm('Do you really want delete this enterprises?')){
      
      await axios.delete(`http://localhost:3001/enterprises/${enterprises.id}`)

      window.location.reload();
      
    }else{
      // TODO FOR NO HAVE NOTHING
    }
  }
  return(
    <EnterprisesStyle>
      <span>
        <h2>
          {enterprises.name} 
          <Link href={`/edit/${enterprises.id}`} passHref>
            <FaPen style={{...styleIcon, marginLeft:'18px'}} /> 
          </Link>
          <FiTrash style={{...styleIcon, marginLeft:"8px"}} onClick={deleteEnterprises}/>
        </h2>
        <p>{enterprises.address.street}, {enterprises.address.number} - {enterprises.address.district}, {enterprises.address.city}</p>
      </span>
      <div>
        <ButtonEnterprises>Lançamento</ButtonEnterprises>
        <ButtonEnterprises>Residencial</ButtonEnterprises>
      </div>
    </EnterprisesStyle>
  )
}