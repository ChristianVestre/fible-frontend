import styled from 'styled-components'
import gql from 'graphql-tag'

import React from 'react';
import { useState } from 'react';
import Router from 'next/router'
import { useMutation, useApolloClient } from '@apollo/react-hooks';


import { connect } from 'react-redux';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie'



const LogoutButton = (props) => {
  const client = useApolloClient()


  const onCompleted = () => {
    Router.replace("/")
    sessionStorage.clear()
    logout()
  }

  const onError = error => {
    // If you want to send error to external service?
    console.error(error)
  }
  const [logout, { error }] = useMutation(gql`
  mutation Logout {
    logout
  }`, {
    onCompleted,
    onError,
  })
  
  return (
    <StyledWrapper onClick={() => {logout()}}>
    <StyledText>Logout</StyledText>
    <StyledFontAwesomeIcon icon={faDoorOpen}/>
  </StyledWrapper>

  )
}

//const mapStateToProps = state => {
//    return { cleanUser: state.cleanUser };
//  };
export default LogoutButton
//  export default connect(mapStateToProps,{cleanUser})(LogoutButton);
  
  const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size:3vh;
  transform: translate(-50%, 0); 
  `

  const StyledWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:5vw;
  height:5vh;
  position: absolute;
  right:10vw;
  top:3vh;
  `
  const StyledText = styled.p`
    font-size:3vh;
    padding:0;
    margin:0;
    margin-right:0.5vw;
    user-select: none;
  `