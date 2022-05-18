import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostBodyNotPresent({ type, title }) {
    const navigate = useNavigate()
    return (
        <div className={` flex items-center justify-center h-full`}>
            <p onClick={() => { type === 'signin' && navigate('/signin') }} className={`px-2 py-4 bg-slate-300 dark:bg-slate-700 rounded ${type === 'signin' ? ' cursor-pointer' : ''}`}>{title}</p>
        </div>
    )
}

export default PostBodyNotPresent