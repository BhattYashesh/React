import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Form from './component/form'
import Product from './component/product'

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
       <header className='m-auto w-25'><br />
       <button type="button" className="btn btn-primary ms-5" onClick={()=>{setCount(true)}}>Form</button>
       <button type="button" class="btn btn-info ms-5 text-light" onClick={()=>{setCount(false)}}>Products</button>
       </header><br />
      <Form data={count}></Form>
      
    </>
  )
}

export default App
