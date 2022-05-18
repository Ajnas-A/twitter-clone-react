import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error404() {
    const navigate = useNavigate()

    return (
        <div className='bg-blue-500 flex items-center justify-center h-screen w-full'>
            <div className='flex flex-col'>
                <p >Oops Page not found!</p>
                <button onClick={() => navigate('/home')} >Return to Home Page</button>
            </div>

        </div>
    )
}

export default Error404