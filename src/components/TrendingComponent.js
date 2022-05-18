import React from 'react'
import HomeBar from './MainContent/HomeBar'
import SearchBar from './SearchBar'
import Trending from './Trending'

function TrendingComponent() {
    return (
        <>
            <HomeBar type='Trending' />
            <div className='px-2 w-full'>
                <SearchBar />
            </div>
            <div className='overflow-y-scroll scrollbar-hide w-full h-full'>
                <Trending type="trending" />
            </div>
        </>
    )
}

export default TrendingComponent