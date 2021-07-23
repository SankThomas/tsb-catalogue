import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="sidebar absolute p-6 left-0 top-18 h-screen w-20 hidden md:block">
      <Link to="/">
        <FaHome className="text-2xl" />
      </Link>
    </aside>
  )
}
