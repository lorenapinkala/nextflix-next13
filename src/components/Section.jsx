import React from 'react'
import Link from 'next/link'

function Section() {
  return (
    <section className="bg-slate-800 w-full h-20 flex items-center">
      <div className="w-full h-12 flex justify-between items-center px-5">

        <button className="bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none w-16 h-7 flex justify-center items-center rounded text-white">
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