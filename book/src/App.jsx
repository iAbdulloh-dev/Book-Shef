import Home from './pages/Home/Home'
import {Routes, Route} from "react-router-dom"
import Signup from './pages/registration/Signup'
import Signin from './pages/registration/Signin'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='signin' element={<Signin/>}/>
     </Routes>
    </div>
  )
}

export default App