import React, { useState } from 'react'
import Product from './product'

function Form(props) {

    const [img,setimg]=useState("")
    const [name,setname]=useState("")
    const [price,setprice]=useState("")

    const [ans,setans]= useState([])
   
    const handleform=()=>{
        let obj ={
            img,
            name,
            price
        }
        
        setans([...ans,obj])
        setimg("");
        setname("");
        setprice("");

    }
       console.log(ans);
       
  return (
    <>
    {props.data == true ?
    <div className="form-container w-50 m-auto border border-1  p-4">
      <div class="mb-3">
        <label for="name" class="form-label">IMAGE</label>
        <input type="text" value={img} className="form-control " id="name" placeholder="Enter product image" required  onChange={(e)=>{setimg(e.target.value)}}></input>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">TITLE</label>
        <input type="text" value={name} class="form-control" id="email" placeholder="Enter product title" required onChange={(e)=>{setname(e.target.value)}}></input>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">PRICE</label>
        <input type="text" value={price} class="form-control" id="password" placeholder="Enter product price " required onChange={(e)=>{setprice(e.target.value)}}></input>
      </div>
      <button type="button" class="btn btn-custom w-100 bg-success text-light" onClick={handleform}>Submit</button>
       {/* <form action="">
         <input type="text" placeholder='Enter the image' onChange={(e)=>{setimg(e.target.value)}}/><br></br>
         <input type="text" placeholder='Enter the title' onChange={(e)=>{setname(e.target.value)}}/><br></br>
         <input type="text" placeholder='Enter the price' onChange={(e)=>{setprice(e.target.value)}}/><br></br><br></br>
         <button type='button' onClick={handleform}>submit</button>
       </form> */}
    </div>
    : 
    <Product list={ans} />
    }
    </>
  )
}

export default Form;
