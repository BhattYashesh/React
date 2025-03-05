import React, { useState } from 'react'
import { auth, db } from '../firebaseconfig';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './sign.css'

export default function SignUp() {
      const navigate = useNavigate()
       const [name,setname]=useState("");
       const [email,setemail]=useState("")
       const [password,setpassword]=useState("")

     const handlesignup = async ()=>{
          await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
               setDoc(doc(db,"Users",res.user.uid),{name,email})
               navigate("/dashboard")
            })
     }

  return (
    // <div>
    //    <h1>SIGN UP</h1>
    //    <input type="text" placeholder='Enter Your Name'  onChange={(e)=>setname(e.target.value)}/> <br />
    //    <input type="text" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/> <br />
    //    <input type="text" placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)}/> <br /><br />
    //     <button onClick={handlesignup}>SignUp</button>
    //     <Link to={"SignIn"}>SignIn</Link>
    // </div>

    <div className="col-4 border border-2 p-5 ">
            
            <img src="3135715.png" alt="" className="" /><br/><br/>
            <h3 className="text-light text-center">WELCOME</h3><br/>
            <form action="" className='text-center'>
                <input type="text" className="form-control" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}></input><br/>
                <input type="text" className="form-control" placeholder="Enter Your Email" onChange={(e)=>setemail(e.target.value)}></input><br/>
                <input type="text" className="form-control" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}></input><br/>


                <a href="" className="text-decoration-none text-light float-start"> <input type="checkbox" /> <span
                        className="text-light">Remember me</span></a>
                <span className="text-decoration-none text-light float-end">Forget Password</span>
                <br/>
                <br/> <button type='button' className="form-control btn btn-success" onClick={handlesignup}>Sign Up</button><br/><br/>
                <a href="" className="text-decoration-none text-light">Don't have an account ?</a><br/>
                <Link to={"SignIn"} className='text-light text-decoration-none'>SignIn</Link>
            </form>
        </div>
  )
}
