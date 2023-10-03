"use client"
import { useState, useEffect, useRef } from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";
import  Link  from "next/link";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const menuRef = useRef(null);

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
    dispatch(logOutUser());
    toggleMenu();
  };


  
  return (
    <nav className="bg-slate-800 flex w-full h-9 rounded-sm md:h-12">
      <Link href="/" className="flex justify-center items-center h-full w-1/6 ml-2">
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

      <div className="flex justify-center items-center h-full w-1/6">
        <FiLogIn className="text-3xl text-white" />
      </div>
    </nav>
  )
}

export default Navbar