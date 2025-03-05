import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseconfig'
import { doc, getDoc } from 'firebase/firestore';

export default function dashboard() {
    const [uid,setuid]=useState("");
    const [record,setrecord]=useState("");

    useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setuid(user.uid)
            }
        })
    },[])
    console.log(uid);

    useEffect(()=>{
      if(uid){
        fetchUser()
      }
    },[uid])

    const fetchUser = async ()=>{
      await getDoc(doc(db,"Users",uid)).then((res)=>{
        let data = res.data()
        setrecord(data)
      })
    }
    

  return (
    // <div>
    //    <h1>DASHBOARD</h1>
    //    <h3>{record.name}</h3>
    //    <h3>{record.email}</h3>
    // </div>
    <>
     <h1>Users :-</h1><br />
    <div className="card bg-dark" style={{ width: "18rem" ,  boxShadow: "0 4px 8px rgba(147, 145, 145, 0.1)",
    borderRadius: "20px", marginLeft: "20px"}}>
  <div className="card-body">
  <img src="3135715.png" alt="" className="" /><br/>
    <h5 className="card-title text-light text-center ms-3">{record.name}</h5>
    <p className="card-text text-light text-center ms-4">{record.email}</p>
  </div>
</div>
</>
  )
}
