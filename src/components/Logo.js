import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/">
      <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        Sankara
      </h2>
    </Link>
  )
}
