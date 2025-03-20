import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebaseconfig'
import { doc, getDoc, addDoc, collection, deleteDoc, getDocs, updateDoc } from 'firebase/firestore';
import { data } from 'react-router-dom';
import './sign.css'

export default function dashboard() {
  const [uid, setuid] = useState("");
  const [record, setrecord] = useState("");
  const [allRecord, setAllRecord] = useState("");
  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")
  const [EditIndex, setEditIndex] = useState(null)

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuid(user.uid)
      }
    })
  }, [])
  console.log(uid);

  useEffect(() => {
    if (uid) {
      fetchUser()
      fetchData();
    }
  }, [uid])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", uid)).then((res) => {
      let data = res.data()
      setrecord(data)
    })
  }

  const fetchData = async () => {
    await getDocs(collection(db, "Tasks")).then((data) => {
      let allData = data.docs.map((e, i) => ({ docID: e.id, ...e.data() }))
      setAllRecord(allData);
    })
  }

  const addTask = async () => {
    if (EditIndex == null) {
      await addDoc(collection(db, "Tasks"), { userID: uid, task, priority }).then((res) => {
        console.log(res);
        fetchData();
        // setAllRecord([...allRecord, { userID: uid, task, priority }]);
      })
    }
    else {
      await updateDoc(doc(db, "Tasks", EditIndex), { task, priority }).then(() => {
        fetchData()
      })
    }
    setTask("")
    setPriority("")
    setEditIndex(null)
  }

  const handleDelete = async (docID) => {
    await deleteDoc(doc(db, "Tasks", docID)).then(() => {
      let filterdata = allRecord.filter((item) => item.docID != docID)
      fetchData(); 
      // setAllRecord(filterdata);
    })
  }

  const handleEdit = (docID) => {
    let singledata = allRecord.find((item) => item.docID == docID)
    setTask(singledata.task)
    setPriority(singledata.priority)
    setEditIndex(docID)
  }


  return (
    // <div>
    //    <h1>DASHBOARD</h1>
    //    <h3>{record.name}</h3>
    //    <h3>{record.email}</h3>
    // </div>
    <>
      <h1>Users :-</h1><br />
      <div className="card bg-dark" style={{
        width: "18rem", boxShadow: "0 4px 8px rgba(147, 145, 145, 0.1)",
        borderRadius: "20px", marginLeft: "20px"
      }}>
        <div className="card-body">
          <img src="3135715.png" alt="" className="" /><br />
          <h5 className="card-title text-light text-center ms-3">{record.name}</h5>
          <p className="card-text text-light text-center ms-4">{record.email}</p>
        </div>
      </div><br />

      <input type="text" className='ms-2' style={{borderRadius:"20px"}} placeholder=' enter the task' value={task} onChange={(e) => setTask(e.target.value)} /> 
      <select value={priority} onChange={(e) => { setPriority(e.target.value) }} className='ms-2 mt-2'>
        <option hidden>Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select> 
      <button className='ms-2 mt-2 border-0 bg-success text-light' onClick={addTask}>{EditIndex == null ? "Add Task" : "Update Task"}</button>

      {
        allRecord && allRecord.map((e, i) => {
          return <div className='task text-light'> <ul key={i}>
            <li>{e.userID}</li>
            <li>{e.task}</li>
            <li>{e.priority}</li> <br />
            <button className='bg-warning text-light border-0' onClick={() => handleEdit(e.docID)}>Edit</button>
            <button className='ms-2 bg-danger text-light border-0' onClick={() => handleDelete(e.docID)}>Delete</button>
          </ul></div>
        })
      }
    </>
  )
}
