import React from 'react'
import HomeTrendingSideBar from './HomeTrendingSideBar'
import SearchBar from './SearchBar'
import TwitterTimeline from './TwitterTimeline'

function Timeline() {
    return (
        <div className='hidden lg:col-span-2 h-full space-y-10 w-full px-2 lg:inline-block py-2'>
            <SearchBar />
            {/*  <TwitterTimeline /> */}
            <HomeTrendingSideBar />
        </div>
    )
}

export default Timeline