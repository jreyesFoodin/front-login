import { Formik, Form } from 'formik'
import InputText from './Input/InputText'
import InputPassWord from './Input/InputPassWord'
import { ErrorForm } from '../constant'
import { regexPass } from '../constant/Regex'
import { useState } from 'react'
import useApi from '../hook/useApi'
import { useLocalStorage } from '../hook/useLocalStorage'
import Button from './Button/Button'

const validate = (values) => {
  const error = {}
  if (!values.email) {
    error.email = ErrorForm.errorGeneral.required
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    error.email = ErrorForm.errorFormLogin.email
  }
  if (!values.password) {
    error.password = ErrorForm.errorGeneral.required
  } else if (!regexPass.test(values.password)) {
    error.password = ErrorForm.errorFormLogin.password
  }
  console.log('error', error)
  return error
}

const Login = ({ setLoginView }) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('token', null)
  const api = useApi()
  return (
    <div className='modal-content rounded-4 shadow'>
      <div className='modal-header p-5 pb-4 border-bottom-0'>
        <h1 className='fw-bold mb-0 fs-2'>Inicia session</h1>
      </div>

      <div className='modal-body p-5 pt-0'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={async (values) => {
            setLoading(true)
            const data = {
              email: values.email,
              password: values.password
            }
            const response = await api.post('auth/login', data)
            if (response.success) {
              setToken(response.token)
              const headers = { Authorization: `${token}` }
              const userProfile = await api.get('auth/user', null, headers)
              if (userProfile.success) {
                setUser(userProfile.data)
                window.location.reload()
                return user
              } else {
                setToken(null)
              }
            }
            setLoading(false)
          }}
        >
          <Form className=''>
            <div className='form-floating mb-3'>
              <InputText name='email' label='Email' />
            </div>
            <div className='form-floating mb-3'>
              <InputPassWord name='password' label='password' />
            </div>
            <Button
              className='w-100 mb-2 btn btn-lg rounded-3 btn-primary'
              loading={loading}
              type='submit'
            >
              Ingresar
            </Button>
            <hr className='my-4' />
            <button className='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3' type='submit' onClick={() => setLoginView(false)}>
              Registrate
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
