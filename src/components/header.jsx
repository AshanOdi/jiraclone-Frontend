import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[90px] shadow-2xl flex items-center px-4">
      <nav
        className="w-[calc(100%-80px)] h-full flex justify-center items-center  gap-10
      "
      >
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" cursor-pointer absolute top-1 left-1 flex flex-row items-center"
        >
          <img
            className="w-[70px] h-[70px] object-cover cursor-pointer mx-2 transition-transform duration-500 ease-in-out hover:rotate-180"
            src="/Logo-jira.png"
            alt="logo"
          />
          <img className=" h-[50px] object-cover " src="/name.png" alt="name" />
        </div>

        {/* <Link to="/" className="text-[20px] font-bold mx-2">
          Dashboard
        </Link> */}
        <Link
          to="/"
          className="relative text-xl font-bold text-gray-800 
               hover:text-blue-600
               after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-blue-600 after:left-0 after:-bottom-1 
               hover:after:w-full after:transition-all after:duration-300"
        >
          DASHBOARD
        </Link>
        <Link
          to="/issue"
          className="relative text-xl font-bold text-gray-800 
               hover:text-blue-600
               after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-blue-600 after:left-0 after:-bottom-1 
               hover:after:w-full after:transition-all after:duration-300"
        >
          ISSUE BOARD
        </Link>
        {/* <Link to="/history" className="text-[20px] font-bold mx-2">
          Issue History
        </Link> */}
        <Link
          to="/create"
          className="relative text-xl font-bold text-gray-800 
               hover:text-blue-600
               after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-blue-600 after:left-0 after:-bottom-1 
               hover:after:w-full after:transition-all after:duration-300"
        >
          ADD NEW
        </Link>
      </nav>
      <div className="w-[80px] flex justify-center items-center">
        <Link to="/cart" className="text-[20px] font-bold mx-2">
          {/* Add Profile or Something */}
        </Link>
      </div>
    </header>
  );
}
