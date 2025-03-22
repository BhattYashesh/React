import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate, useLocation } from 'react-router-dom';

const API_URL = "http://localhost:3000/user";

function Form() {
    const navigate = useNavigate();
    const location = useLocation();
    const editingHotel = location.state?.hotel || null;

    const [name, setName] = useState(editingHotel ? editingHotel.name : "");
    const [img, setImg] = useState(editingHotel ? editingHotel.img : "");
    const [rating, setRating] = useState(editingHotel ? editingHotel.rating : "");

    useEffect(() => {
        if (editingHotel) {
            setName(editingHotel.name);
            setImg(editingHotel.img);
            setRating(editingHotel.rating);
        }
    }, [editingHotel]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hotelData = { name, img, rating };

        if (editingHotel) {
            await axios.put(`${API_URL}/${editingHotel.id}`, hotelData);
        } else {
            await axios.post(API_URL, hotelData);
        }

        navigate('/'); 
    };

    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <h2>{editingHotel ? "Edit Hotel" : "Hotel Registration"}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="hotelImage" className="form-label">Upload Hotel Image</label>
                            <input type="text" placeholder='Enter Hotel Image URL' className="form-control" id="hotelImage"
                                onChange={(e) => setImg(e.target.value)} value={img} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelName" className="form-label">Hotel Name</label>
                            <input type="text" className="form-control" id="hotelName" placeholder="Enter hotel name"
                                onChange={(e) => setName(e.target.value)} value={name} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="hotelRating" className="form-label">Hotel Rating</label>
                            <select className="form-select" id="hotelRating" required
                                onChange={(e) => setRating(e.target.value)} value={rating}>
                                <option value="" disabled>Select rating</option>
                                <option value="1">⭐ 1 Star</option>
                                <option value="2">⭐⭐ 2 Stars</option>
                                <option value="3">⭐⭐⭐ 3 Stars</option>
                                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-submit">
                            {editingHotel ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
