import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../themes/globalstyles';
import { Provider } from 'react-redux'
import {Store} from '../lib/redux/store'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}



export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <Provider store={Store}>

        <Component {...pageProps} />
        </Provider>

      </ThemeProvider>
    )
  }
}
//      <PersistGate loading={null} persistor={persistor}>
