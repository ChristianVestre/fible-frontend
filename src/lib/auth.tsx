import gql from "graphql-tag";
import React from 'react'
import redirect from "./redirect";
import { loadUser } from "../redux/actions/dataActions";


const ME = gql`
query me{
    me {
      id name ROUTES POIS STOPS email
    }
}`

export const withAuth = C => {
  class AuthComponent extends React.Component {
    static async getInitialProps(ctx) {
      const response = await ctx.apolloClient.query({ query: ME });

      //console.log("@withAuth ", response);

      if (!response || !response.data || !response.data.me) {
        redirect(ctx, "/");
        return {
          me: null
        };
      }
      ctx.reduxStore.dispatch(loadUser({user:response.data.me}))
      ctx.user = response.data.me
      let componentProps = {}
      if (C.getInitialProps) {
        componentProps = await C.getInitialProps(ctx);
      }
      const me = response.data.me
      return {
        me:response.data.me,
        ...componentProps
      };
    }
    
    render() {
     // {console.log(this.props)}
      return <C {...this.props} user={this.props} />;
    }
  }

  return AuthComponent;
};