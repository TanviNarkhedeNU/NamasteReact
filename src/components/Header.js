import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-purple-200 shadow-lg">
      {/* logo */}
      <div>
        <img className="w-[15%] h-[100%]" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4 m-4 font-bold text-lg">
            {onlineStatus === true ? "Online Status ✅" : "Online Status 🔴"}
          </li>
          <li className="p-4 m-4 font-bold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4 font-bold text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4 font-bold text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4 font-bold text-lg">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="p-4 m-4 font-bold text-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
