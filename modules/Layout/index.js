import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { withAuthSync } from '../Auth'
import { getDisplayName } from '../Utils'

import { logout } from '../../store/session'
// import { getCurrentClient } from '../../store/client'
// import { getProducts } from '../../store/products'

import Header from '../../components/Header'
import Link from 'next/link'
// import Navigation from '../../components/Navigation'
import { useTranslation } from '../../modules/I18n'

const LegalFooter = () => {
  const { t } = useTranslation('footer')
  return (
    <div className='flex text-white bg-argo-primary-1 p-4 justify-end'>
      <Link href='/legal-disclaimer'>
        <a className='hover:text-argo-primary-2 mx-4'>{t('legal')}</a>
      </Link>
      <Link href='/terms-of-service'>
        <a className='hover:text-argo-primary-2 mx-4'>{t('terms')}</a>
      </Link>
      <Link href='/privacy-policy'>
        <a className='hover:text-argo-primary-2 mx-4'>{t('privacy')}</a>
      </Link>
    </div>
  )
}

const withLayout = (Page) => {
  return class extends React.Component {
    static displayName = `withLayout(${getDisplayName(Page)})`

    static async getInitialProps (ctx) {
      const pageProps = Page.getInitialProps && (await Page.getInitialProps(ctx))
      return pageProps
    }

    componentDidMount () {
      const { token, dispatch } = this.props
      // dispatch(getCurrentClient(token))
    }

    handleLogout () {
      const { token, dispatch } = this.props
      dispatch(logout(token))
    }

    render () {
      // const { permissions } = this.props.client
      return (
        <div className='flex items-stretch h-full'>
          {/*<Navigation permissions={permissions} />*/}
          <div className='flex flex-grow flex-col'>
            <Header onLogout={this.handleLogout.bind(this)} />
            <div className='overflow-y-scroll h-full flex flex-col'>
              <div className='p-4 xl:p-8 bg-argo-primary-4 flex-grow'>
                <Page {...this.props} />
              </div>
              <LegalFooter />
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const { user } = state.session
  return {
    user
  }
}

export default (Page) => connect(mapStateToProps)(withAuthSync(withLayout(Page)))
