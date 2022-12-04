import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contextProps } from "../interfaces/contextProps.interface";
import Translation from "../interfaces/translation.interface";
import { getTranslations } from "../queries/translations/translations";
import { en, es } from "../redux/slices/languagesSlices";
import { RootState } from "../redux/store/store";

interface props {
  children: JSX.Element | JSX.Element[]
}

export const context = createContext<contextProps>({} as contextProps);

export const ContextProvider = ({children}:props) => {
  const router = useRouter();

  const [location, setLocation] = useState<string>(router.pathname === '/' ? 'home' : 'about');  
  const language = useSelector((state: RootState) => state.language.value);
  const [apiData, setApiData] = useState<[]>([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const languageStorage = localStorage.getItem('preferLang');
    
    if(languageStorage !== null && language != languageStorage){
      //Call to get translations with the favourite user languagefavourite
      languageStorage === 'es' ? dispatch(es(languageStorage)) : dispatch(en(languageStorage));
    }else if(languageStorage === null){
      if(language !=  navigator.language.split('-')[0]){
        navigator.language.split('-')[0]=== 'es' ? dispatch(es(languageStorage)) : dispatch(en(languageStorage));
        localStorage.setItem('preferLang',  navigator.language.split('-')[0])
      }
    }

  },[])
  
 

  return (<context.Provider value={{location, setLocation, apiData, setApiData}}>{children}</context.Provider>)
}