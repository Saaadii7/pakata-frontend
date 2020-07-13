import '../styles/index.css'

import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { appWithTranslation } from '../modules/I18n'
import withRedux from '../modules/Redux'

class Pakata extends App {
  constructor (props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={this.persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    )
  }
}

export default appWithTranslation(withRedux(Pakata))
