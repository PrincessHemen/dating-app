// components/Dating.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Dating.css';
import axios from '../axios'; // Import the Axios instance

const Dating = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get('/api/data'); // Update the endpoint
        setPeople(req.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <motion.div
            key={person._id} // Use _id from MongoDB as the key
            className="swipe"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 200, y: 0 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={(event, info) => {
              if (info.active) {
                outOfFrame(person.name);
              } else {
                if (info.point.x > 100) {
                  swiped('right', person.name);
                } else if (info.point.x < -100) {
                  swiped('left', person.name);
                }
              }
            }}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <div className="cardContent">
                <h3>{person.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dating;
