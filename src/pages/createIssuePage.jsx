import { useState } from "react";

export default function CreateIssuePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("BUG");
  const [status, setStatus] = useState("OPEN"); // default

  return (
    <div className=" w-[500px] h-[700px] flex justify-center items-center ">
      <form className="w-full max-w-md backdrop-blur-md  rounded-lg shadow-2xl shadow-gray-600 p-6 ">
        <h2 className="text-xl font-bold text-gray-700">Create New Issue</h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Title</label>
          <input
            placeholder="ex : Login Page Error"
            type="text"
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300 "
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">
            Description
          </label>
          <textarea
            placeholder="ex : adad asdadad asdadad"
            // value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Type</label>
          <select
            // value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="BUG">Bug</option>
            <option value="QUESTION">Question</option>
            <option value="IMPROVEMENT">Improvement</option>
          </select>
        </div>

        {/* Status */}
        {/* <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            // value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="WAITING_ON_CLIENT">Waiting on Client</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Create Issue
        </button>
      </form>
    </div>
  );
}
