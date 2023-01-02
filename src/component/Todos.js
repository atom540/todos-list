import React from 'react'
import Todo from "./Todo"
const Todos = (props) => {

  // const listItems = props.todos.map(
  //   (element) => {
  //     return (
  //       <Todo todo={element} key={element.S_NO} onDelete={props.onDelete}></Todo>
  //     )
  //   }
  // )


  return (
    <div className='container my-3' style={{border:"3 px solid black"}}>
      <h3 className="text-center my-3">
        To Do List
      </h3>
      <p className="text-center my-3">
        {props.todos.map((todo)=>{
      return <Todo todo={todo} key={todo.SNO} onDelete={props.onDelete}></Todo>
    })}
        {/* {listItems} */}

      </p>

    </div>
  )
}

export default Todos
