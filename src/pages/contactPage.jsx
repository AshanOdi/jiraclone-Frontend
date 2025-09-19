import { useState } from "react";
import axios from "axios"; // Import axios
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const formEndpoint = "https://formspree.io/f/xnnbevro";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await axios
        .post(formEndpoint, formData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(() => {
          toast.success("Successfully Sent!");
        });
    } catch (err) {
      setStatus("error");
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full  h-full flex flex-row items-start justify-center gap-4 p-6">
      {/* CONTACT US */}
      <div className="w-1/3 mt-5 backdrop-blur-xxs rounded-lg shadow-2xl shadow-gray-600 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
        <p className="text-black text-sm mb-2">Phone: +94 11 234 5678</p>
        <p className="text-black text-sm mb-4">Email: forge@gmail.com</p>

        <form
          onSubmit={handleSubmit}
          className="w-full backdrop-blur-md backdrop-blur-md rounded-lg shadow-md p-4"
        >
          <label className="block text-sm font-medium mb-1 text-black">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2  mb-3 text-black"
          />

          <label className="block text-sm font-medium mb-1 text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2  mb-3 text-black"
          />

          <label className="block text-sm font-medium mb-1 text-black">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            className="w-full border rounded px-3 py-2  mb-3 text-black"
          />

          <button
            type="submit"
            className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ABOUT US */}
      <div className="w-1/3 mt-5 backdrop-blur-xxs rounded-lg shadow-2xl shadow-gray-600 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
        <p className="text-black text-sm">
          This Jira Clone app is a lightweight issue tracker built with React,
          Spring Boot, and Tailwind CSS. We focus on simplicity and speed to
          help you manage your team’s work efficiently.
        </p>
      </div>

      {/* FAQ */}
      <div className="w-1/3 mt-5 backdrop-blur-xxs rounded-lg shadow-2xl shadow-gray-600 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">FAQ</h2>
        <ul className="list-disc list-inside text-black text-sm space-y-2">
          <li>How to create an issue? → Use the Add Issue page.</li>
          <li>How to update status? → Click the card dropdown.</li>
          <li>Can I delete an issue? → Use the red circle button.</li>
        </ul>
      </div>
      <img
        className="fixed object-cover opacity-50 w-[900px] h-[900px] top-78 left-298  mx-2 transition-transform duration-5000 ease-in-out hover:rotate-540"
        src="/Logo-jira.png"
        alt="logo"
      />
    </div>
  );
}
