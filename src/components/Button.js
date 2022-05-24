import React from 'react'
import ImageLogoSVG from './ImageLogoSVG'
import axios from 'axios';
import Axios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Button({ text, css }) {
    const navigate = useNavigate()

    const handleSignIn = async () => {
        if (text === 'Sign in with Google') {
            let data = await Axios.get('/handleGoogleLogin')
            window.location.href = data.data
            return
        } else if (text === "Sign In") {
            navigate('/signin')
        }
        console.log('Not yet implemented');
        return
    }
    return (
        <div onClick={handleSignIn} className={`w-full h-full cursor-pointer  rounded-full px-4 py-2 text-center  font-semibold flex items-center justify-center space-x-2 ${css} ${text !== 'Sign in with Google' ? text !== 'Sign In' ? 'cursor-not-allowed' : '' : ''}`}>
            <ImageLogoSVG text={text} />
            <button className={`flex items-center ${text !== 'Sign in with Google' ? text !== 'Sign In' ? 'cursor-not-allowed' : '' : ''}`}>{text}</button>
        </div>
    )
}

export default Button