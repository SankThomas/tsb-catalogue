import { useState, useEffect } from "react"
import { FaPlus } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import List from "./List"

const Todo = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const newItems = {
        id: uuidv4(),
        title: text,
      }
      setItems([...items, newItems])
      setText("")
    }
  }

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id))

  const clearItems = () => setItems([])

  return (
    <>
      <section className="p-5 md:pl-32">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap items-center"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Enter your todo item"
            required
            className="p-3 rounded-md mr-2 text-green-500 placeholder-green-500 tracking-wide w-72 mb-2 sm:mb-0 md:w-96"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center bg-green-500 p-3 rounded-md text-white"
            onSubmit={handleSubmit}
          >
            Add Item <FaPlus className="text-sm ml-2" />
          </button>
        </form>
        <List items={items} deleteItem={deleteItem} clearItems={clearItems} />
      </section>
    </>
  )
}

export default Todo
