import { API, graphqlOperation } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import { myAppConfig } from '../../apiConfig/apiConfiguration';

//Query to take the tags in order to the selected language
export const getTranslations = async (language: string) => {
  Amplify.configure(myAppConfig);
  const dataApi:any = await API.graphql(graphqlOperation(`
  query{
    listTranslations{
      id
      tag
      valueLang{
        ${language}
      }
    }
  }
  `, {input:`${language}`}));

  return dataApi;
}