import gql from 'graphql-tag'


export default async apolloClient => {{apolloClient}
  const response = await apolloClient.query({
      query: gql`
      query me{
        me {
          id name ROUTES POIS STOPS email
        }
      }`,
    })
    if (response.data.me != null){
      return { loggedInUser: response.data }
    }
    else {
      // Fail gracefully
      return { loggedInUser: {} }
    }
  }