import React from 'react'
import { initializeStore } from '../../store'

const isServer = typeof window === 'undefined'
const __REDUX_STORE__ = '__REDUX_STORE__'

const getOrCreateStore = (initialState) => {
  // On server, always return a new store
  if (isServer) {
    return initializeStore(initialState)
  }

  // On client, only create store if not already present
  if (!window[__REDUX_STORE__]) {
    window[__REDUX_STORE__] = initializeStore(initialState)
  }

  return window[__REDUX_STORE__]
}

export default App => {
  // Wrap the App component with the redux store
  return class AppWithRedux extends React.Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
