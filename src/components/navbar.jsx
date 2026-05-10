import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white px-5 py-2'>
        <div className="logo">
            <span className='font-bold text-2xl'>TickList</span>
        </div>
        <ul className="flex gap-8">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default navbar
