import React, { useContext } from 'react'
import {pages} from '../../listPages/listPages'
import styled from 'styled-components'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { contextProps } from '../../interfaces/contextProps.interface';
import { context } from '../../context/ContextProvider';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style:none;
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
    <div>
      <Ul>
        {
          pages.map((page:string, index:number) => {
            return(
              <li key={index}><Link href={`${page === 'Home' ? '/' : '/about/About'}`}><Span style={{color:`${selectColor(page)}`}} onClick={()=>{setLocation(page.toLowerCase())}}>{page}</Span></Link></li>
            )
          })
        }
      </Ul>
    </div>
  )
}

export default Header