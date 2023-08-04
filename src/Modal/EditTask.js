import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";

const EditTask = ({
  setEdit,
  editTitle,
  editContent,
  setEditTitle,
  setEditContent,
  id,
  setId,
}) => {
  const dispatch = useDispatch();

  const handleModalClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    setEdit(false);
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (editTitle === "" || editContent === "") {
      return;
    }
    let obj = {
      id,
      editTitle,
      editContent,
    };
    dispatch(editTask(obj));
    setEdit(false);
    setEditTitle("");
    setEditContent("");
    setId("");
  };

  return (
    <>
      <div
        onClick={handleModalClose}
        className=" w-[100vw] h-[100vh] bg-gray-400 fixed  top-0"
      >
        {" "}
        <div className="w-[80%] md:w-[50%] h-[400px] bg-white mx-auto mt-28 p-8 rounded-md">
          <h1 className="text-3xl font-bold">Edit Task</h1>
          <form>
            <input
              onChange={(e) => setEditTitle(e.target.value)}
              className="block  mt-6 border border-gray-600 rounded w-[80%] h-12 p-4 active:border-black"
              type="text"
              placeholder="Title"
              value={editTitle}
              name="title"
            ></input>
            <textarea
              onChange={(e) => setEditContent(e.target.value)}
              className="block mt-6 border border-gray-600 rounded w-[80%] h-36 p-4 placeholder:font-2xl"
              placeholder="Content"
              value={editContent}
              name="content"
            ></textarea>
            <div className="flex">
              <button
                onClick={handleSubmitBtn}
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

export default EditTask;
