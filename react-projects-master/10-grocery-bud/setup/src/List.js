import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, removeTask, editTask}) => {
  return (
    <div>
      {list.map((task) => {
        return (
          <article className="grocery-item" key={task.id}>
            <p className="title">{task.title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
              onClick={() => editTask(task.id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
              onClick={() => removeTask(task.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  );
}

export default List
