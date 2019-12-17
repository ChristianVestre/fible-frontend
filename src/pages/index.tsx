import styled from 'styled-components'
import MenuItem from '../components/homepage-components/list-menu';
import { withApollo } from '../lib/apollo';
import gql from 'graphql-tag'

import React from 'react';
import { useState } from 'react';
import Router from 'next/router'
import {useMutation } from '@apollo/react-hooks';
import redirect from '../lib/redirect';
import checkLoggedIn from './../lib/check-login'
import { loadUser } from '../lib/redux/actions/dataActions';
import { connect } from 'react-redux';
import { withRedux } from '../lib/redux/redux';
import { compose } from 'redux';



const Home = (props) => {
  //const client = useApolloClient()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setError] = useState('')
  const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    login(email: $email, password: $password ) {
      user{id name routes stops pois email}
    }
  }`
  const onCompleted = data => {
  //  client.cache.reset().then(() => {
  //    redirect({}, '/')
  //  })
    //console.log(data)

    props.loadUser(data)
    Router.push({
      pathname: '/routemanagement',
    })

  }

  const onError = error => {
    // If you want to send error to external service?
    console.log(error)

    setError(error.message)
  }
  const [signinUser, { error }] = useMutation(SIGN_IN, {
    onCompleted,
    onError,
  })
  return (
    <Wrapper>
    <HeaderImage src="/logo_fible.png" alt="my image" />
    <StyledInputRow>
      <StyledText>Email:</StyledText>
      <StyledInput type="text" name="email" value={email} onChange={e => setEmail((e.target as HTMLInputElement).value)} />
    </StyledInputRow>
    <StyledInputRow>
      <StyledText>Password:</StyledText>
      <StyledInput type="password"  name="password" value={password} onChange={e => setPassword((e.target as HTMLInputElement).value)} />
    </StyledInputRow>
    <StyledButton onClick={() => {
    signinUser({
      variables: {
        email: email,
        password: password
      },
    }) //setEmail(''), setPassword('')
    }}>Log in</StyledButton>
    {errorMessage != '' ? <StyledError>Wrong password!</StyledError>:null}
  </Wrapper>

  )
}
//        <MenuItem page="/routemanagement" name="Routes" />



const mapStateToProps = state => {
  return { loadUser: state.loadUser };
};
const enhance = compose(
  withRedux,
  withApollo,
  connect(mapStateToProps, {loadUser}),
)
export default enhance(Home)


const Wrapper = styled.div`
  position: absolute;
  left:50vw;
  translate:-50%;
  background: white;
  height: 100%;
  width:40%;
  display:flex;
  flex-direction:column;
  transform: translate(-50%, 0); 
  
`;

const HeaderImage = styled.img`
    padding: 10vh;
    max-height:15vh;
    height: auto;
    width:auto;
    align-self:center;
    object-fit: cover; 
`


const StyledInputRow = styled.div`
  display:flex;
  width:60%;
  padding:2vh;
  flex-direction:row;
  align-self:center;
`
const StyledText = styled.h3`
  align-self:flex-start;
  margin:0;
  padding:0;

`

const StyledError = styled.h3`
width:60%;
padding:2vh;
align-self:center;
text-align:center;
font-weight:bold;
font-size:2.5vh;
color:salmon;
`
const StyledInput = styled.input`
  display:flex;
  width:60%;
  padding:0.5vh;
  font-size:1.5vh;
  border: 1px solid;
  border-color: lightgray;
  border-radius:1vh;
  position:absolute;
  width:16vw;
  right:10vw;
  :focus {
        outline:none;
        caret-color:salmon;
    }


`
const StyledButton = styled.button`
    align-self:center;
    color:white;
    border:0;
    width:8vw;
    background:salmon;
    font-size:2vh;
    font-weight:bold;
    padding:1vh;
    padding-left:2vh;
    padding-right:2vh;
    border-radius:1vh;
    text-align:center;

    :focus {
        outline:none;
    }

    overflow: hidden;
    transform: translate3d(0, 0, 0);
        
    :after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .5s, opacity 1s;
        }

    :active:after {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
    }


`


/*
class Home extends React.Component<{state:any}> {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      passwordValue:''
    };
  }
  updateEmailValue(e) {
    this.setState({
      emailValue: e.target.value
    });
  }
  updatePasswordValue(e) {
    this.setState({
      passwordValue: e.target.value
    });
  }

 loginHandler = () => {
  console.log(this.state)
  const data = this.state.emailValue

render() {
  return ( <Wrapper>
      <List>
        <HeaderImage src="/logo_fible.png" alt="my image" />
        <MenuItem page="/routemanagement" name="Routes" />
          <StyledLabel>
            Email:
          <StyledInput type="text" name="email" onChange={(e) => this.updateEmailValue(e)} />
          </StyledLabel>
          <StyledLabel>
            Password:
          <StyledInput type="text" name="password" onChange={(e) => this.updatePasswordValue(e)} />
          </StyledLabel>
          <StyledButton onClick={() => this.loginHandler()}>Log in</StyledButton>
      </List>
    </Wrapper>
  )}
}
*/