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
      console.log(language)
      const response = await getTranslations(language);
      const {data:{listTranslations}}:{data:any, listTranslation:[Translation]} = response;
      setApiData(listTranslations);
    }
    (language !== '' && language !== null) && getNewDataApi()
  },[language])
   
  return (
    <div>
      
       {
        apiData.length > 0 ? apiData.map(({id, tag, valueLang}:{id:string, tag:string, valueLang:TranslationValue}) => {
          if(tag.includes(`${location}_`)){
            return (
              Object.values(valueLang).map((element: string)=>{
                return(
                  <p key={id}>{element}</p>
                )
              })
            )
          }
        }) : <p>loading</p>
      }     
    </div>
  )
}

export default Main