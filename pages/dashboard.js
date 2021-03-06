import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from '../modules/I18n'
import withLayout from '../modules/Layout'
import LanguageSelect from '../components/LanguageSelect'
import Slider from '../components/Slider'
const Dashboard = ({ query, props }) => {
  // const dispatch = useDispatch()
  const { t } = useTranslation(['common'])
  const { loading, hasErrors, user, role } = useSelector(state => state.session)

  useEffect(() => {
    let mounted = true

    // mounted && dispatch(reset())

    return () => {
      mounted = false
    }
  }, [])

  // NOTE:: ADD THIS LINE OF CODE BEFORE LOGIN FORM TO ADD SNOW EFFECT.
  // <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} />
  return (
    <>
      <Slider />
      <div className='p-4 shadow rounded bg-white'>
        <p>This is {t('project')}</p>
        Permission granted!!
        Tapa Tap, Tapa tap
        <p>I am panda's {role} too</p>
        <div className='flex justify-end pr-5'>
          <LanguageSelect />
        </div>
      </div>
    </>
  )
}

Dashboard.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  query
})

export default withLayout(Dashboard)
