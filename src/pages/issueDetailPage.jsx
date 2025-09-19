import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
          toast.success("Issue Deleted Successfully!");
          navigate("/issue");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-[calc(100dvh-80px)] w-full flex flex-row p-8 gap-6">
      <div className="w-2/3 h-full backdrop-blur-md shadow-lg shadow-gray-600 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">{location.state.title}</h1>
        <p className="text-gray-700 whitespace-pre-line mb-6">
          {location.state.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-sm  ">Type</h3>
            <p
              className={`text-lg inline-block px-3 py-1 rounded font-medium ${
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
            <h3 className=" text-sm  ">Status</h3>
            <span
              className={`inline-block px-3 py-1 rounded text-sm font-medium ${
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
            <h3 className="text-sm  ">Created At</h3>
            <p>{new Date(location.state.createdAt).toLocaleString()}</p>
          </div>

          <div>
            <h3 className="text-sm  ">Updated At</h3>
            <p>{new Date(location.state.updatedAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl  mb-3">History</h2>
          {location.state.histories.length === 0 ? (
            <p className="">No history available.</p>
          ) : (
            <div className="space-y-2">
              {location.state.histories.map((history) => (
                <div
                  key={history.id}
                  className="border p-3 rounded-md bg-gray-50"
                >
                  <p>
                    <span className="">From:</span>
                    {"  "}
                    {history.oldStatus}
                    {"  "}
                    <span className=""> To:</span>
                    {"  "}
                    {history.newStatus}
                  </p>
                  <p className=" text-sm">
                    Changed at: {new Date(history.changedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-1/3 relative backdrop-blur-md shadow-lg shadow-gray-600 rounded-xl p-6 flex flex-col gap-4">
        <button
          onClick={() => navigate("/edit", { state: location.state })}
          className="bg-green-500 text-white font-bold py-2 px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 text-white font-bold py-2 px-2 rounded "
        >
          Add New
        </button>
        <IoTrashBinOutline
          onClick={(e) => DeleteIssue(e)}
          title="DELETE"
          className="w-[50px] h-[50px] cursor-pointer mt-auto"
        />
      </div>
    </div>
  );
}
