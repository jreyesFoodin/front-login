import { useField } from 'formik'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const InputPhone = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='col-md-12 w-100'>
      <div className='input-group has-validation'>
        <PhoneInput
          placeholder={label}
          className={`${!!meta.touched && !!meta.error ? 'is-invalid' : ''}`}
          onChange={(phoneNumber, country, e) => {
            field.onChange(e)
          }}
          onBlur={() => field.onBlur()}
          country='mx'
          defaultCountry='mx'
          international
          countryCallingCodeEditable={false}
          inputProps={{
            name: field.name
          }}
          value={field.value}
        />
        {meta.touched && meta.error
          ? <div className='invalid-feedback'>{meta.error}</div>
          : null}
      </div>
    </div>
  )
}

export default InputPhone
