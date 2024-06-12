import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [workshop, setWorkshop] = useState({
    clubName: '',
    createdAt: '',
    date: '',
    description: '',
    location: '',
    price: '',
    workshopName: ''
  });

  const clubNames = ["IOT", "Electronics", "Robotics", "AI", "Programming"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkshop(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkshop = {
      ...workshop,
      createdAt: new Date().toISOString()
    };

    try {
      await axios.post('https://student-portal-69b08-default-rtdb.asia-southeast1.firebasedatabase.app/workshops.json', newWorkshop);
      alert('Workshop added successfully!');
    } catch (error) {
      console.error('Error adding workshop:', error);
      alert('Failed to add workshop.');
    }
  };

  return (
    <div className="admin-container">
      <h2>Add a New Workshop</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clubName">Club Name</label>
          <select id="clubName" name="clubName" value={workshop.clubName} onChange={handleChange} required>
            <option value="">Select Club</option>
            {clubNames.map(club => (
              <option key={club} value={club}>{club}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="workshopName">Workshop Name</label>
          <input type="text" id="workshopName" name="workshopName" value={workshop.workshopName} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" cols="68"value={workshop.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={workshop.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" value={workshop.location} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={workshop.price} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Add Workshop</button>
      </form>
    </div>
  );
};

export default Admin;
