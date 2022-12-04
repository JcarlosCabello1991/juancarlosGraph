// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import type { NextApiRequest, NextApiResponse } from 'next'
import { myAppConfig } from '../../apiConfig/apiConfiguration'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export const getTranslations1 = async (language: string) => {
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
