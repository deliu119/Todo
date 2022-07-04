import React, { useState, useEffect } from "react";
import DefaultButton from "../DefaultButton/defaultButton";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localTasks")){
        
          let now = { currentTime: new Date().toLocaleString() };
          let oneDay = 60 * 60 * 24 * 1000;

          const storedList = JSON.parse(localStorage.getItem("localTasks"));
          let newStoredList = storedList.filter((task)=>{
            let compareDates = (now - task?.date?.currentTime) > oneDay;
            if(!compareDates){
              return task;
            }
          })
          setTasks(newStoredList);
      }
  },[])

  const addTask = (e) => {
    if (task) {
      let date = { currentTime: new Date().toLocaleString() };
      const newTask = { id: new Date().getTime().toString(), title: task, date: date };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
      const deleted = tasks.filter((taskToDelete)=>taskToDelete.id !== task.id);
      setTasks(deleted);
      localStorage.setItem("localTasks", JSON.stringify(deleted))
  }

  const handleClear=()=>{
      setTasks([]);
      localStorage.removeItem("localTasks");
  }
  return (
    <div className="container row">
      <h1 className="mt-4 text-white">Tasks for today</h1>
      <div className="col-11">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your tasks for today..."
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="col-1">
        <DefaultButton text="Add" className="btn btn-primary" onClick={addTask} />
      </div>
      <div className="badge">
        <b>You have</b>
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? " 1 task"
          : tasks.length > 1
          ? ` ${tasks.length} tasks for today `
          : null}
      </div>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
            <div className="col-11">
                <span className = "form-control bg-white btn mt-2"
                style={{textAlign: "left", fontWeight: "bold"}}>
                    {task.title}
                </span>
            </div>

            <div className="col-1">
                <button
                className =" mt-2 btn btn-warning material-icons"
                onClick ={()=> handleDelete(task)}
                >delete</button>
            </div>
        </React.Fragment>
      ))}
      {tasks.length && (
          <div className="clearButton">
            <DefaultButton text="Clear" className="btn btn-secondary mt-4 mb-4" onClick={handleClear} />
          </div>
      )}
    </div>
  );
}
