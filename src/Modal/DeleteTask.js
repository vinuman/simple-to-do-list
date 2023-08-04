import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";

const DeleteTask = ({ setRemove, id, setId }) => {
  const dispatch = useDispatch();
  const handleModalClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setRemove(false);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteTask(id));
    setRemove(false);
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
          <h1 className="text-4xl font-bold text-red-500">Delete Task</h1>
          <p className=" text-2xl pt-12">
            Are you sure you want to delete this? This action is permenant!
          </p>
          <div className=" mt-12">
            <button
              onClick={handleDeleteBtn}
              className="w-[8rem] h-12 mr-4 bg-red-700 rounded hover:bg-red-400 hover:text-black text-white font-5xl font-bold"
            >
              Delete
            </button>
            <button
              onClick={() => setRemove(false)}
              className="w-[8rem] h-12 bg-blue-700 rounded hover:bg-blue-400 hover:text-black text-white font-5xl font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTask;
