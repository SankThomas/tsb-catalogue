import { NavLink } from "react-router-dom"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-5">
      <div>
        <Logo />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/todo-list">Todo List</NavLink>
          </li>
          <li>
            {/* <img src={profile} alt="Thomas Sankara" title="Thomas Sankara" /> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}
