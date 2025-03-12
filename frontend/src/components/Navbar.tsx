import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="container mx-auto items-center gap-4 p-5 bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50 transition duration-300">
      <Link to={"/"} className="flex items-center gap-3">
        <h1 className="text-4xl text-white font-bold">SafeStay</h1>
        <div className="p-2">
          <div
            className="relative top-[-3em] w-0 h-0 border-t-[50px] 
          border-t-transparent border-solid border-x-transparent border-x-[3em]  
          border-b-[1.25em] border-white

          afte:content-none after:absolute after:left-[-3em] after:top-[1.25em]
          after:h-0 after:w-0 after:border-b-[3em] after:border-solid 
          after:border-x-transparent after:border-b-transparent after:border-x-[3em] 
          after:border-t-[4.4em] after:border-t-black
          "
          ></div>
        </div>
      </Link>
    </nav>
  )
}

