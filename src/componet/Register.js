import { Formik, Form } from 'formik'
import InputText from './Input/InputText'
import InputPhone from './Input/InputPhone'
import InputPassWord from './Input/InputPassWord'
import { ErrorForm } from '../constant'
import { regexPass } from '../constant/Regex'
import Button from './Button/Button'
import { useState } from 'react'
import useApi from '../hook/useApi'
import Alert from './Alert'

const validate = (values) => {
  const error = {}
  if (!values.name) {
    error.name = ErrorForm.errorGeneral.required
  } else if (values.name.length < 2) {
    error.name = ErrorForm.errorGeneral.verySmallField
  }

  if (!values.lastName) {
    error.lastName = ErrorForm.errorGeneral.required
  } else if (values.lastName.length < 2) {
    error.lastName = ErrorForm.errorGeneral.verySmallField
  }

  if (!values.secondLastName) {
    error.secondLastName = ErrorForm.errorGeneral.required
  } else if (values.secondLastName.length < 2) {
    error.secondLastName = ErrorForm.errorGeneral.verySmallField
  }

  if (!values.email) {
    error.email = ErrorForm.errorGeneral.required
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    error.email = ErrorForm.errorFormLogin.email
  }

  if (!values.password) {
    error.password = ErrorForm.errorGeneral.required
  } else if (!regexPass.test(values.password)) {
    error.password = ErrorForm.errorFormLogin.password
  } else if (values.password !== values.pass2) {
    error.password = ErrorForm.errorFormLogin.passwordNotMatch
  }

  if (!values.pass2) {
    error.pass2 = ErrorForm.errorGeneral.required
  } else if (!regexPass.test(values.pass2)) {
    error.pass2 = ErrorForm.errorFormLogin.password
  } else if (values.pass2 !== values.password) {
    error.pass2 = ErrorForm.errorFormLogin.passwordNotMatch
  }
  if (!values.phone) {
    error.phone = ErrorForm.errorGeneral.required
  } else if (values.phone.replace(/\s/g, '').length < 13) {
    error.phone = ErrorForm.errorFormRegister.phone
  }
  return error
}
const Register = ({ setLoginView }) => {
  const api = useApi()
  const [loading, setLoading] = useState(false)
  const [alertPop, setAlertPop] = useState(null)
  return (
    <div className='modal-content rounded-4 shadow'>
      <div className='modal-header p-5 pb-4 border-bottom-0'>
        <h1 className='fw-bold mb-0 fs-2'>Registrate</h1>
      </div>
      <div className='modal-body p-5 pt-0'>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            secondLastName: '',
            email: '',
            phone: '',
            password: '',
            pass2: ''
          }}
          validate={validate}
          onSubmit={async (values, { setSubmitting }) => {
            setLoading(true)
            const data = {
              name: values.name,
              lastName: values.lastName,
              secondLastName: values.secondLastName,
              email: values.email,
              phone: values.phone,
              birthDay: values.birthDay,
              password: values.password
            }
            const response = await api.post('auth/signup', data)
            if (response.success) {
              setLoginView(true)
            } else {
              setAlertPop({
                message: response.message,
                alertColor: 'alert-warning'
              })
            }
            setLoading(false)
          }}
        >
          <Form>
            <div className='form-floating mb-3'>
              <InputText name='name' label='Nombre' />
            </div>
            <div className='form-floating mb-3'>
              <InputText name='lastName' label='Apellido Paterno' />
            </div>
            <div className='form-floating mb-3'>
              <InputText name='secondLastName' label='Apellido  Materno' />
            </div>
            <div className='form-floating mb-3'>
              <InputPhone name='phone' label='Telefono' />
            </div>
            <div className='form-floating mb-3'>
              <InputText name='email' label='Email' type='email' />
            </div>
            <div className='form-floating mb-3'>
              <InputPassWord name='password' label='Contraseña' />
            </div>
            <div className='form-floating mb-3'>
              <InputPassWord name='pass2' label='Repite la contraseña' />
            </div>
            {alertPop && <Alert message={alertPop.message} alertColor={alertPop.alertColor} />}
            <Button
              className='w-100 mb-2 btn btn-lg rounded-3 btn-primary'
              type='submit'
              loading={loading}
            >
              Registrate
            </Button>
            <hr className='my-4' />
            <button className='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3' type='submit' onClick={() => setLoginView(true)}>
              Iniciar Session
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register
