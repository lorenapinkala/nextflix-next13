"use client";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/state/userActions";
import { useEffect } from 'react';

function Section() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data.user);

  const id = user ? user._id : null;


  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [user, dispatch]);

 const handleFavorites=()=>{
  if(id){
    console.log("holiiss, estos son los favorites")}
    else{
      alert("If you want to watch your favorite movies, log in.")
    }
 }


  return (
    <section className="bg-slate-800 w-full h-20 flex items-center">
      <div className="w-full h-12 flex justify-between items-center px-5">
        <button className="bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none w-16 h-7 flex justify-center items-center rounded text-white" onClick={handleFavorites}>
          Favorites
        </button>

        <Link href="Top">
        <button className="bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none w-16 h-7 flex justify-center items-center rounded text-white">
          Top
        </button>
        </Link>
        
        <Link href="Popular">
        <button className="bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none w-16 h-7 flex justify-center items-center rounded text-white">
          Popular
        </button>
        </Link>

      </div>
    </section>
  )
}

export default Section