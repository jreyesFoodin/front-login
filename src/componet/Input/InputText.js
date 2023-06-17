import { useField } from 'formik'

const InputText = ({ label, size, disabled, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={size ? '' : 'col-md-12 w-100'}>
      <div className='input-group has-validation'>
        <input
          className={`form-control rounded-3 ${
            !!meta.touched && !!meta.error ? 'is-invalid' : ''
          }`}
          {...field}
          {...props}
          placeholder={label}
          disabled={disabled}
        />
        {meta.touched && meta.error
          ? <div className='invalid-feedback'>{meta.error}</div>
          : null}
      </div>
    </div>
  )
}

export default InputText
