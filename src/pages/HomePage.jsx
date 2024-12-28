import Navbar from '@/custom/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4'>
                <Navbar />
            </div>
            <div className='mt-16'>
                Click <Link to={"/doc/123"}>
                    <span className='text-blue-500 underline'>&nsbp;Here&nsbp;</span>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
