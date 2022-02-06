import React from 'react';

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <>
    {
        todos &&todos.length > 0 ? 
        (todos.map((todo, index) => {
            // return ( deleteTodo(todo._id)}>{todo.action})}))
            return <li key={index} className='list-type-none'>
                {todo.action}
                <span className="cross" onClick={()=>deleteTodo(todo._id)}>x</span>
                </li>
        }))
        : 
        null
    }
    </>
  )
}

export default ListTodo