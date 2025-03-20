import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import dashboard from './dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
           <Routes>
              <Route path='/' Component={SignUp}></Route>
              <Route path='/SignIn' Component={SignIn}></Route>
              <Route path='/dashboard' Component={dashboard}></Route>
           </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
