import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";

export default function IssueDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  async function DeleteIssue(e) {
    e.stopPropagation();
    try {
      await axios
        .delete(
          import.meta.env.VITE_BACKEND_URL + `/api/issues/${location.state.id}`
        )
        .then(() => {
          toast.success("Status Deleted Successfully!");

          navigate("/issue");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

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
            onClick={(e) => {
              DeleteIssue(e);
            }}
            title="DELETE"
            className="w-[50px] h-[50px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
