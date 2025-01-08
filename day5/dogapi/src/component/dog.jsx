import { useEffect, useState } from "react";
import './new.css'
function Dog()
{
    const [ans,setans]=useState("");
    
    useEffect(()=>{
       fetchdog()
    },[])
    function fetchdog ()
    {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((res)=>{
           
            setans(res.message)
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
   
   return(
    <>
       <button onClick={fetchdog} className="button">Change</button>
       
       
                  <div className="dog">
                    <img src={ans} alt="" />
                    
                  </div>
                
          
    </>
   )
}

export default Dog;