import { Link } from "react-router-dom"
import Logo from "./Logo"
import profile from "./profile.png"

export default function Header() {
  return (
    <header className="header flex items-center justify-between p-5">
      <div>
        <Logo />
      </div>

      <nav>
        <ul className="flex items-center">
          <li className="mr-2 md:mr-5">
            <Link to="/todo-list">Todo List</Link>
          </li>
          <li>
            <Link to="/">
              <img
                src={profile}
                alt="Thomas Sankara"
                title="Thomas Sankara"
                className="rounded-full bg-gray-100 p-1 md:w-12"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
