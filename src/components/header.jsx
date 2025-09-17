import { Link, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[80px] shadow-2xl flex items-center">
      <img
        className="w-[70px] h-[70px] object-cover cursor-pointer mx-2"
        src="/Logo-jira.png"
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="w-[calc(100%-80px)] h-full flex justify-center items-center ">
        <Link to="/" className="text-[20px] font-bold mx-2">
          Dashboard
        </Link>
        <Link to="/issue" className="text-[20px] font-bold mx-2">
          Issues
        </Link>
        <Link to="/history" className="text-[20px] font-bold mx-2">
          Issue History
        </Link>
        <Link to="/create" className="text-[20px] font-bold mx-2">
          Add Issue
        </Link>
      </div>
      <div className="w-[80px] flex justify-center items-center">
        <Link to="/cart" className="text-[20px] font-bold mx-2">
          {/* Add Profile or Something */}
        </Link>
      </div>
    </header>
  );
}
