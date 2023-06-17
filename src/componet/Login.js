const Login = ({ setLoginView }) => {
  return (
    <div class='modal-content rounded-4 shadow'>
      <div class='modal-header p-5 pb-4 border-bottom-0'>
        <h1 class='fw-bold mb-0 fs-2'>Inicia session</h1>
      </div>

      <div class='modal-body p-5 pt-0'>
        <form class=''>
          <div class='form-floating mb-3'>
            <input type='email' class='form-control rounded-3' id='floatingInput' placeholder='name@example.com' />
            <label for='floatingInput'>Email</label>
          </div>
          <div class='form-floating mb-3'>
            <input type='password' class='form-control rounded-3' id='floatingPassword' placeholder='Password' />
            <label for='floatingPassword'>Password</label>
          </div>
          <button class='w-100 mb-2 btn btn-lg rounded-3 btn-primary' type='submit'>Ingresar</button>
          <hr class='my-4' />
          <button class='w-100 py-2 mb-2 btn btn-outline-secondary rounded-3' type='submit' onClick={() => setLoginView(false)}>
            Registrate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
