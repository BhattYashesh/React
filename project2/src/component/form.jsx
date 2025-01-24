import React, { useState } from 'react'
import Product from './product'

function Form(props) {

    const [img,setimg]=useState("")
    const [name,setname]=useState("")
    const [price,setprice]=useState("")

    const [ans,setans]= useState([])
    const [valid,setValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState(""); 
    const [imgerrorMessage, setimgErrorMessage] = useState("");
    const [priceerrorMessage, setpriceErrorMessage] = useState(""); 
    
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

       const handleBlur = ()=>{
        var usernameRegex = /^[0-9A-Za-z]{3,16}$/
        var imageregex = /^data:image\/(jpeg|png|gif|bmp|webp);base64,([A-Za-z0-9+\/=]+)$/
        var priceregex =/^\d{1,6}(\.\d{1,2})?$/;
        if(usernameRegex.test(name) == false){
           setValid(false)
           setErrorMessage("Title must be of atleast 3 alphanumeric characters.");
        }
        if(imageregex.test(img) == false){
          setValid(false);
          setimgErrorMessage("Please enter a valid image URL (e.g., .png, .jpg, .jpeg).");
       }
       if(priceregex.test(price) == false){
        setValid(false);
        setpriceErrorMessage("Please enter a valid price (e.g., 10, 10.50).");
     }
       
      }

      const handleFocus = ()=>{
        setValid(false)
        setErrorMessage("");
        setimgErrorMessage("");
        setpriceErrorMessage("")
      }
       
  return (
    <>
    {props.data == true ?
    <form action="">
    <div className="form-container w-50 m-auto border border-1  p-4">
      <div class="mb-3">
        <label for="name" class="form-label">IMAGE</label>
        <input type="text" value={img} className="form-control " name='img' id="name" placeholder="Enter product image" required  onChange={(e)=>{setimg(e.target.value)}} onBlur={handleBlur} onFocus={handleFocus}></input>
        {!valid && (
                                <div className="text-danger mt-1">
                                    {imgerrorMessage}
                                </div>
                            )}
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">TITLE</label>
        <input type="text" value={name} className="form-control"  name='title' id="email" placeholder="Enter product title" required onChange={(e)=>{setname(e.target.value)}} onBlur={handleBlur} onFocus={handleFocus}></input>
        {!valid && (
                                <div className="text-danger mt-1">
                                    {errorMessage}
                                </div>
                            )}

      </div>
      <div class="mb-3">
        <label for="password" class="form-label">PRICE</label>
        <input type="text" value={price} class="form-control" name='price' id="password" placeholder="Enter product price " required onChange={(e)=>{setprice(e.target.value)}} onBlur={handleBlur} onFocus={handleFocus}></input>
        {!valid && (
                                <div className="text-danger mt-1">
                                    {priceerrorMessage}
                                </div>
                            )}
      </div>
      <button type="button" class="btn btn-custom w-100 bg-success text-light" onClick={handleform}>Submit</button>
       {/* <form action="">
         <input type="text" placeholder='Enter the image' onChange={(e)=>{setimg(e.target.value)}}/><br></br>
         <input type="text" placeholder='Enter the title' onChange={(e)=>{setname(e.target.value)}}/><br></br>
         <input type="text" placeholder='Enter the price' onChange={(e)=>{setprice(e.target.value)}}/><br></br><br></br>
         <button type='button' onClick={handleform}>submit</button>
       </form> */}
    </div></form>
    : 
    <Product list={ans} />
    }
    </>
  )
}

export default Form;



