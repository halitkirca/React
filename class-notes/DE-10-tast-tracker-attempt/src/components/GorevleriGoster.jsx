import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({tasks, getTasks}) => {

  const deleteTask = (id) => {
    tasks =  tasks.filter((item) => item.id != id)
    getTasks(tasks);
  }

  return (
    <div>
      {tasks.map(({id, text, day, bitti}) => {
        return (
          <div
          className={{bitti} ? "gorev done" : "gorev"}
          key={id}
          >
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
              
               onClick={() => deleteTask(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
