import React from 'react'
import  {useEffect,useState} from 'react';
import Navbar from '../component/navbar';
import './mainform.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
function Mainform() {

  const [img,setimg]= useState("")
  const [name,setname]= useState("")
  const [category,setcategory]=useState("")

  const Navigate = useNavigate()
  const allData = useLocation()
  console.log(allData);
  
  const [record,setRecord]=useState([]);

  const[editIndex,setEditIndex]=useState(null);

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("Student") ) || [];
    setRecord(data)
  }, [])

  const handleSubmit = () =>{

    // if(editIndex == null){
    //   let obj = {id:Date.now(),img,name,category}
    //   setRecord([...record,obj]);
    //   localStorage.setItem("Student" , JSON.stringify([...record,obj]));
    //  }

    //  else{
    //   let singleData=record.find((item)=>item.id == editIndex);
    //   singleData.id = editIndex;
    //   singleData.img= img;
    //   singleData.name=name;
    //   singleData.category=category;
    //   localStorage.setItem("Student" ,JSON.stringify(record))
    //  }

     let obj = {id:Date.now(),img,name,category}
      setRecord([...record,obj]);
      localStorage.setItem("Student" , JSON.stringify([...record,obj]));

     setimg("")
       setname("")
       setcategory("")

       Navigate("/")

  }

  // const handleDelete = (userId)=>{
  //   let data= record.filter((item)=>item.id != userId)
  //   setRecord(data);
  //   localStorage.setItem("Student", JSON.stringify(data))
  // }

  // const handleEdit = (userId) => {
  //   let singleData = record.find((item)=>item.id == userId)
  //   setimg(singleData.img)
  //   setname(singleData.name)
  //   setcategory(singleData.category)
  //   setEditIndex(userId)
  // }


  return (
     <>
    <div>
     
    </div> <br />
      <div className="form-container">
        <h3 className="text-center">Add Movie</h3>
        <form>
            <div className="mb-3">
                <label className="form-label">Movie Image</label>
                <input type="text" className="form-control" id="input1" placeholder="Enter Movie Image" value={img} onChange={(e)=>setimg(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Movie Name</label>
                <input type="text" className="form-control" id="input2" placeholder="Enter Movie Name" value={name} onChange={(e)=>setname(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Movie Category</label>
                <input type="text" className="form-control" id="input3" placeholder="Enter Movie Category" value={category} onChange={(e)=>setcategory(e.target.value)}></input>
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">{editIndex == null ? "Submit" : "Update"}</button>
        </form>
        </div>
            <br />
        {/* <table border="1" width="50%">
        <thead>
            <tr >
                <th>image</th>
                <th>name</th>
                <th>Category</th>
                <th colSpan={2}>Events</th>
            </tr>
        </thead>
        <tbody>
            {
                record ? 
                record.map((e,i)=>{
                    return(
                        <tr key={i}>
                            <td ><img src={e.img} alt="Movie Poster" width="100" height="100" /></td>
                            <td>{e.name}</td>
                            <td>{e.category}</td>
                            <td>
                                <button onClick={()=>handleEdit(e.id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }) : 
                <tr>
                    <td><span>Loading....</span></td>
                    
                </tr>
            }
        </tbody>
      </table>
    */}
    </>
  )
}

export default Mainform;
