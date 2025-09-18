import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditIssuePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [type, setType] = useState(location.state.type);
  const [status, setStatus] = useState(location.state.status);

  async function UpdateIssue(e) {
    e.preventDefault();

    try {
      const updatedIssue = {
        title,
        description,
        type,
        status,
      };

      await axios.put(
        `http://localhost:8080/api/issues/${location.state.id}`,
        updatedIssue
      );

      navigate("/issue");
    } catch (err) {
      console.error("Failed to update issue:", err);
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={UpdateIssue}
        className="backdrop-blur-md bg-white/10 shadow-gray-600 w-full max-w-md rounded-lg shadow-2xl p-6"
      >
        <h2 className="text-xl font-bold  mb-4">Edit Issue</h2>

        {/* ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 ">ID</label>
          <input
            type="text"
            value={location.state.id}
            disabled
            className="w-full bg-gray-200 border rounded px-3 py-2"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g., Login Page Error"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            placeholder="Describe the issue..."
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 ">Type</label>
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 ">Status</label>
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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 ">Created At</label>
          <input
            type="text"
            value={location.state.createdAt.split("T")[0]}
            disabled
            className="w-full border bg-gray-200 rounded px-3 py-2"
          />
        </div>

        {/* Updated Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 ">
            Last Updated
          </label>
          <input
            type="text"
            value={location.state.updatedAt.split("T")[0]}
            disabled
            className="w-full border bg-gray-200 rounded px-3 py-2"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Update Issue
        </button>
      </form>
    </div>
  );
}
