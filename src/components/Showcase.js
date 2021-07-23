import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Showcase() {
  return (
    <>
      <motion.section
        className="flex flex-col items-center justify-center h-screen"
        initial={{
          x: "-100vw",
        }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.1,
          stiffness: 50,
          type: "spring",
        }}
      >
        <h1 className="text-4xl mb-2">Homepage still under development.</h1>
        <h3 className="mt-2">
          As you wait, check out the{" "}
          <Link
            to="/todo-list"
            className="bg-green-500 p-2 rounded-md text-white mr-1"
          >
            Todo List
          </Link>
          page
        </h3>
      </motion.section>
    </>
  )
}
