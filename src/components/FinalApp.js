import React from 'react'
import MainContent from './MainContent'
import SideBar from './SideBar'
import Timeline from './Timeline'
import { connect } from 'react-redux'

function FinalApp({ darkModeActive }) {


    return (
        <div className={`${darkModeActive ? 'dark' : ''}`}>
            <div className=' dark:bg-black dark:text-slate-400'>
                <div className="grid grid-cols-9 mx-auto container px-3  ">
                    <SideBar />
                    <MainContent />
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        darkModeActive: state.darkModeActive
    }
}

export default connect(mapStateToProps)(FinalApp)