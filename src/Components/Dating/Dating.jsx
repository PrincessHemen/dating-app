import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';
import './Dating.css';
import axios from '../axios'; // Import the Axios instance

const Dating = forwardRef((props, ref) => {
  const [people, setPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get('/api/data'); // Fetch data from the API
        setPeople(req.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useImperativeHandle(ref, () => ({
    handleSwipe: (action) => {
      switch (action) {
        case 'repeat':
          setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
          break;
        case 'left':
          console.log(`Skipped: ${people[currentIndex].name}`);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
          break;
        case 'star':
          console.log(`Favorited: ${people[currentIndex].name}`);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
          break;
        case 'favorite':
          console.log(`Matched: ${people[currentIndex].name}`);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
          break;
        case 'lightning':
          console.log(`Super liked: ${people[currentIndex].name}`);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
          break;
        default:
          break;
      }
    }
  }));

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.length > 0 && (
          <motion.div
            key={people[currentIndex]._id} // Use _id from MongoDB as the key
            className="swipe"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 200, y: 0 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={(event, info) => {
              if (info.point.x > 100) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
              } else if (info.point.x < -100) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
              }
            }}
          >
            <div
              style={{ backgroundImage: `url(${people[currentIndex].imgUrl})` }}
              className="card"
            >
              <div className="cardContent">
                <h3>{people[currentIndex].name}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
});

export default Dating;
