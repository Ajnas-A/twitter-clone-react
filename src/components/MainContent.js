import React from 'react'
import HomeBar from './MainContent/HomeBar'
import Posts from './MainContent/Posts'
import TweetBody from './MainContent/TweetBody'
import Trending from './Trending'
import { connect } from 'react-redux'
import TrendingComponent from './TrendingComponent'
import HomeComponent from './HomeComponent'
import SearchBar from './SearchBar'
import SearchResultComponent from './SearchResultComponent'

function MainContent({ sideBarActive }) {
    return (
        <div className='flex flex-col items-start w-full space-y-4 border-x-2 border-gray-100 dark:border-slate-700 h-screen col-span-7 lg:col-span-5'>
            {sideBarActive === 'home' ? <HomeComponent /> : sideBarActive === 'explore' ? <TrendingComponent /> : sideBarActive === 'Search' && <SearchResultComponent />
            }




        </div>
    )
}

const mapStateToProps = (state) => {
    return { sideBarActive: state.sideBarActive }
}

export default connect(mapStateToProps)(MainContent)