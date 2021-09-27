import { useState, useEffect } from "react"
import { FaPlus } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import { motion } from "framer-motion"
import List from "./List"
import Alert from "../components/Alert"

const getLocalStorage = () => {
  let items = localStorage.getItem("items")

  if (items) {
    return JSON.parse(localStorage.getItem("items"))
  } else {
    return []
  }
}

const Todo = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      title: text,
    }
    setItems([newItems, ...items])
    setText("")
    setIsEditing(false)
  }

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id))

  const clearItems = () => setItems([])

  const editItem = (id) => {
    const editingItem = items.find((item) => item.id === id)
    setItems(items.filter((item) => item.id !== id))
    setIsEditing(true)
    setText(editingItem.title)
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <>
      <motion.section
        className="p-5 md:pl-32"
        initial={{
          y: "-100vw",
        }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.1,
          stiffness: 50,
          type: "spring",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Enter your todo item"
            className="text-xl p-3 rounded-md mr-2 text-green-500 placeholder-green-500 tracking-wide w-72 mb-2 sm:mb-0 md:w-96"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center bg-green-500 p-3 rounded-md text-white text-xl"
            onSubmit={handleSubmit}
          >
            {isEditing ? "Editing" : "Add item"}{" "}
            <FaPlus className="text-sm ml-2" />
          </button>
        </form>
        {!text && <Alert />}
        <List
          items={items}
          deleteItem={deleteItem}
          clearItems={clearItems}
          editItem={editItem}
        />
      </motion.section>
    </>
  )
}

export default Todo
