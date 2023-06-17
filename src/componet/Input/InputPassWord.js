import { useField } from 'formik'
import '../../scss/InputPasswordToggle.scss'
import { useState } from 'react'

const InputPassWord = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='col-md-12 w-100'>
      <div className='input-group has-validation'>
        <input
          type={showPassword ? 'text' : 'password'}
          className={`input-password form-control rounded ${
            !!meta.touched && !!meta.error ? 'is-invalid' : null
          }`}
          {...field}
          {...props}
          placeholder={label}
        />
        <button
          id={props.name}
          type='button'
          className='toggle-password'
          onClick={() => setShowPassword(!showPassword)}
        />
        {meta.touched && meta.error
          ? <div className='invalid-feedback'>{meta.error}</div>
          : null}
      </div>
    </div>
  )
}

export default InputPassWord
