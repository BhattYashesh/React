import React from 'react'
import '../components/style.css'
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Show({ state }) {
  return (
    <div className="output">
    <h2>User Entered Data</h2>
    <p><strong>Name:</strong> {state.name }</p>
    <p><strong>Email:</strong> {state.email }</p>
    <p><strong>Skills:</strong></p>
    <ul>
      {state.skill.map((skill, index) => (
        <li key={index}>{skill }</li>
      ))}
    </ul>
    <p><strong>Hobbies:</strong></p>
    <ul>
      {state.hobby.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  </div>
  )
}

export default Show;
