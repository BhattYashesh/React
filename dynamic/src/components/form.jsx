import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../components/style.css'

function Form({state,setState}){
      
    // const [state,setState] = useState({
    //     name : "",
    //     email : "",
    //     skill : [""],
    //     hobby : [""]
    //   })

      const handleadd = ()=>{
        setState({
         ...state,
         skill : [...state.skill,""]
        })
     }
     const handleadd2 = ()=>{
        setState({
         ...state,
         hobby : [...state.hobby,""]
        })
     }

     const handleChange = (e)=>{
        const {name,value} = e.target
        setState({...state,[name] : value})
      }

      const handleDelete = (i)=>{
        let arr = [...state.skill]
        arr.splice(i,1)
        setState({...state,skill : arr})
        
      }

      const handleSkill = (e,index)=>{
        let arr = [...state.skill]
        arr[index] = e.target.value
        setState({...state,skill : arr})
        
     }
     const handlehobby = (e,index)=>{
        let arr = [...state.hobby]
        arr[index] = e.target.value
        setState({...state,hobby : arr})
        
     }
     const handleDeletehobby = (i)=>{
        let arr = [...state.hobby]
        arr.splice(i,1)
        setState({...state,hobby : arr})
        
      }


     console.log(state);


    return (
       <>
            <form action="" className='form'><br />
        <TextField
          required
          name='name'
          onChange={handleChange}   
          className='name'
          id="filled-required"
          defaultValue="Name"
          variant="filled"
        /> <br /> <br />

        <TextField
          required
          name='email'
          onChange={handleChange}
          className='email'
          id="filled-required"
          defaultValue="Email"
          variant="filled"
        /> <br /> <br />
    
        <TextField
          name='password'
          onChange={handleChange}
          id="filled-password-input"
          label="Password"
           className='password'
          type="password"
          autoComplete="current-password"
          variant="filled"
        /> <br />
       
       <br />

       

        {
          state.skill.map((el,index)=>{
            return <>
            <TextField
        //   required
          name='skill'
          className='skill'
          id="filled-required"
         label="Skills"
          defaultValue="Skills"
          variant="filled"
          value={el}
          onChange={(e)=>handleSkill(e,index)} 
        /> 
                {/* <input  type='text' name="skill" value={el} placeholder='Skills' onChange={(e)=>handleSkill(e,index)}/> */}
               {state.skill.length > 1 ? <input type="button" className='delete' onClick={()=>handleDelete(index)} value={"delete"} /> : ""} <br /> <br />
            </> 
          })
        } 

       <input type='button' id='btnadd' className='btn btn-secondary' value={"add Skill"} onClick={handleadd}/> <br /><br />
   


       {/* <TextField
          required
          name='hobby'
          onChange={handleChange}
          className='hobby'
          id="filled-required"
          defaultValue="Hobbies"
          variant="filled"
        /> <br /> <br /> */}

{
          state.hobby.map((el,index)=>{
            return <>
            <TextField
        //   required
          name='hobby'
           className='hobby'
          id="filled-required"
         label="Hobby"
          defaultValue="Skills"
          variant="filled"
          value={el}
          onChange={(e)=>handlehobby(e,index)} 
        /> 
                {/* <input  type='text' name="skill" value={el} placeholder='Skills' onChange={(e)=>handleSkill(e,index)}/> */}
               {state.hobby.length > 1 ? <input type="button" className='delete' onClick={()=>handleDeletehobby(index)} value={"delete"} /> : ""} <br /> <br />
            </> 
          })
        } 

       <input type='button' id='btnadd' className='btn btn-secondary' value={"add Hobby"} onClick={handleadd2}/> <br /> <hr />

       <input type="button" id='submit' className='btn btn-secondary' value={"SUBMIT"}/> <br /> <br />
        </form>
     

      
      {/* <div className="output">
        <h2>User Entered Data</h2>
        <p><strong>Name:</strong> {state.name || 'N/A'}</p>
        <p><strong>Email:</strong> {state.email || 'N/A'}</p>
        <p><strong>Skills:</strong></p>
        <ul>
          {state.skill.map((skill, index) => (
            <li key={index}>{skill || 'N/A'}</li>
          ))}
        </ul>
        <p><strong>Hobbies:</strong></p>
        <ul>
          {state.hobby.map((hobby, index) => (
            <li key={index}>{hobby || 'N/A'}</li>
          ))}
        </ul>
      </div> */}

      
      </>
      ); 
}

export default Form;