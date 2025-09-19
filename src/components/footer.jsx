import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full h-[90px] backdrop-blur-md shadow-2xl flex items-center px-4">
      <nav
        className="w-[calc(100%-80px)] h-full flex justify-center items-center  gap-10
      "
      >
        {/* <Link to="/" className="text-[20px] font-bold mx-2">
          Dashboard
        </Link> */}
        <Link
          to="/contact"
          className="relative text-lg  text-gray-800 
               "
        >
          Contact Us
        </Link>
        <Link
          to="/contact"
          className="relative text-lg  text-gray-800 
               "
        >
          About Us
        </Link>
        {/* <Link to="/history" className="text-[20px] font-bold mx-2">
          Issue History
        </Link> */}
        <Link
          to="/contact"
          className="relative text-lg  text-gray-800 
               "
        >
          FAQ
        </Link>
      </nav>
      <div className="w-[80px] flex justify-center items-center">
        <Link to="/cart" className="text-[20px] font-bold mx-2">
          {/* Add Profile or Something */}
        </Link>
      </div>
    </footer>
  );
}
