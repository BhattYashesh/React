import './home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from '../src/component/Navbar';

function Home() {
    const API_URL = "http://localhost:3000/user";
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = async () => {
        const response = await axios.get(API_URL);
        setHotels(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchHotels();
    };

    const handleEdit = (hotel) => {
      navigate('/form', { state: { hotel } }); // Pass hotel data to Form page
  };

   

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Registered Hotels</h2>
                <div className="hotel-list">
                    {hotels.map((hotel) => (
                        <div className="hotel-card" key={hotel.id}>
                            <img src={hotel.img} alt={hotel.name} className="hotel-image" />
                            <div className="hotel-details">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.rating} ⭐</p>
                                <div className="hotel-actions">
                                    <button className="edit-btn" onClick={() => handleEdit(hotel)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(hotel.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
