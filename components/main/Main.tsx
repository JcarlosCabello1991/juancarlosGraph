import React, { useContext, useEffect } from 'react'
import { context } from '../../context/ContextProvider'
import { contextProps } from '../../interfaces/contextProps.interface'
import Translation, { TranslationValue } from '../../interfaces/translation.interface'
import { RootState } from '../../redux/store/store'
import { useSelector} from 'react-redux'
import { getTranslations } from '../../queries/translations/translations'

const Main = () => {
  const {apiData, location, setApiData} = useContext<contextProps>(context);
  const language = useSelector((state: RootState) => state.language.value);

  useEffect(() => {
    const getNewDataApi = async () => {
      const response = await getTranslations(language);
      const {data:{listTranslations}}:{data:any, listTranslation:[Translation]} = response;
      setApiData(listTranslations);
    }
    language !== '' && getNewDataApi()
  },[language])
  
  return (
    <div>
       {
        apiData.map(({id, tag, valueLang}:{id:string, tag:string, valueLang:TranslationValue}) => {
          if(tag.includes(`${location}_`)){
          return(              
              <p key={id}>{valueLang[language]}</p>              
          )
          }
        })
      }        
    </div>
  )
}

export default Main