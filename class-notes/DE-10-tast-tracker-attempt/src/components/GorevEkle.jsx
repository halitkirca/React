import { useState } from "react";

const GorevEkle = ({postTask, tasks}) => {
  
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");

  const add = (e) => {
  e.preventDefault();
  postTask({
    id: tasks.length + 1,
    text: taskName,
    day: date,
    bitti: false,
  });
}
 
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          
        >
           ADD TASK BAR
        </button>
      </header>
        <form onSubmit={add}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
             onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              placeholder="Add Task"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      
    </div>
  );
};

export default GorevEkle;
