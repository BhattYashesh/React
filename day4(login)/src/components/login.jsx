import { useState } from "react";
import styles from "./new.module.css"


 function Login()
 {
    const [state,setstate]= useState(true)
    const [username,setusrname]= useState("")
    const [email,setemail]= useState("")
    const [password,setpassword]= useState("")

    const [ans,setans]= useState([])

     const handlesign = ()=>{
       
        let obj = {
            username,
            email,
            password
     }

        setans([...ans,obj]);
        setusrname("");
     setemail("");
     setpassword("");
     }
     
       console.log(ans);
      

       const [loginemail,setlogemail]= useState("")
       const [loginpassword,setlogpassword]= useState("")

       const handlelogin = () =>{
      
          let final = ans.filter((el)=> el.email == loginemail && el.password == loginpassword);
        
            if( final.length > 0)
            {
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                  });
                setlogemail("")
                setlogpassword("")
            }
            // else if(el.email != loginemail)
            // {
            //     alert("Email is not registered");
            // }
            // else if(el.password != loginpassword)
            // {
            //     alert("Paaword is incorrect");
            // }
            // else if(el.email != loginemail && el.password != loginpassword)
            // {
            //     alert("Invalid email and password.");;
            // }
            else {
                let emailCheck = ans.filter((el) => el.email == loginemail);
                let passwordCheck = ans.filter((el) => el.password == loginpassword);

                if (emailCheck.length == 0 && passwordCheck.length == 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Invalid email and password.",
                      });
                } else if (emailCheck.length == 0) {
                    
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email is not registered.",
                      });
                } else if (passwordCheck.length == 0) {
                   
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Password is incorrect.",
                      });
                }
            }
          
       }


    return(
        <>
        {state==true ?
       <div className={styles.signupcontainer}>
       <form className={styles.signupform}>
           <h2>Login Page</h2>
           <div className={styles.formgroup}>
               <label for="email">Email</label>
               <input type="email" value={loginemail} id="email" name="email" placeholder="Enter your email" required onChange={(e)=>{setlogemail(e.target.value)}}/>
           </div>
           <div className={styles.formgroup}>
               <label for="password">Password</label>
               <input type="password" value={loginpassword} id="password" name="password" placeholder="Enter your password" required onChange={(e)=>{setlogpassword(e.target.value)}}/>
           </div>
          
           <button type="button" onClick={handlelogin}>Login</button>
           <p onClick={()=>{setstate(false)}} className={styles.p}>Create An Account ?</p>
       </form>
   </div>
          :
          
          <div className={styles.signupcontainer}>
          <form className={styles.signupform}>
              <h2>Create Your Account</h2>
              <div className={styles.formgroup}>
                  <label for="username">Username</label>
                  <input value={username} type="text" id="username" name="username" placeholder="Enter your username" required onChange={(el)=>{setusrname(el.target.value)} }/>
              </div>
              <div className={styles.formgroup}>
                  <label for="email">Email</label>
                  <input type="email" value={email} id="email" name="email" placeholder="Enter your email" required onChange={(el)=>{setemail(el.target.value)} }/>
              </div>
              <div className={styles.formgroup}>
                  <label for="password">Password</label>
                  <input type="password" value={password} id="password" name="password" placeholder="Enter your password" required onChange={(el)=>{setpassword(el.target.value)} }/>
              </div>
             
              <button type="button" onClick={handlesign}>Sign Up</button>
              <p onClick={()=>{setstate(true)}} className={styles.p}>already login ? go to login page</p>
          </form>
      </div>
          
          
        
 }
        </>
    )
 }
 

 export default Login;