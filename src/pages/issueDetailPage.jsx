import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";

export default function IssueDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // const { id } = useParams(); // get issue ID from route like /detail/:id
  // const [issue, setIssue] = useState(null);

  // useEffect(() => {
  // const fetchIssue = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:8080/api/issues/${id}`);
  //     if (res.ok) {
  //       const data = await res.json();
  //       setIssue(data);
  //     } else {
  //       console.error("Failed to fetch issue details");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // fetchIssue();
  // }, [id]);

  // if (!issue) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-gray-500">Loading issue details...</p>
  //     </div>
  //   );
  // }
  console.log(location);

  return (
    <div className="h-[calc(100dvh-80px)] w-full flex flex-row p-8">
      <div>{console.log(location.state.title)}</div>

      <div className="w-2/3 h-full backdrop-blur-md shadow-lg shadow-gray-600 rounded-xl p-6 mr-6">
        <h1>{console.log(location.state.title)}</h1>

        <h1 className="text-2xl font-bold mb-4">{location.state.title}</h1>
        <p className="text-gray-700 whitespace-pre-line">
          {location.state.description}
        </p>
      </div>

      <div className="  relative w-1/3 backdrop-blur-md shadow-lg shadow-gray-600 rounded-xl p-6 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Type</h3>
          <p
            className={`text-lg inline-block px-3 py-1 rounded  font-medium ${
              location.state.type === "BUG"
                ? "bg-red-100 text-red-800"
                : location.state.type === "QUESTION"
                ? "bg-yellow-100 text-yellow-800"
                : location.state.type === "IMPROVEMENT"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {location.state.type}
          </p>
        </div>

        <div>
          <h3 className=" text-sm font-semibold text-gray-500">Status</h3>
          <span
            className={`inline-block px-3 py-1 rounded text-sm font-medium
              ${
                location.state.status === "OPEN"
                  ? "bg-red-100 text-red-800"
                  : location.state.status === "IN_PROGRESS"
                  ? "bg-yellow-100 text-yellow-800"
                  : location.state.status === "WAITING_ON_CLIENT"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}
          >
            {location.state.status}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">Created At</h3>
          <p>{new Date(location.state.createdAt).toLocaleString()}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500">Updated At</h3>
          <p>{new Date(location.state.updatedAt).toLocaleString()}</p>
        </div>
        <div className="gap-2 absolute bottom-5 right-5 flex flex-row ">
          <button
            onClick={() => {
              const item = location.state;
              navigate("/edit", {
                state: item,
              });
            }}
            cursor="pointer"
            className=" bottom-5 right-5 cursor-pointer bg-green-500 text-xl text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          <Link
            to="/create"
            className=" bottom-5 right-20 cursor-pointer bg-green-500 text-xl text-white font-bold py-2 px-4 rounded"
          >
            Add New
          </Link>
          <IoTrashBinOutline
            title="DELETE"
            className="w-[50px] h-[50px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
