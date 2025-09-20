import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Card({ task, setData, setIsLoading }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function DeleteIssue(e) {
    e.stopPropagation();
    try {
      await axios
        .delete(import.meta.env.VITE_BACKEND_URL + `/api/issues/${task.id}`)
        .then(() => {
          toast.success("Resolved Issue Deleted Successfully!");
          setData((prev) => prev.filter((issue) => issue.id !== task.id));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  // Update issue status
  async function UpdateStatus(newStatus) {
    try {
      const updatedIssue = { status: newStatus };
      const res = await axios.put(
        import.meta.env.VITE_BACKEND_URL + `/api/issues/${task.id}/status`,
        updatedIssue
      );

      setData((prev) =>
        prev.map((issue) =>
          issue.id === task.id ? { ...issue, status: res.data.status } : issue
        )
      );

      setIsLoading(true);

      //use setOpen to close the dropdown after status change
      setOpen(false);
      // navigate("/issue");
    } catch (err) {
      console.error("Failed to update issue:", err);
    }
  }

  return (
    <div
      onClick={() => {
        navigate("/detail", {
          state: task,
        });
      }}
      className="relative  shadow-lg shadow-gray-500 rounded-xl p-3 mb-3 border-l-4 border-orange-400 cursor-pointer"
    >
      <p className="font-semibold">{task.title}</p>
      <p className="text-gray-500">{task.customer}</p>
      <span
        className={`text-xs ${
          task.type === "IMPROVEMENT"
            ? "bg-green-100 text-green-800"
            : task.type === "QUESTION"
            ? "bg-yellow-100 text-yellow-800"
            : task.type === "BUG"
            ? "bg-red-100 text-orange-800"
            : "bg-blue-100 text-blue-800"
        } text-black px-2 py-1 rounded`}
      >
        {task.type}
        {console.log(task.status)}
      </span>

      <p className="text-xs text-gray-500 mt-1">
        {task.updatedAt.split("T")[0]}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {task.updatedAt.split("T")[1].split(".")[0]}
      </p>

      {/* Dropdown */}
      <div
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
        className="relative mt-3"
      >
        {/* Button */}
        {task.status !== "RESOLVED" && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border border-gray-400 px-4 py-2 rounded cursor-pointer font-bold
          flex justify-between items-center  bg-white shadow"
          >
            Next State
            <span>▼</span>
          </div>
        )}

        {/* Dropdown menu */}
        {open && (
          <div className="absolute z-50 top-[42px] left-0 w-[180px] bg-white border border-gray-300 rounded shadow-md ">
            {(task.status === "OPEN" ||
              task.status === "WAITING_ON_CLIENT") && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  toast.success("Status Changed Successfully!");
                  UpdateStatus("IN_PROGRESS");
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                IN_PROGRESS
              </div>
            )}

            {task.status === "IN_PROGRESS" && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                  toast.success("Status Changed Successfully!");
                  UpdateStatus("WAITING_ON_CLIENT");
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                WAITING ON CLIENT
              </div>
            )}

            {(task.status === "IN_PROGRESS" ||
              task.status === "WAITING_ON_CLIENT") && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                  toast.success("Hurray, successfully Solved Issue!");
                  UpdateStatus("RESOLVED");
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                RESOLVED
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Button */}
      {task.status === "RESOLVED" && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("Delete clicked");
            DeleteIssue(e);
          }}
          className=" bottom-3 right-3 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 group"
          title="DELETE"
        >
          <span className="text-white text-xs font-bold  group-hover:block">
            X
          </span>
        </div>
      )}
    </div>
  );
}
