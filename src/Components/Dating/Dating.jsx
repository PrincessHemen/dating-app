import React from 'react';
import { motion } from 'framer-motion';
import './Dating.css';

const Dating = () => {
  const [people, setPeople] = React.useState([
    {
      name: "Random Guy",
      imgUrl: "https://images.unsplash.com/photo-15204063400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
    },
    {
      name: "Another Guy",
      imgUrl: "https://images.unsplash.com/photo-15190af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Random Girl",
      imgUrl: "https://images.unsplash.com/photo-14947be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Another Girl",
      imgUrl: "https://images.unsplash.com/photo-15294ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ]);

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
            key={person.name}
            className="swipe"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 200, y: 0 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 200 }}
            onDragEnd={(event, info) => {
              if (info.active) {
                // drag was cancelled
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
