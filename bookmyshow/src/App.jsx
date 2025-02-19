import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/home'
import { BrowserRouter } from 'react-router-dom'
import Mainroutes from './routes/mainroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Mainroutes></Mainroutes>
      </BrowserRouter>
    </>
  )
}

export default App
