import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function EditIssuePage() {
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [type, setType] = useState(location.state.type);
  const [status, setStatus] = useState(location.state.status); // default

  return (
    <div className="w-[500px] h-[700px] flex justify-center items-center ">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6 ">
        <h2 className="text-xl font-bold text-gray-700">Edit Issue</h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Id</label>
          <input
            placeholder="Enter Id"
            disabled
            type="text"
            value={location.state.id}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full bg-gray-200 border rounded px-3 py-2 focus:ring focus:ring-blue-300 "
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Title</label>
          <input
            placeholder="ex : Login Page Error"
            type="text"
            value={title}
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
            value={description}
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
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="BUG">Bug</option>
            <option value="QUESTION">Question</option>
            <option value="IMPROVEMENT">Improvement</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="WAITING_ON_CLIENT">Waiting on Client</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div>

        {/* Created Date */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">
            Created Date
          </label>
          <input
            placeholder="created Date"
            type="text"
            value={location.state.createdAt.split("T")[0]}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border  bg-gray-200 rounded px-3 py-2 focus:ring focus:ring-blue-300 "
          />
        </div>

        {/* Updated Date */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">
            Last Updated Date
          </label>
          <input
            placeholder="created Date"
            type="text"
            value={location.state.updatedAt.split("T")[0]}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border  bg-gray-200 rounded px-3 py-2 focus:ring focus:ring-blue-300 "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Update Issue
        </button>
      </form>
    </div>
  );
}
