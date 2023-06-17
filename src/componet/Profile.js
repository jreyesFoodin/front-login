const Profile = () => {
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const logOut = () => {
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
    window.location.reload()
  }
  return (
    <div className='modal-content rounded-4 shadow'>
      <div className='modal-header p-5 pb-4 border-bottom-0'>
        <h1 className='fw-bold mb-0 fs-2'>Profile</h1>
      </div>
      <div className='modal-body p-5 pt-0'>
        <div className='row'>
          <div class='col-lg-12'>
            <svg class='bd-placeholder-img rounded-circle' width='140' height='140' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='var(--bs-secondary-color)' /></svg>
            <h2 class='fw-normal'>{user?.name} {user?.lastName} {user?.secondLastName}</h2>
            <p>Telefono: {user?.phone}</p>
            <p>Email: {user?.email}</p>
            <p><a class='btn btn-secondary' href='#' onClick={() => logOut()}>Salir</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
