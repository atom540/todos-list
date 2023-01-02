import React, { useState } from 'react'

 
const AddItems = (props) => {
    const [Task ,setTask]=useState({S_NO:4,title:"Enter",des:"ldkghjd"});
    // setTask
    function handleChange(e){
        console.log(Task)
        setTask({
            SNO:4,
            // S_No:props.todos.size(),
            title: e.target.value,
            des:e.target.value
          // addItems(Task)
        })
    }

    function handleChangedes(e){
      console.log(Task)
      setTask({
          SNO:4,
          // S_No:props.todos.size(),
          title: e.target.value,
          des:e.target.value
        // addItems(Task)
      })
  }
  return (
    <div className='container my-3' style={{width:'50vw' ,border:"3px solid black"}}>
    {/* <form> */}
  <div className="form-group">
    <label className='container my-3'>Add a Task</label>
    <input  className="form-control"   placeholder="Enter Task" onChange={handleChange}/>
    <label  className='container my-3'>Description of a Task</label>
    <input  className="form-control"   placeholder="Enter Task" onChange={handleChangedes}/>
   
  </div>
 
  
  {/* {Task} */}
  {/* <button  className="btn btn-primary" onClick={()=>props.addItems(Task)}>Submit</button> */}
  <button className="btn  btn-primary my-3" onClick={()=>{props.addItems(Task)}}>ADD </button>
{/* </form> */}
    </div>
  )
}

export default AddItems
