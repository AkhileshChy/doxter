import Editor from '@/custom/Editor'
import Toolbar from '@/custom/Toolbar'
import React from 'react'
import { useParams } from 'react-router-dom'

function DocumentPage() {
    const { id } = useParams()
    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            <Toolbar />
            <Editor />
        </div>
    )
}

export default DocumentPage
