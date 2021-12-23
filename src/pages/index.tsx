/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { BodyComponent } from "../components/Body";
import { HeaderComponent } from "../components/Header";
import { SearchComponent } from "../components/Search";
import { Main } from "../styles/components/Main";
import { IReponseEnterprises } from "../types/Enterprises";

interface HomeEnterprisesProps{
  enterprises: IReponseEnterprises[]
}

export default function Home({enterprises}: HomeEnterprisesProps) {
  const [search, setSearch] = useState('')
  const [enterprisesSearch, setEnterprisesSearch] = useState([])
  const [nextValue, setNextValue] = useState(3)


  const enterprisesAll = enterprises.slice(0, nextValue)

  useEffect(()=>{
    const value = enterprises.filter(element=> element.name.includes(search))
    setEnterprisesSearch(value)
  },[search])

  useEffect(()=>{
    alert('Vi no figma porem nao consegui entender muito bem, como ficaria esses botoes nas enterprises, os botoes de lancamento e residencial... dai acabei deixando igual o figma')
  },[])

  return (
    <>
      <HeaderComponent />
      <Main>
        <SearchComponent search={search} setSearch={setSearch}/>
        <BodyComponent
          enterprises={search !== '' ? enterprisesSearch : enterprisesAll}
          nextValue={nextValue}
          setNextValue={setNextValue}
          button={search !== '' ? false : true}
        />
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ()=>{
  const { data, status } = await axios.get('http://localhost:3001/enterprises')

  if(status !== 200){
    return{
      notFound: true
    }
  }

  return{
    props: {
      enterprises: data
    }
  }
}
