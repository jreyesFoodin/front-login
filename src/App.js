import Login from './componet/Login'
import Register from './componet/Register'
import { useState } from 'react'
import Profile from './componet/Profile'
function App () {
  const token = JSON.parse(window.sessionStorage.getItem('token'))
  const [loginView, setLoginView] = useState(true)
  return (
    <div class='modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5' tabindex='-1' role='dialog' id='modalSignin'>
      <div class='modal-dialog' role='document'>
        {!token
          ? (loginView
              ? <Login setLoginView={setLoginView} />
              : <Register setLoginView={setLoginView} />)
          : <Profile />}
      </div>
    </div>
  )
}

export default App
