import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [movielist, setMovielist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("asc");

  const navigate = useNavigate();

  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("Student"));
    // if (!Array.isArray(data)) {
    //   data = []; // Ensure it's always an array
    // }
    // console.log("Loaded movies:", data); // Debugging
    // setMovielist(data);
    let data = JSON.parse(localStorage.getItem("Student")) || [];
    console.log("Loaded movies:", data); // Debugging
    setMovielist(data);
  }, []);

  const handleDelete = (userId) => {
    let updatedList = movielist.filter((item) => item.id !== userId);
    setMovielist(updatedList);
    localStorage.setItem("Student", JSON.stringify(updatedList));
  };

  const handleEdit = (userId) => {
    let singleData = movielist.find((item) => item.id === userId);
     navigate("/form", { state: { singleData } });
  };

  const filteredData = cat === "all"
    ? movielist
    : movielist.filter((item) => item.category?.toLowerCase().includes(cat.toLowerCase()));

  const searchedMovies =
    searchTerm.trim() === ""
      ? filteredData
      : filteredData.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.img?.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const sortedMovies = [...searchedMovies].sort((a, b) => {
    const nameA = a.name  // Handle undefined name values
    const nameB = b.name 
    return sort === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="features w-100">
        <div className="card p-4 w-100 border-0">
          <div>
            <button className="btn btn-primary me-2" onClick={() => setSort('asc')}>Sort A-Z</button>
            <button className="btn btn-danger" onClick={() => setSort('desc')}>Sort Z-A</button>
          </div>
          <div className="container1 w-25">
            <label className="form-label">Select Category:</label>
            <select className="form-select" id="categorySelect" onChange={(e) => setCat(e.target.value)}>
              <option disabled defaultValue="all">Choose a category</option>
              <option value="all">All Categories</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="thriller">Thriller</option>
              <option value="comedy">Comedy</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className="d-flex justify-content-center w-100"><img src="slider1.jpg" alt="Slider 1" /></div></SwiperSlide>
        <SwiperSlide><div className="d-flex justify-content-center w-100"><img src="slider2.jpg" alt="Slider 2" /></div></SwiperSlide>
        <SwiperSlide><div className="d-flex justify-content-center w-100"><img src="slider3.jpg" alt="Slider 3" /></div></SwiperSlide>
      </Swiper>

      {/* Movie Cards Section */}
      <div className="container mt-4">
        {sortedMovies.length > 0 ? (
          <Swiper slidesPerView={5} spaceBetween={2} pagination={{ clickable: true }} modules={[Pagination]}>
            {sortedMovies.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card border-2 col-xl-11">
                  <img src={item.img || "placeholder.jpg"} className="card-img-top" alt={item.name || "No Title"} />
                  <div className="card-body">
                    <h5 className="text-bold text-dark" style={{ height: "50px" }}>{item.name || "Untitled"}</h5>
                    <p>{item.category || "Unknown"}</p>
                    <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>Delete</button>
                    <Link to={`/editform/${item.id}`} className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-muted text-center">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
