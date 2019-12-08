import styled from 'styled-components'
import gql from 'graphql-tag'

import React from 'react';
import { useState } from 'react';
import Router from 'next/router'
import { useMutation, useApolloClient } from '@apollo/react-hooks';


import { cleanUser } from '../../lib/redux/actions/dataActions';
import { connect } from 'react-redux';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import redirect from '../../lib/redirect';
import Cookies from 'js-cookie'



const LogoutButton = (props) => {
  const client = useApolloClient()

  const LOGOUT = gql`
  mutation Logout {
    logout
  }`
  const onCompleted = () => {
    client.cache.reset().then(() => {
     redirect({}, '/')
    })

    props.cleanUser()
    document.cookie = "qid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    Cookies.remove('qid')

  }

  const onError = error => {
    // If you want to send error to external service?
    console.error(error)
  }
  const [logout, { error }] = useMutation(LOGOUT, {
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