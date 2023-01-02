
import './App.css';
import Navbar from './component/Navbar';
import Todos from './component/Todos';
import Footer from './component/Footer';
import { useState } from 'react';
import AddItems from './component/AddItems';

function App() {

  // let myvay=50;
  const [todos, setTodos] = useState([
    {
      SNo:1,
      title: "go to home",
      des: "i want to go home"

    },
    {
      SNo:2,
      title: "go to shoping",
      des: "i want to go to shop"
    },
    {
      SNo: 3,
      title: "go to market",
      des: "i want to go market"
    }
  ]);

  const onDelete=(todo)=>{
    console.log("delete");
    
      setTodos(todos.filter((e)=>{   //set the todos list without the contain todo task 
        return todo!==e;
      }));
  


  }
  const addItems=(Task)=>{
    // console.log("delete");
    setTodos([
      ...todos,
      Task
    ])
    // setTodos(todos.filter((e)=>{   //set the todos list without the contain todo task 
    //   return Task;
    // }
    // ));
  }
  return (
  <>
  <Navbar title="My To-Doslist" searchBar={false}></Navbar>
  <AddItems todos={todos} addItems={addItems}></AddItems>

  
  <Todos todos={todos} onDelete={onDelete}></Todos>
  
  <Footer></Footer>
</> 
  );
}

export default App;
