import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router';
import Navbar from '../component/Navbar';
import Home from '../../Pages/Home';
import Form from '../../Pages/Form';
function Mainroutes() {
    return (
       
            <Routes>
                <Route path='/Navbar' element={<Navbar></Navbar>}></Route>
                <Route path='/form' element={<Form></Form>}></Route>
                <Route path='/' element={<Home></Home>}></Route>
            </Routes>
       
    )
}

export default Mainroutes;
