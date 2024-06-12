// Workshops.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card.js'
import Modal from '../Model/Model.js';

function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  useEffect(() => {
    axios.get('https://student-portal-69b08-default-rtdb.asia-southeast1.firebasedatabase.app/workshops.json')
      .then(response => {
        const data = response.data;
        if (data) {
          const formattedData = Object.values(data).map(item => ({
            clubName: item.clubName,
            workshopName: item.workshopName,
            description: item.description,
            date: item.date,
            location: item.location,
            price: item.price,
          }));
          setWorkshops(formattedData);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleCardClick = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const handleCloseModal = () => {
    setSelectedWorkshop(null);
  };

  return (
    <div>
      {workshops.map((workshop, index) => (
        <Card
          key={index}
          clubName={workshop.clubName}
          workshopName={workshop.workshopName}
          onClick={() => handleCardClick(workshop)}
        />
      ))}
      <Modal
        isVisible={!!selectedWorkshop}
        onClose={handleCloseModal}
        workshop={selectedWorkshop}
      />
    </div>
  );
}

export default Workshops;
