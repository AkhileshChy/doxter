import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DocumentPage from './pages/DocumentPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/doc/:id' element={<DocumentPage />} />
      </Routes>
    </div>
  )
}

export default App
