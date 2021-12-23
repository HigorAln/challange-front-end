import { Search, LabelSearch } from "./Search";
import {RiSearch2Line} from 'react-icons/ri'
import { Dispatch, SetStateAction } from "react";

interface ISearch {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>
}

export function SearchComponent({search, setSearch}: ISearch){
  return(
    <LabelSearch>
      <RiSearch2Line style={{marginRight:'18px'}}/>
      <Search type='search' placeholder="Buscar" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    </LabelSearch>
  )
}


