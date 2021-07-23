import { FaHome } from "react-icons/fa"

export default function Sidebar() {
  return (
    <aside className="sidebar p-6 left-0 top-0 h-screen w-20 hidden md:block">
      <FaHome className="text-2xl" />
    </aside>
  )
}
