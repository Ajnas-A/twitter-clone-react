import React from 'react'

function ImageLogoSVG({ text }) {

    const returnImage = (text) => {
        if (text === 'Sign in with Google' || text === 'Sign up with Google') {
            return <img className='w-5 h-5' src="/images/google-logo-svg.svg" alt="" />
        }
        if (text === 'Sign in with Apple' || text === 'Sign up with Apple') {
            return <img className='w-5 h-5' src="/images/apple-logo-svg.svg" alt="" />
        }
        if (text === 'Sign in with Twitter' || text === 'Sign up with Twitter') {
            return <img className='w-5 h-5' src="/images/twitter-logo-svg.svg" alt="" />
        }
        if (text === '')
            return
    }

    return (<>
        {returnImage(text)}</>

    )
}

export default ImageLogoSVG