/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { IoIosArrowBack } from "react-icons/io"
import { Button } from "../../styles/components/Button"
import { HeaderStyle, MainRegisterStyle, SelectLancamento } from "../../styles/page/Register"
import { IReponseEnterprises } from "../../types/Enterprises"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';

type EditProps = {
  enterprises: IReponseEnterprises
}

const styleIcon = {
  fontSize:'16px',
  color: "4F46BB",
  cursor: `pointer`,
  marginLeft:'5px'
}
interface IAddressProps {
  bairro: string;
  logradouro: string;
  uf: string;
  localidade: string;
}
interface IHandleEdit {

}

export default function Edit({enterprises}:  EditProps){
  const {register, handleSubmit} = useForm()
  const [cep,setCep] = useState(enterprises.address.cep)
  const [name, setName] = useState(enterprises.name)
  const [HomeNumber, setHomeNumber] = useState(enterprises.address.number)
  const [address, setAddress] = useState({} as IAddressProps)
  const [validateCep, setValidateCep] = useState(false)
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
  useEffect(()=>{
    axios.get<IAddressProps>(`https://viacep.com.br/ws/${cep}/json/`)
      .then(result => setAddress(result.data))
  },[])

  const handleEdit = async (value) =>{
    const newUpdate = {
      id: enterprises.id,
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
    const {status, data} = await axios.put(`http://localhost:3001/enterprises/${enterprises.id}`, newUpdate)
    if(status === 200){
      router.push('/')
    }else{
      toast.error('Something wrong!...')
    }
  }
  
  return(
    <>
      <Toaster />
      <HeaderStyle>
        <Link passHref href="/">
          <IoIosArrowBack style={styleIcon} />
        </Link>
        <h1>Editar empreendimento</h1>
      </HeaderStyle>
      <MainRegisterStyle>
        <form onSubmit={handleSubmit(handleEdit)}>
          <h1>Informações</h1>
          <SelectLancamento defaultValue={enterprises.status} {...register('status')} required>
            <option>Status</option>
            <option value="Breve Lançamento">Breve Lançamento</option>
            <option value="Lançamento">Lançamento</option>
            <option value="Em obras">Em obras</option>
            <option value="Pronto para morar">Pronto para morar</option>
          </SelectLancamento>
          <input {...register('name')} placeholder='Nome do empreendimento' value={name} onChange={(e) => setName(e.target.value)} required/>
          <select {...register("purpose")} defaultValue={enterprises.purpose} required>
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
          <input {...register("number")} placeholder='number' value={HomeNumber} onChange={(e)=> setHomeNumber(e.target.value)} required />
          <Button type='submit'>Editar</Button>
        </form>
      </MainRegisterStyle>
    </>
  )
}





export const getStaticPaths: GetStaticPaths = async () =>{
  const { data } = await axios.get('http://localhost:3001/enterprises')

  const paths = data.map(element => {
    return { params: { id: String(element.id)}}
  })

  return{
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context)=>{
  const { id } = context.params;

  const { data } = await axios.get('http://localhost:3001/enterprises')

  const filter = data.find(element=> element.id === id)



  return {
      props: {enterprises: filter},
  }
}