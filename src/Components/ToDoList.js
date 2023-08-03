import React from "react";
import { useState } from "react";
import CreateTask from "../Modal/CreateTask";

const ToDoList = () => {
  const [createTaskModal, setCreateTaskModal] = useState(false);
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
    </>
  );
};

export default ToDoList;
