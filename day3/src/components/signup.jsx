import { useState } from "react";
import styles from "./new.module.css"

 function Sign ()
 {
     const [state,setstate]= useState(true)
    return(
        <>
        {state==true ?
       <div className={styles.signupcontainer}>
       <form className={styles.signupform}>
           <h2>Login Page</h2>
           <div className={styles.formgroup}>
               <label for="email">Email</label>
               <input type="email" id="email" name="email" placeholder="Enter your email" required />
           </div>
           <div className={styles.formgroup}>
               <label for="password">Password</label>
               <input type="password" id="password" name="password" placeholder="Enter your password" required />
           </div>
           <div className={styles.formgroup}>
               <label for="confirm-password">Confirm Password</label>
               <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
           </div>
           <button type="submit">Login</button>
           <p onClick={()=>{setstate(false)}} className={styles.p}>Create An Account ?</p>
       </form>
   </div>
          :
          
          <div className={styles.signupcontainer}>
          <form className={styles.signupform}>
              <h2>Create Your Account</h2>
              <div className={styles.formgroup}>
                  <label for="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Enter your username" required />
              </div>
              <div className={styles.formgroup}>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className={styles.formgroup}>
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" required />
              </div>
              <div className={styles.formgroup}>
                  <label for="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
              </div>
              <button type="submit">Sign Up</button>
              <p onClick={()=>{setstate(true)}} className={styles.p}>already login ? go to login page</p>
          </form>
      </div>
          
          
        
 }
        </>
    )
 }

 export default Sign;