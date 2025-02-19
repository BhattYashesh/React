import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';

function editform() {

    const {id} = useParams();
    const [data, setData] = useState(null)
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem("Student")) || [])
    
    const navigate = useNavigate();

  

    useEffect(()=>{
        setData(local.find((item)=>item.id === id));
    },[id, local]);
    
    const handleChange = (e) =>
    {
        const {name,value} = e.target;
        //  setData({...data,[name]:value})
        setData((prevData) => ({ ...prevData, [name]: value }));
    }
    
    // const handleEdit = (userId) =>
    // {
    //     let singleData = local.find((item)=>item.id == userId)
    //     setimg(singleData.img)
    //     setname(singleData.name)
    //     setcategory(singleData.category)
    //     setEditIndex(userId)
    //     localStorage.setItem("Student" ,JSON.stringify(local))
    //     navigate("/");
    // }

    useEffect(() => {
        const existingData = local.find((item) => item.id == id);
        if (existingData) {
            setData(existingData);
        }
    }, [id, local]);

    const handleEdit = (userId) => {
       
        let updatedLocal = local.map((item) =>
            item.id == userId ? { ...item, img: data.img, name: data.name, category: data.category } : item
        );

     

        setLocal(updatedLocal);
        localStorage.setItem("Student", JSON.stringify(updatedLocal));
        navigate("/");
    };

    return (
        <div>
            <div className="form-container">
                <h3 className="text-center">Add Movie</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Movie Image</label>
                        <input type="text" className="form-control" name='img' onChange={(e)=>handleChange(e)} id="input1" placeholder="Enter Movie Image" value={data ? data.img : ""}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Movie Name</label>
                        <input type="text" className="form-control" name='name' onChange={(e)=>handleChange(e)} id="input2" placeholder="Enter Movie Name" value={data ? data.name : ""}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Movie Category</label>
                        <input type="text" className="form-control" name='category' onChange={(e)=>handleChange(e)} id="input3" placeholder="Enter Movie Category" value={data ? data.category : ""}></input>
                    </div>
                    <button type="submit" className="btn btn-primary w-100"  onClick={() => handleEdit(id)}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default editform;