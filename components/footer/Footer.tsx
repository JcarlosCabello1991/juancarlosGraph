import React from 'react'
import { languages } from '../../listPages/listPages'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { es, en } from '../../redux/slices/languagesSlices'
import { RootState } from '../../redux/store/store'


const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

function Footer() {
  const currentLanguage = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch();

  const handleLanguage = () => {

    let selectedOption: string;

    if(typeof window !== 'undefined'){

      const selected: HTMLSelectElement = document.getElementById("selectedLang") as HTMLSelectElement
      selectedOption = selected?.options[selected?.selectedIndex].value;

      if(selectedOption === 'es'){
        dispatch(es(selectedOption))
        localStorage.setItem('preferLang', 'es')
      }else{
        dispatch(en(selectedOption))
        localStorage.setItem('preferLang', 'en')
      }
    }
  }

  return (
    <SelectContainer>
      <label>Laguage</label>
      <select name='selectLanguages' id='selectedLang' onChange={()=>handleLanguage()}>
      {
        languages.map((language:string, index:number) => {
          return (<option key={index} value={`${language}`} selected={currentLanguage === language && true}>{language}</option>)
        })
      }
      </select>
    </SelectContainer>
  )
}

export default Footer