import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateIssuePage() {
  const [title, setTitle] = useState("");
  const [customer, setCustomer] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("BUG");
  const [status, setStatus] = useState("OPEN"); // default
  const navigate = useNavigate();

  //creating new issue
  async function CreateIssue(e) {
    e.preventDefault(); // Prevent default form submission
    try {
      const issue = {
        title,
        customer,
        description,
        type,
        status,
      };
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/issues", issue);
      toast.success("Successfully Created Issue!");
      navigate("/issue");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" w-[500px] h-[700px] flex justify-center items-center ">
      <form
        onSubmit={CreateIssue}
        className="w-full max-w-md backdrop-blur-xs  rounded-lg shadow-2xl shadow-gray-600 p-6 "
      >
        <h2 className="text-xl font-bold text-gray-700">Create New Issue</h2>

        {/*getting title */}
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

        {/*getting customer name*/}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">Customer</label>
          <input
            placeholder="ex : Ashan"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300 "
          />
        </div>

        {/*getting description */}
        <div>
          <label className="block text-sm font-medium mb-1 p-2">
            Description
          </label>
          <textarea
            placeholder="ex : Do not work login button"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* getting type */}
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

        {/* Submit button */}
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
