    import React from "react";
import { useState } from "react";
import styles from './new.module.css'
import Counter2 from './counter2';
import Counter3 from './counter3'
    function Counter()
    {
         let [state,setstate]= useState(0);

             const handleinc=()=>{
                setstate(state+1);
                console.log(state);
                
             }

             const handledec=()=>{
                 if(state>0)
                 {
                    setstate(state-1);
                    console.log(state);
                 }
                 else{
                    alert("zero is minimum value") ;
                 }
                
             }
        return (
            <>
             <button onClick={handleinc} className={styles.inc}>Inc</button>
             <div className={styles.maindiv}>
            <h1 className={styles.counter1}>{state}</h1>
            <Counter2 yashesh={state}></Counter2>
            <Counter3 bhatt={state}></Counter3>
            </div>
            <button onClick={handledec} className={styles.dec}>Dec</button>

           </>
        )
    }

    export default Counter;