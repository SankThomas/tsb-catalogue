import { IoMdClose } from "react-icons/io"

export default function List({ items, deleteItem, clearItems }) {
  return (
    <>
      <article className="mt-5">
        <h3 className="flex items-center">
          You have <span className="text-4xl mx-2">{items.length}</span> items
          in your todo list
        </h3>

        <ol className="px-5 mt-5 md:w-96">
          {items.map(({ id, title }) => (
            <li
              key={id}
              className="todo-list text-base flex items-center justify-between p-2 rounded"
            >
              {title}
              <button onClick={() => deleteItem(id)}>
                <IoMdClose
                  className="text-xl text-red-500 cursor-pointer"
                  title="Delete item"
                />
              </button>
            </li>
          ))}
        </ol>
        <button
          onClick={clearItems}
          className="p-3 text-white rounded-md bg-red-500 mt-10"
        >
          Clear Items
        </button>
      </article>
    </>
  )
}
