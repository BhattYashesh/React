import { useState } from 'react'
import Form from './components/form'
import Show from './components/show'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import './App.css'
import './components/style.css'

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState({
    name: "",
    email: "",
    skill: [""],
    hobby: [""],
  });

  return (
    <>
    <div className='main'>
      <Form state={state}  setState={setState} ></Form>
      <Show state={state}></Show>
      </div>
    </>
  )
}

export default App
