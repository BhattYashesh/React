import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../component/navbar';
import Mainform from '../pages/mainform';
import Editform from '../pages/editform';

function Mainroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/form" element={<Mainform></Mainform>}></Route>
        <Route path="/editform/:id" element={<Editform></Editform>}></Route>
    </Routes>
  )
}

export default Mainroutes;
