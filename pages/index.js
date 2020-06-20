import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SnowStorm from 'react-snowstorm'
import { login, reset } from '../store/session'

// import LoginForm from '../components/LoginForm'
// import ForgetPasswordModal from '../components/ForgetPasswordModal'
// import { login as logAs } from '../modules/Auth'

const LoginPage = ({ query }) => {
  const dispatch = useDispatch()
  const { loading, hasErrors } = useSelector(state => state.session)

  const handleSubmit = (email, password) => {
    dispatch(login({ email, password }))
  }

  useEffect(() => {
    let mounted = true

    // mounted && dispatch(reset())

    return () => {
      mounted = false
    }
  }, [])

  // NOTE:: ADD THIS LINE OF CODE BEFORE LOGIN FORM TO ADD SNOW EFFECT.
  return (
    <>
      {/* <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} /> */}
      <div className='p-4 shadow rounded bg-white'>
        <h1 className='text-purple-500 leading-normal'>Next.js</h1>
        <p className='text-gray-500'>with Tailwind CSS</p>
        <button onClick={() => handleSubmit('saad@gmail.com', '12345678')}>
        Fuck Panda
        </button>
      </div>
    </>
  )
}

LoginPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  query
})

export default LoginPage
