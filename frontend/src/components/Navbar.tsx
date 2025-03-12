import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="container mx-auto items-center gap-4 p-5 bg-[#F9BC60] rounded shadow-lg shadow-[#F9BC60]/50 hover:bg-amber-200 hover:shadow-lg transition duration-300">
      <Link to={"/"} className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-32" />
      </Link>
    </nav>
  )
}

