import React from 'react'
import HomeBar from './MainContent/HomeBar'
import Posts from './MainContent/Posts'
import TweetBody from './MainContent/TweetBody'

const classer = "overflow-hidden scrollbar-hide w-full h-full"
//flex flex-col items-start w-full space-y-4 border-x-2 border-gray-100 max-h-screen col-span-7 lg:col-span-5
function HomeComponent() {
    return (
        <>
            <HomeBar type="Home" />
            <TweetBody />
            <div className='overflow-y-scroll scrollbar-hide w-full h-full flex-1' >
                <Posts type='home' />
            </div>
        </>
    )
}

export default HomeComponent