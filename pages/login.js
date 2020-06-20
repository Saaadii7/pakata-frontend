import { useEffect, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import SnowStorm from 'react-snowstorm'
import { checkEmail, login, reset } from '../store/session'
import Form from '../components/Form'
import { capitalize } from '../modules/Utils'

// import { SelectInput } from '../components/Form'

// import LoginForm from '../components/LoginForm'
// import ForgetPasswordModal from '../components/ForgetPasswordModal'
// import { login as logAs } from '../modules/Auth'

const LoginPage = ({ query, roles }) => {
  const dispatch = useDispatch()
  const SelectInput = Form.SelectInput
  // const { loading, hasErrors } = useSelector(state => state.session)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rolesValues, setRolesValues] = useState([])
  const [role, setRole] = useState('')

  const handleEmailCheck = (email) => {
    dispatch(checkEmail({ email }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password, role))
  }

  const rolesExists = () => {
    return roles.length > 0
  }

  useEffect(() => {
    let mounted = true

    mounted && dispatch(reset())

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    setRolesValues(roles.map(value => { return { value: value, text: capitalize(value) } }))
    setRole(roles.length === 1 ? roles[0] : '')
  }, [roles])

  // NOTE:: ADD THIS LINE OF CODE BEFORE LOGIN FORM TO ADD SNOW EFFECT.
  return (
    <div className='w-full gradient-2 pt-24 pb-24' style={{ minHeight: 'calc(100vh - 272px)' }}>
      <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} />
      <div className='w-full h-full max-w-xs m-auto'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input onChange={e => setEmail(e.target.value)} value={email} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Enter Your Email' />
          </div>
          {rolesExists() &&
            <div className='mb-4'>
              <input onChange={e => setPassword(e.target.value)} value={password} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' type='text' placeholder='Enter Your Password' />
            </div>}
          {rolesExists() &&
            <div className='mb-4'>
              You are being logged in as
              <SelectInput
                callback={setRole}
                options={rolesValues}
                name='roles'
                required
                stateToUpdate={role}
              />
            </div>}

          <div className='w-full max-w-xs mb-2'>
            {!rolesExists() &&
              <button onClick={() => handleEmailCheck(email)} className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Next
              </button>}
            {rolesExists() &&
              <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                Submit
              </button>}
          </div>
          <div className='w-full text-center'>
            <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
              Forgot Password?
            </a>
          </div>
        </form>
        <p className='text-center text-white text-xs'>
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

const mapStateToProps = (state) => {
  const { user, roles } = state.session
  return {
    user, roles
  }
}
export default connect(mapStateToProps, {})(LoginPage)
