import React from "react";
import { useState } from "react";
import CreateTask from "../Modal/CreateTask";
import { useSelector } from "react-redux";
import EditTask from "../Modal/EditTask";
import DeleteTask from "../Modal/DeleteTask";

const ToDoList = () => {
  const [createTaskModal, setCreateTaskModal] = useState(false);
  const [expanded, setExpanded] = useState(-1);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const taskList = useSelector((state) => state.task.taskList);

  const toggleExpand = (id) => {
    setExpanded(id === expanded ? -1 : id);
  };

  const handleEditBtn = (id) => {
    let task = taskList.filter((item) => {
      return item.id === id;
    });

    if (task) {
      setId(task[0].id);
      setEditTitle(task[0].title);
      setEditContent(task[0].content);
      setEdit(true);
    } else {
      console.log("no task");
    }
  };

  const handleDeleteBtn = (id) => {
    let task = taskList.filter((item) => {
      return item.id === id;
    });

    setId(task[0].id);

    setRemove(true);
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
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[100%] justify-center">
        {taskList.map((item) => (
          <div
            key={item.id}
            className={`w-[90%] md:w-[80%] border border-gray-400 p-4 mx-auto mb-4 rounded-md ${
              expanded === item.id ? "h-[auto]" : "h-[350px]"
            }`}
          >
            <h1 className=" text-2xl pb-4 font-semibold">{item.title}</h1>
            <p>
              {expanded === item.id
                ? item.content
                : item?.content?.slice(0, 300)}{" "}
              <span
                className=" font-bold cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                {expanded === item.id ? "Read Less..." : "Read More..."}
              </span>
            </p>
            <div className="py-4">
              <button
                onClick={() => handleEditBtn(item.id)}
                className=" mx-5 w-[8rem] h-12 bg-blue-700 rounded hover:bg-blue-400 hover:text-black text-white font-5xl font-bold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteBtn(item.id)}
                className="w-[8rem] h-12 bg-red-700 rounded hover:bg-red-400 hover:text-black text-white font-5xl font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {edit && (
        <EditTask
          setEdit={setEdit}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          setEditContent={setEditContent}
          editContent={editContent}
          id={id}
          setId={setId}
        />
      )}
      {remove && <DeleteTask setRemove={setRemove} id={id} setId={setId} />}
    </>
  );
};

export default ToDoList;
