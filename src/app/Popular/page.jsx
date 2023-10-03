"use client"
import FetchMovies from "@/components/FetchMovies"
import { usePathname } from 'next/navigation'


function PopularMovies() {

  const pathname = usePathname()
  const location=pathname.slice(1)

  return (
    <FetchMovies location={location}/>
  )
}

export default PopularMovies