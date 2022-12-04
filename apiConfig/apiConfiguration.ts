//Sets the connect API configuration
export const myAppConfig = {
  aws_appsync_graphqlEndpoint:`${process.env.URL_API}`,
  aws_appsync_region: `${process.env.Region}`,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: `${process.env.API_KEY}`
}
