"use client";
import { useState, useEffect, useRef } from "react";
import { FiLogIn, FiLogOut, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const menuRef = useRef(null);
  const pathName = usePathname();

  const handleSelect = (e) => {
    setSearch(e.target.value);
  };

  const clearInput = () => {
    setSearch("");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogOut = () => {
    //dispatch(logOutUser());
    console.log("salgo de sesion");
    toggleMenu();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);


//const user= {username: "Juan", email:"email@email"};
const user= null;


  return (
    <nav className="bg-slate-800 flex w-full h-9 rounded-sm md:h-12">
      <Link
        href="/"
        className="flex justify-center items-center h-full w-1/6 ml-2"
      >
        <h1 className="text-base text-white font-bold md:text-4xl">Nextflix</h1>
      </Link>

      <div className="flex items-center justify-end h-full w-4/6">
        <input
          className="w-4/6 h-2/3 rounded text-gray-800 px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          type="text"
          placeholder="Search movie"
        />
        <div className="flex justify-center items-center w-1/6 h-full md:justify-start">
          <FiSearch className="text-2xl text-white  md:ml-2" />
        </div>
      </div>


      {/* login and signup section */}

      {user ?
      (
        <div
        className="flex justify-center items-center h-full w-1/6"
        ref={menuRef}
      >
        <FiLogOut className="text-3xl text-white hover:bg-slate-200 rounded" onClick={toggleMenu} />
        {isOpen && (
          <ul className="absolute  bg-slate-400 border rounded-lg w-16 h-8 mr-5 mt-14 flex justify-center items-center md:w-28 md:h-14 md:mt-20">
            <li className=" hover:bg-slate-200 w-full h-full rounded flex justify-center items-center" onClick={handleLogOut}>
              <button type="button" className="w-full h-full">
              Log out
              </button>
            </li>
          </ul>
        )}
      </div>
      ):(
        <div
        className="flex justify-center items-center h-full w-1/6"
        ref={menuRef}
      >
        <FiLogIn className="text-3xl text-white hover:bg-slate-200 rounded" onClick={toggleMenu} />
        {isOpen && (
          <ul className="absolute  bg-slate-400  border rounded-lg w-16 h-16 mr-5 mt-24 md:w-28 md:h-28 md:mt-36">
            <li className="bg-slate-400   h-1/2 rounded flex justify-center items-center hover:bg-slate-200">
              <Link href="/Login">Log in!</Link>
            </li>
            <li className="bg-slate-400  h-1/2 rounded flex justify-center items-center hover:bg-slate-200">
              <Link href="/SignUp">Sign up!</Link>
            </li>
          </ul>
        )}
      </div>
      )
      
    }


      
    </nav>
  );
}

export default Navbar;
