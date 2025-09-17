// import { transitions } from "./transitions";

// export default function Card() {
//   return (
//     <div className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-blue-500">
//       <p className="font-semibold">task.title</p>
//       <span className="text-xs bg-yellow-200 text-black px-2 py-1 rounded">
//         task.label
//       </span>
//       <p className="text-xs text-gray-500 mt-1">task.id</p>
//     </div>
//   );
// }

export default function Card({ task }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-blue-500">
      <p className="font-semibold">{task.title}</p>
      <span className="text-xs bg-yellow-200 text-black px-2 py-1 rounded">
        {task.label}
        {console.log(task.status)}
      </span>
      <p className="text-xs text-gray-500 mt-1">{task.id}</p>
      <div className="relative">
        <div
          id="button"
          onClick={() => {
            let dropdown = document.querySelector("#dropdownButton #dropdown");
            dropdown.classList.toggle("hidden");
          }}
          className="border-solid border-gray-400 border-[1px] px-5 py-2 rounded cursor-pointer font-bold
      flex  justify-between w-[200px] bg-white shadow-lg shadow-sm"
        >
          Next State
          <img width={25} src="/src/icon/icon.svg" alt="arrow" />
          <div
            id="dropdown"
            className="rounded border-[1px] border-gray-300 bg-white py-4 absolute top-[50px] w-[400px] shadow-md hidden"
          >
            <div className="cursor-pointer hover:bg-gray-300 px-4">
              In Progress
            </div>
            <div className="cursor-pointer hover:bg-gray-300 px-4">
              Waiting On Client
            </div>
            <div className="cursor-pointer hover:bg-gray-300 px-4">
              Resolved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Card({ task, column }) {
//   // get possible moves
//   const options = transitions[column] || [];

//   return (
//     <div className="bg-white shadow-md rounded-xl p-3 mb-3 border-l-4 border-blue-500">
//       <p className="font-semibold">{task.title}</p>
//       <span className="text-xs bg-yellow-200 text-black px-2 py-1 rounded">
//         {task.label}
//       </span>
//       <p className="text-xs text-gray-500 mt-1">{task.id}</p>

//       {/* Dropdown for moves */}
//       {options.length > 0 && (
//         <select
//           className="mt-2 w-full border rounded p-1 text-sm"
//           onChange={(e) => console.log(`Move ${task.id} → ${e.target.value}`)}
//         >
//           <option value="">Move to...</option>
//           {options.map((opt) => (
//             <option key={opt} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// }
