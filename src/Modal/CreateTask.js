import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/taskSlice";

const CreateTask = ({ setCreateTaskModal }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (title == "" || content == "") {
      return;
    }
    let obj = {
      title,
      content,
    };

    dispatch(addTask(obj));
    console.log(taskList);
    setCreateTaskModal(false);
    setTitle("");
    setContent("");
  };

  const handleModalClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setCreateTaskModal(false);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <div
        onClick={handleModalClose}
        className=" w-[100vw] h-[100vh] bg-gray-400 fixed  top-0"
      >
        {" "}
        <div className="w-[80%] md:w-[50%] h-[400px] bg-white mx-auto mt-28 p-8 rounded-md">
          <h1 className="text-3xl font-bold">Create Task</h1>
          <form>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="block  mt-6 border border-gray-600 rounded w-[80%] h-12 p-4 active:border-black"
              type="text"
              placeholder="Title"
              value={title}
              name="title"
            ></input>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="block mt-6 border border-gray-600 rounded w-[80%] h-36 p-4 placeholder:font-2xl"
              placeholder="Content"
              value={content}
              name="content"
            ></textarea>
            <div className="flex">
              <button
                onClick={handleSubmitButton}
                type="button"
                className=" mr-2 mt-4 w-[8rem] h-12 bg-blue-700 rounded hover:bg-blue-400 hover:text-black text-white font-5xl font-bold"
              >
                Submit
              </button>
              <button
                onClick={handleModalClose}
                type="button"
                className="  mt-4 w-[8rem] h-12 bg-red-700 rounded hover:bg-red-400 hover:text-black text-white font-5xl font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
