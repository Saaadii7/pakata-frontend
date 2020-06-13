import '../styles/index.css'

import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'

import withRedux from '../modules/Redux'

class Pakata extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(Pakata)
