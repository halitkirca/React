import { useState, useEffect } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {

  const [tasks, setTasks] = useState([]);
  
  const getTasks = (list) => {
    setTasks(list);
  }

  useEffect(()=> {getTasks(Data)}, []);

  const postTask = (newTask) => {
    tasks.push(newTask);
    console.log(tasks);
    getTasks(tasks);
  }

  return (
    <div>
      <GorevEkle tasks={tasks} postTask={postTask}/>

      <GorevleriGoster  tasks={tasks} getTasks={getTasks}/>
    </div>
  );
};

export default Home;
