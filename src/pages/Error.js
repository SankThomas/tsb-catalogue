import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl mb-5">Error 404 | Page Not Found</h1>
        <button>
          <Link to="/" className="btn-home">
            Back to homepage
          </Link>
        </button>
      </section>
    </>
  )
}

export default Error
