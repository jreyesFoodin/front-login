import Login from './componet/Login'
import Register from './componet/Register'
import { useState } from 'react'
function App () {
  // const token = ''
  const [loginView, setLoginView] = useState(false)
  return (
    <div class='modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5' tabindex='-1' role='dialog' id='modalSignin'>
      <div class='modal-dialog' role='document'>
        {loginView
          ? <Login setLoginView={setLoginView} />
          : <Register setLoginView={setLoginView} />}
      </div>
    </div>
  )
}

export default App
