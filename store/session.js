import apiClient from '../modules/ApiClient'
import { login as _login, logout as _logout } from '../modules/Auth'

const preUrl = '/api'
// Actions
const LOADING = `${process.env.NEXT_PUBLIC_PROJECT_NAME}/auth/loading`
const LOAD_FAILED = `${process.env.NEXT_PUBLIC_PROJECT_NAME}/auth/loadFailed`
const LOADED = `${process.env.NEXT_PUBLIC_PROJECT_NAME}/auth/loaded`

export const RESET_ALL = `${process.env.NEXT_PUBLIC_PROJECT_NAME}/root/reset_all`

const initialState = {
  user: {},
  token: '',
  isAuthenticated: false,
  roles: [],
  role: '',
  loading: false,
  hasErrors: false
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, hasErrors: false }
    case LOAD_FAILED:
      return { ...state, loading: false, hasErrors: true }
    case LOADED:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    default:
      return state
  }
}

export default reducer

export const logingIn = () => {
  return { type: LOADING }
}

export const loginFailed = () => {
  return { type: LOAD_FAILED }
}

export const loggedIn = (user, token, role) => {
  return { type: LOADED, payload: { user, token, role, isAuthenticated: !!user } }
}

export const emailConfirmed = (roles) => {
  return { type: LOADED, payload: { roles } }
}

export const loggedOff = () => {
  return { type: LOADED, payload: { user: {}, token: '', role: '', isAuthenticated: false } }
}

export const reset = (user, token, role) => {
  return { type: RESET_ALL }
}

// API Requests
export const checkEmail = ({ email }) => {
  return dispatch => {
    dispatch(logingIn())
    return apiClient
      .post(`${preUrl}/users/confirm_email`, { session: { email } })
      .then(resp => resp.json())
      .then(({ session: { roles } }) => {
        dispatch(emailConfirmed(roles))
      })
      .catch(() => dispatch(loginFailed()))
  }
}

export const login = (email, password, role) => {
  return dispatch => {
    dispatch(logingIn())
    return apiClient
      .post(`${preUrl}/users/sign_in`, { session: { email, password, role } })
      .then(resp => resp.json())
      .then(({ session: { user, token, roles } }) => {
        dispatch(loggedIn(user, token, roles))
        _login(token)
      })
      .catch(() => dispatch(loginFailed()))
  }
}

export const logout = (token) => {
  return dispatch => {
    _logout()
    return dispatch(loggedOff())
  }
}
