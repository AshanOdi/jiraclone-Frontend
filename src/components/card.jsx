// export default function Card({ task }) {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-blue-500">
//       <p className="font-semibold">{task.title}</p>
//       <span className="text-xs bg-yellow-200 text-black px-2 py-1 rounded">
//         {task.label}
//         {console.log(task.status)}
//       </span>
//       <p className="text-xs text-gray-500 mt-1">{task.id}</p>
//       {/* add a drop down here */}
//     </div>
//   );
// }

import { useState } from "react";

export default function Card({ task }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-blue-500">
      <p className="font-semibold">{task.title}</p>
      <span className="text-xs bg-yellow-200 text-black px-2 py-1 rounded">
        {task.label}
        {console.log(task.status)}
      </span>
      <p className="text-xs text-gray-500 mt-1">{task.id}</p>

      {/* Dropdown */}
      <div className="relative mt-3">
        {/* Button */}
        {task.status !== "RESOLVED" && (
          <button
            onClick={() => setOpen(!open)}
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
              task.status === "Waiting On Client") && (
              <div
                onClick={() => setOpen(false)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                IN_PROGRESS
              </div>
            )}

            {task.status === "IN_PROGRESS" && (
              <div
                onClick={() => setOpen(false)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                WAITING ON CLIENT
              </div>
            )}

            {(task.status === "IN_PROGRESS" ||
              task.status === "WAITING_ON_CLIENT") && (
              <div
                onClick={() => setOpen(false)}
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
