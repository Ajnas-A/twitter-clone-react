import React, { useState } from 'react'
import { HomeIcon, HashtagIcon, BellIcon, MailIcon, BookmarkIcon, UserIcon, DotsCircleHorizontalIcon, CollectionIcon, MoonIcon } from '@heroicons/react/outline'
import SideBarIcons from './SideBarIcons'
import { connect } from 'react-redux'
import { sideBarActive, setDarkModeActive } from './../actions/index'

function SideBar({ sideBarActive, userInfo, setDarkModeActive, darkModeActive }) {

    const clickHandler = (data) => {

        switch (data.toLowerCase()) {
            case 'home':
                sideBarActive('home')
                break
            case 'explore':
                sideBarActive('explore')
                break
            case `@${userInfo.userName}`:
                break
            case 'dark mode':
                setDarkMode('Light Mode')
                setDarkModeActive(false)
                break
            case 'light mode':
                setDarkMode('Dark Mode')
                setDarkModeActive(true)
                break
            default:
                break

        }
    }

    const [darkMode, setDarkMode] = useState('Light Mode')

    return (
        <div className='flex flex-col space-y-4 items-center lg:items-start justify-start w-full px-4 py-2 col-span-2 '>
            <div className='flex justify-center lg:justify-start  w-full px-4 py-2'>
                <img className='h-7 w-7 ' src="/twitter-blue.png" alt="" />
            </div>
            <div className='flex flex-col items-start justify-center space-y-4'>
                <SideBarIcons clickHandler={clickHandler} Icon={HomeIcon} title='Home' />
                <SideBarIcons clickHandler={clickHandler} Icon={HashtagIcon} title='Explore' />
                <SideBarIcons Icon={BellIcon} title='Notifications' />
                <SideBarIcons Icon={MailIcon} title='Messages' />
                <SideBarIcons Icon={BookmarkIcon} title='Bookmarks' />
                <SideBarIcons Icon={CollectionIcon} title='Lists' />
                <SideBarIcons clickHandler={clickHandler} Icon={UserIcon} title={userInfo.userName ? `@${userInfo.userName}` : 'Sign In'} type='sign' />
                <SideBarIcons Icon={DotsCircleHorizontalIcon} title='More' />
                <SideBarIcons Icon={MoonIcon} title={darkMode} clickHandler={clickHandler} extraCSS={darkMode === 'Light Mode' ? '' : 'fill-black'} />
            </div>
            <div className='flex justify-center lg:w-full lg:justify-start '>
                <button onClick={() => { clickHandler('home') }} className=' rounded-full px-4 py-2 bg-blue-500 text-white font-bold text-sm lg:w-full lg:text-base'>Tweet</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        darkModeActive: state.darkModeActive
    }
}

export default connect(mapStateToProps, { sideBarActive, setDarkModeActive })(SideBar)