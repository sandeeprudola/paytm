
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from '../pages/Signup'
import { Signin } from '../pages/Signin'
import { Dashboard } from '../pages/Dashboard'
import { Sendmoney } from '../pages/Sendmoney'
import { Landing } from '../pages/Landing'

function App() {


  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path='/signin' element={<Signin/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/send' element={<Sendmoney/>}/>
     </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
