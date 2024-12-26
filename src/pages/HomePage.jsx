import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            Click <Link to={"/doc/123"}>Here</Link> 
        </div>
    )
}

export default HomePage
