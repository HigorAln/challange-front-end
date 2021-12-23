import {IoIosArrowBack} from 'react-icons/io'
import Link from 'next/link'
import { Button } from '../styles/components/Button'
import { HeaderStyle, MainRegisterStyle, SelectLancamento } from '../styles/page/Register'
import { useState } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import {v4 as uuid} from 'uuid'
import { useRouter } from 'next/router';

const styleIcon = {
  color: "#4F46BB",
  fontSize: "25px",
  cursor: 'pointer'
}
interface IAddressProps {
  bairro: string;
  logradouro: string;
  uf: string;
  localidade: string;
}

export default function Register(){
  const [cep, setCep] = useState('')
  const [validateCep, setValidateCep] = useState(false)
  const [address, setAddress] = useState({} as IAddressProps)
  const { register, formState, formState: {errors}, handleSubmit } = useForm()
  const router = useRouter()

  const hadleCepValidante= async () =>{
    try{
      const { data, status } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`) 
      if(data.erro){
        toast.error("CEP Invalid!")
      }

      setAddress(data)
      setValidateCep(true)
    }catch(e){
      setValidateCep(false)
      toast.error("CEP Invalid!")
    }
  }

  async function handleSubmitAdd(value){
    const newEnterprises = {
      id: uuid(),
      name: value.name,
      status: value.status,
      purpose: value.purpose,
      ri_number: "",
      address: {
        street: address.logradouro,
        number: value.number,
        district: address.bairro,
        city: address.localidade,
        state: address.uf,
        cep,
      }
    }

    if(!validateCep){
      toast.error('Cep invalid, try again!')
      return
    }

    const {data, status} = await axios.post(
      'http://localhost:3001/enterprises/',
      newEnterprises
    )

    if(status === 201){
      router.push('/')
    }

  }

  return(
    <>
      <Toaster />
      <HeaderStyle>
        <Link passHref href="/">
          <IoIosArrowBack style={styleIcon} />
        </Link>
        <h1>Cadastro de empreendimento</h1>
      </HeaderStyle>
      <MainRegisterStyle>
        <form onSubmit={handleSubmit(handleSubmitAdd)}>
          <h1>Informações</h1>
          <SelectLancamento {...register("status")} required>
            <option>Status</option>
            <option value="Breve Lançamento">Breve Lançamento</option>
            <option value="Lançamento">Lançamento</option>
            <option value="Em obras">Em obras</option>
            <option value="Pronto para morar">Pronto para morar</option>
          </SelectLancamento>
          <input placeholder='Nome do empreendimento' {...register("name")} required/>
          <select {...register("purpose")} required>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
          </select>
          <input {...register("cep")} placeholder='CEP' value={cep} onChange={(e)=> setCep(e.target.value)} onBlur={hadleCepValidante} required/>
          <section>
            <p>{address.logradouro}</p>
            <p>{address.bairro}</p>
            <p>{address.localidade}</p>
            <p>{address.uf}</p>
          </section>
          <input placeholder='Number' {...register("number")} required />
          <Button type='submit'>Cadastrar</Button>
        </form>
      </MainRegisterStyle>
    </>
  )
}