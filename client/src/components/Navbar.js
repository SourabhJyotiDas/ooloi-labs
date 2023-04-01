import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   return (
      <div className='flex items-center justify-center space-x-5 py-5 bg-blue-500 text-white'>
         <Link to="/">Create</Link>
         <Link to="/allnotes">AllNotes</Link>
      </div>
   )
}
