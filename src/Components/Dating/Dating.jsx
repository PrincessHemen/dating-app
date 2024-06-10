import React from 'react';
import { motion } from 'framer-motion';
import './Dating.css';

const Dating = () => {
  const [people, setPeople] = React.useState([
    {
      name: "Random Guy",
      imgUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1395&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Another Guy",
      imgUrl: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Random Girl",
      imgUrl: "https://images.unsplash.com/photo-1523912277209-5fd38d4d667e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Another Girl",
      imgUrl: "https://images.unsplash.com/photo-1589156215870-a324614b3fff?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
