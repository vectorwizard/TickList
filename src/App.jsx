import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  const toogleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e) => {
    let id = e.currentTarget.name;
    let t = todos.filter(item => item.id == id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    settodos(newTodos);
    saveToLS(newTodos);
  }

  const handleDelete = (e) => {
    let id = e.currentTarget.name;
    let newTodos = todos.filter(item => {
      return item.id != id
    });
    settodos(newTodos);
    saveToLS(newTodos);
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    settodos(newTodos)
    settodo("");
    saveToLS(newTodos);
  }

  const handleChange = (e) => {
    settodo(e.currentTarget.value)
  }

  const handleCheckbox = (e) => {
    let id = e.currentTarget.name;
    let ind;
    for (let index = 0; index < todos.length; index++) {
      const element = todos[index];
      if (element.id == id) {
        ind = index;
        break;
      }
    }
    let newTodos = [...todos];
    newTodos[ind].isCompleted = !newTodos[ind].isCompleted;
    settodos(newTodos);
    saveToLS(newTodos);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-2xl p-5 bg-violet-200 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-2xl'>TickList - Manage your todos at one place</h1>
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='flex flex-col gap-3'>
            <input name='{todo.id}' onChange={handleChange} value={todo} type="text" className='bg-white color-black w-full rounded-lg px-3 py-1' />
            <button onClick={handleAdd} disabled={todo.length < 3} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-6 hover:cursor-pointer'>Save</button>
          </div>
        </div>
        <input className='my-4' onChange={toogleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length == 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between my-3">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button name={item.id} onClick={handleEdit} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-1 hover:cursor-pointer '><FaEdit /></button>
                <button name={item.id} onClick={handleDelete} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-1 hover:cursor-pointer '><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
