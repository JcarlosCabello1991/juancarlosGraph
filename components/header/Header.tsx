import React, { useContext } from 'react'
import {pages} from '../../listPages/listPages'
import styled from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { contextProps } from '../../interfaces/contextProps.interface';
import { context } from '../../context/ContextProvider';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f7cff;
`
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style:none;
  padding: 0;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const Header = () => {
  const {setLocation} = useContext<contextProps>(context);
  const router = useRouter()

  const selectColor = (page:string) => {
    if(router.pathname === '/' && page === 'Home'){
      return 'white'
    }else if(router.pathname === '/about/About' && page === 'About') {
      return 'white'
    }else{
      return '#828282'
    }
  }

  return (
    <Container>
      <Ul>
        {
          pages.map((page:string, index:number) => {
            return(
              <li key={index}><Link href={`${page === 'Home' ? '/' : '/about/About'}`}><Span style={{color:`${selectColor(page)}`}} onClick={()=>{setLocation(page.toLowerCase())}}>{page}</Span></Link></li>
            )
          })
        }
      </Ul>
    </Container>
  )
}

export default Header