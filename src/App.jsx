import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import { v4 as uuidv4 } from "uuid";


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleEdit = () => {

  }

  const handleDelete = (e) => {
    let id = e.target.name;
    let newTodos = todos.filter(item=>{
      return item.id!=id
    });
    settodos(newTodos);
  }

  const handleAdd = () => {
    settodos([...todos, {id: uuidv4() ,todo, isCompleted: false }])
    settodo("")
  }

  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let ind;
    for (let index = 0; index < todos.length; index++) {
      const element = todos[index];
      if(element.id==id) {
        ind = index;
        break;
      }
    }
    let newTodos = [...todos];
    newTodos[ind].isCompleted = !newTodos[ind].isCompleted;
    settodos(newTodos);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-2xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input name='{todo.id}' onChange={handleChange} value={todo} type="text" className='bg-white color-black w-1/2' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-6 hover:cursor-pointer'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length == 0 && <div className='m-5'>No Todos to display</div> }
          {todos.map(item => {

            return <div key={item.id} className="todo flex w-1/2 justify-between my-3">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted}/>
              <div className={item.isCompleted? "line-through": ""}>{item.todo}</div>
              <div className="buttons">
                <button name={item.id} onClick={handleEdit} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-1 hover:cursor-pointer'>Edit</button>
                <button name={item.id} onClick={handleDelete} className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-1 hover:cursor-pointer'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
