import React from 'react'
import { Link } from 'react-router-dom'

const SearchInput = () => {
    return (
        <div>
            Search Input
        </div>
    )
}

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center shrink-0 pr-6'>
            <Link to={'/'}>
                <img src='/logo.svg' alt='logo' width={36} height={36} />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
