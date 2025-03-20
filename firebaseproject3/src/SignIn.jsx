import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth , provider } from '../firebaseconfig';
import { signInWithEmailAndPassword, signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import './sign.css'

export default function SignIn() {

    const navigate = useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
   

    const handlesignin = async ()=>{
        await signInWithEmailAndPassword(auth,email,password).then((res)=>{
            navigate("/dashboard",{replace:true})
        })
    }
    
    const handleGoogleSignIn = async ()=>{
      await signInWithPopup(auth,provider).then((res)=>{
              console.log(res);
              // navigate("/dashboard",{replace:true})
            })
    }

  return (
    // <div>
    //   <h1>SIGN IN</h1>
    //    <input type="text" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/> <br />
    //    <input type="text" placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)}/> <br /><br />
    //     <button onClick={handlesignin}>SignIn</button>
    //     <Link to={"/"}>Sign Up</Link>
    // </div>

    <div className="col-4 border border-2 p-5 mt-5">
            
            <img src="3135715.png" alt="" className="" /><br/><br/>
            <h3 className="text-light text-center">Sign In</h3><br/>
            <form action="" className='text-center'>
                <input type="text" className="form-control" placeholder="Enter Your Email" onChange={(e)=>setemail(e.target.value)}></input><br/>
                <input type="text" className="form-control" placeholder="Enter Your Password" onChange={(e)=>setpassword(e.target.value)}></input><br/>

               <a href="" className="text-decoration-none text-light float-start"> <input type="checkbox" /> <span
                        className="text-light">Remember me</span></a>
                <span className="text-decoration-none text-light float-end">Forget Password</span>
                <br/>
                <br/> <button type='button'  className="form-control btn btn-success" onClick={handlesignin}>Sign In</button><br/><br/>
                <button type='button' className="form-control btn btn-secondary" onClick={handleGoogleSignIn}>Continue With Google ?</button><br/><br />
                <a href="" className="text-decoration-none text-light">Don't have an account ?</a><br/>
                <Link to={"/"} className='text-light text-decoration-none'>SignUp</Link>
            </form>
        </div>
  )
}
