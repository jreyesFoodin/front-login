import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import useApi from '../hook/useApi'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('token', null)
  const navigate = useNavigate()
  const api = useApi()

  const login = async (data) => {
    const response = await api.post('api/auth/Login', data)
    if (response.success) {
    //   setToken(response.value)
    //   const headers = { Authorization: `Bearer ${response.value}` }
    //   const responseUser = await api.get('api/account/GetUser', null, headers)
    //   if (responseUser.success) {
    //     setUser(responseUser.value)
    //   } else {
    //     logout()
    //   }

    //   if (!data.setLogin) {
    //     if (step) {
    //       navigate('/purchasing', { replace: true })
    //       // window.location.reload() @TODO error en safari
    //     } else {
    //       navigate('/user-profile?step=1', { replace: true })
    //       // window.location.reload() @TODO error en safari
    //     }
    //   }
      // return responseUser
    } else {
      setUser(null)
      setToken(null)
      return response
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    // window.sessionStorage.removeItem('subscriptions')
    // RemoveSessionPurchasing()
    // window.location.reload() @TODO se comento para ver funcionalidad
    navigate('/', { replace: true })
  }
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      token
    }),
    [user, login, logout, token]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
