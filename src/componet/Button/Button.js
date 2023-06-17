import ButtonBoot from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Button = ({ loading, children, ...props }) => {
  return (
    <ButtonBoot {...props}>
      {loading
        ? (
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          )
        : children}
    </ButtonBoot>
  )
}

export default Button
