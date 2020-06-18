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
    <div>
        <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} />
        <div class="w-full h-full max-w-xs m-auto">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Your Email"/>
                </div>
                <div class="w-full max-w-xs mb-2"> 
                    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        SUBMIT
                    </button>
                </div>
                <div class="w-full text-center">
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="text-center text-white text-xs">
                &copy;PAKATA Corp. All rights reserved.
            </p>
        </div>
    </div>
  )
}

LoginPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  query
})

export default LoginPage
