const Alert = ({ message, alertColor }) => {
  return (
    <div className={`alert ${alertColor}`} role='alert'>
      {message}
    </div>
  )
}

export default Alert
