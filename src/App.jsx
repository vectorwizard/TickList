import { useState } from 'react'
import Navbar from './components/navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-2xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-white color-black'/>
          <button className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-6 hover:cursor-pointer'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todos">
            <div className="todo flex">
              <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
              <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
