import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ task, setData }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //   const dropdownRef = useRef(null);

  //wena thanak ebuwama dropdown ek ain wena
  //   useEffect(() => {
  //     // Function to close the dropdown if a click is outside
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         setOpen(false);
  //       }
  //     };

  //     // Add event listener when the dropdown is open
  //     if (open) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     }

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [open]);

  //rerender scean eka
  //   function Handler(...args) {
  //     console.log();
  //     setOpen(false);
  //     setData((prevData) => {
  //       return prevData.map((issue) => {
  //         console.log(issue);
  //         if (issue.id === task.id) {
  //           return { ...issue, status: "IN_PROGRESS" };
  //         }
  //         return issue;
  //       });
  //     });
  //   }

  return (
    <div
      onClick={() => {
        navigate("/detail", {
          state: task,
        });
      }}
      className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-gray-400 cursor-pointer"
    >
      <p className="font-semibold">{task.title}</p>
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
      <div className="relative mt-3">
        {/* Button */}
        {task.status !== "RESOLVED" && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="border border-gray-400 px-4 py-2 rounded cursor-pointer font-bold
          flex justify-between items-center  bg-white shadow"
          >
            Next State
            <span className="ml-2">▼</span>
          </button>
        )}

        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-[45px] left-0 w-[180px] bg-white border border-gray-300 rounded shadow-md z-10">
            {(task.status === "OPEN" ||
              task.status === "WAITING_ON_CLIENT") && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
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
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                RESOLVED
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
