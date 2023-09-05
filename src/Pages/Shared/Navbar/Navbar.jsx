import { Link } from "react-router-dom";
import logo from "../../../../public/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import './style.css';

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user ? (
        <> </>
      ) : (
        <>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </>
      )}

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar sm:px-5 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 text-black"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex gap-5">
          <Link to="/">
            <img className="h-[40px] w-[55px]" src={logo} alt="" />
          </Link>
          <Link to="/">
            {" "}
            <p className="lg:text-2xl text-xl font-bold lg:font-semibold">
              The Witchery Academy
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="theme-toggle btn-danger px-4" onClick={toggleTheme}>
        <MdDarkMode></MdDarkMode>
      </button>
        <Link to="/dashboard">
          <b className="text-lg">Dashboard</b>
        </Link>
        {user && (
          <div className="tooltip tooltip-bottom">
            <div className="avatar">
              <div className=" w-12 rounded-full ml-4">
                <img src={user?.photoURL} alt="image" /> <br />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
