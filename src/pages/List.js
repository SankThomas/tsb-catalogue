import { IoMdClose } from "react-icons/io"
import { HiPencil } from "react-icons/hi"

export default function List({ items, deleteItem, clearItems, editItem }) {
  return (
    <>
      <article className="mt-5">
        <h3 className="flex items-center text-xl">
          You have <span className="text-4xl mx-2">{items.length}</span> items
          in your todo list
        </h3>

        <ol className="mt-5 sm:grid grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, title }) => (
            <li
              key={id}
              className="todo-list text-xl flex items-center justify-between p-2 m-1 rounded md:rounded-none"
            >
              {title}
              <button onClick={() => editItem(id)}>
                <HiPencil
                  className="text-xl text-green-500 cursor-pointer"
                  title="Edit item"
                />
              </button>
              <button onClick={() => deleteItem(id)}>
                <IoMdClose
                  className="text-xl text-red-500 cursor-pointer"
                  title="Delete item"
                />
              </button>
            </li>
          ))}
        </ol>
        {items.length !== 0 && (
          <button
            onClick={clearItems}
            className="p-3 text-white rounded-md bg-red-500 mt-10"
          >
            Clear Items
          </button>
        )}
      </article>
    </>
  )
}
