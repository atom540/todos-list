import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div style={{border:'3 px solid black'}}>
     <h>
     <p>{todo.S_NO} .{todo.title}</p>
     {/* <p>{todo.S_NO+" djkbvj"}</p> */}
      </h>
      <p>{todo.des}</p>
      <button className="btn  btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      
    </div>
  )
}

export default Todo
