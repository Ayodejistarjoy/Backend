
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import {Route,Routes} from 'react-router-dom'

function App() {
  
    
  return (
    <>
     <Routes>
        <Route path='/' element={<Signup/>}/>
       <Route path='/signin' element={<Signin/>}/>
     </Routes>
    </>
  )
}

export default App
