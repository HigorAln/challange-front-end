import { Button } from '../../styles/components/Button'
import { Header } from './Header'
import Link from 'next/link';

export function HeaderComponent(){

  return(
    <Header>
      <Link href="/" passHref>
        <h1>Empreendimentos</h1>
      </Link>
      <Link passHref href="/register">
        <Button>Adicionar + </Button>
      </Link>
    </Header>
  )
}