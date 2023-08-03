import React from "react";
import { useState } from "react";
import CreateTask from "../Modal/CreateTask";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const taskList = useSelector((state) => state.task.taskList);

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8">
        <h3 className=" text-5xl font-bold mb-4">Todo List</h3>
        {!createTaskModal && (
          <button
            onClick={() => setCreateTaskModal(true)}
            className="w-[8rem] h-12 bg-blue-700 rounded hover:bg-blue-400 hover:text-black text-white font-5xl font-bold"
          >
            Create Task
          </button>
        )}
      </div>
      <div>
        {createTaskModal && (
          <CreateTask setCreateTaskModal={setCreateTaskModal} />
        )}
      </div>
      <div className=" flex flex-col md:flex-row items-center p-4 justify-around w-[100%] mx-auto">
        {taskList.map((item) => (
          <div className="w-[90%] md:w-[30%] h-[300px] border border-gray-400 p-4 mb-4">
            <h1 className=" text-2xl pb-4 font-semibold">{item.title}</h1>
            <p>
              {expanded ? item.content : item.content.slice(0, 300)}{" "}
              <span
                className=" font-bold cursor-pointer"
                onClick={toggleExpand}
              >
                {expanded ? "Read Less..." : "Read More..."}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
