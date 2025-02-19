import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ setSearchTerm }) {
  const [term, setTerm] = useState("");
  const [record, setRecord] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    setRecord(data)
  }, [])

  const searchedData =
    term.trim() === ""
      ? [] // 👈 Don't show anything if search is empty
      : record.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );

  useEffect(() => {
    setSearchTerm(term);
  }, [term, setSearchTerm]);
  return (
    <>
      <header>
        <div className='header d-flex justify-content-evenly align-item-center'>
          <div className="img  ">
            <img src={"logo.png"} alt="" className='' />
          </div>
          <div className="search">
            <i
              className="fa-solid fa-magnifying-glass fa-sm"
              style={{ color: "#0d0d0d" }}
            ></i>
            <input type="text" onChange={(e) => setTerm(e.target.value)} placeholder='  Search for Movies,Events,Plays,Sports and Activities' className='inputsearch border border-0 border-dark' />
            {
              searchedData.map((e, i) => {
                return <div id='key'>
                  <p key={i} className='key ms-5 bg-dark text-light'>{e.name} - {e.category} </p>
                </div>
              })
            }
          </div>
          <div className="add">
            <Link to={"/form"} className='link'>Add Movie</Link>
          </div>
          <div className='sign'>
            <button>Sign in</button>
          </div>
          <div className='bar'>
            <i className="fa-solid fa-bars fa-lg" style={{ color: "#0d0d0d" }}></i>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar;
