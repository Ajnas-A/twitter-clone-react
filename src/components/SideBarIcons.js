import React from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from './../actions/index'
import { useNavigate } from 'react-router-dom'
import Axios from '../config/axiosConfig'

function SideBarIcons({ Icon, title, clickHandler, type, setUserInfo, extraCSS, userInfo }) {

    const navigate = useNavigate()

    const handleSignOut = async () => {
        await Axios.post('/signout', { userEmail: userInfo.userEmail }).then((e) => e.data)
        setUserInfo({})
        navigate('/signin')
    }

    const handleSignIn = () => {
        if (title === 'Sign In')
            navigate('/signin')
    }

    return (
        <div onClick={() => {
            clickHandler && clickHandler(title)
        }} className='hover:bg-gray-200 duration-300 ease-out px-4 py-2 rounded-full cursor-pointer overflow-hidden group' >
            <div className='flex items-center justify-center space-x-3  '>
                <Icon className={` ${title === 'Dark Mode' ? extraCSS : ''} h-5 w-5`} />
                <div className={`${type && type === 'sign' && title !== 'Sign In' ? ' group-hover:hidden transform duration-300 ' : ''} hidden lg:inline-block`}>
                    <p onClick={handleSignIn} className={`${type && type === 'sign' ? ' ' : ''}`}>{title}</p>
                </div>
                {(type === 'sign' && title !== 'Sign In') && <div className={`hidden  group-hover:lg:block  transform duration-300`}>
                    <p onClick={handleSignOut} >Sign Out</p>
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, { setUserInfo })(SideBarIcons)