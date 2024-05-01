
import './App.css'
import Signin from './Component/Signin'
import Signup from './Component/Signup'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
