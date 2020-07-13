import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SnowStorm from 'react-snowstorm'
import { login, reset } from '../store/session'
// import { Button, Tooltip } from 'antd';
import {Button,Input} from '../components/Form'
import { UserOutlined } from '@ant-design/icons';
// console.log(SimpleButton)
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
  // const SimpleButton } = Buttons.SimpleButton
  // const Button=Form.Button;
  // console.log('09-0-',Button)
  // NOTE:: ADD THIS LINE OF CODE BEFORE LOGIN FORM TO ADD SNOW EFFECT.
  return (
    <>
      <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} />
      <div className='p-4 shadow rounded bg-white'>
        <h1 className='text-purple-500 leading-normal'>Next.js</h1>
        <p className='text-gray-500'>with Tailwind CSS</p>
        <button onClick={() => handleSubmit('super_admin@pakata.co', 'pakata123')}>
          Login
        </button>
        <Input placeholder={'Enter Username'} size={"large"} prefix={<UserOutlined />}/>
        <Button text = {"asdsad"}/>
      </div>
    </>
  )
}

LoginPage.getInitialProps = async ({ query }) => ({
  namespacesRequired: ['common'],
  query
})

export default LoginPage
