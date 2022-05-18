import { CalendarIcon, LocationMarkerIcon, PhotographIcon } from '@heroicons/react/outline'
import axios from 'axios'
import Axios from '../../config/axiosConfig'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { enableTweetButton, changeTweetText, tweetArray, setUserInfo, } from './../../actions'


function TweetBody({ isTweetButtonEnabled, enableTweetButton, changeTweetText, tweetText, tweetArray, userInfo, setUserInfo }) {


    useEffect(() => {
        enableTweetButton(tweetText)
    }, [tweetText])

    const [photographIconActive, setPhotographIconActive] = useState(false)
    const [photographInput, setPhotographInput] = useState('')
    const [photographInputChange, setPhotographInputChange] = useState('')
    const [photographInputButton, setPhotographInputButton] = useState(true)
    const [showPhotograph, setShowPhotograph] = useState(false)

    useEffect(() => {
        if (photographInputChange.length !== 0) {
            setPhotographInputButton(false)
        } else {
            setPhotographInputButton(true)
            setShowPhotograph(false)
            setPhotographInput('')
        }
    }, [photographInputChange])


    const handleTweetOnClick = async () => {
        const newUserData = await Axios.post('/addNewPost', {
            postText: tweetText, userEmail: userInfo.userEmail, postImageUrl: photographInput
        }).then((e) => e.data)
        console.log(newUserData);
        setUserInfo(newUserData)
        const newTweetArray = await Axios.post('/getUserPosts', { userEmail: userInfo.userEmail }).then((e) => e.data)
        tweetArray(newTweetArray)
        setPhotographInputChange('')
        setPhotographInput('')
        setPhotographIconActive(false)
        changeTweetText('')
    }

    const handleAddImageOnClick = () => {
        setPhotographInput(photographInputChange)
        setShowPhotograph(true)
    }

    return (
        <div className='flex w-full px-4 border-b-2 border-gray-100 dark:border-slate-700'>
            <div>
                <img className='h-12 w-12 rounded-full' src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-line-black-icon-png-image_691065.jpg" alt="" />
            </div>

            <div className='flex flex-col flex-1'>
                <div>
                    <input onChange={(e) => changeTweetText(e.target.value)} value={tweetText} type="text" placeholder="What's Happening?" className='w-full outline-none bg-transparent p-2' name="" id="" />
                </div>
                <div className='flex items-center justify-between space-x-3 p-2'>
                    <div className='flex items-center justify-start space-x-3'>
                        <PhotographIcon onClick={() => { setPhotographIconActive(!photographIconActive) }} className='h-5 w-5 text-blue-500 hover:scale-125 cursor-pointer duration-300' />
                        <LocationMarkerIcon className='h-5 w-5 text-blue-500' />
                        <CalendarIcon className='h-5 w-5 text-blue-500' />
                    </div>
                    <button onClick={handleTweetOnClick} className={`${isTweetButtonEnabled ? 'bg-blue-200 dark:bg-opacity-75 cursor-not-allowed' : 'bg-blue-500 dark:bg-opacity-70'} rounded-full px-4 py-2  text-white font-bold`} disabled={isTweetButtonEnabled}>Tweet</button>
                </div>
                {(showPhotograph && photographIconActive) ? <img className='rounded-md w-72 h-44 bg-cover shadow-lg' src={photographInput} alt="" /> : ""}

                {photographIconActive ? <div className='flex items-center justify-start p-3'>
                    <input onChange={(e) => setPhotographInputChange(e.target.value)} value={photographInputChange} type="text" name="" id="" placeholder='Paste image url' className='w-full outline-none bg-transparent p-2' />
                    <button onClick={handleAddImageOnClick} className={`${photographInputButton ? 'bg-blue-200 cursor-not-allowed' : 'bg-blue-500'} rounded-full px-4 py-2  text-white text-sm font-light w-44 lg:w-36`} disabled={photographInputButton}>Add Image</button>
                </div> : ""}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { isTweetButtonEnabled: state.isTweetButtonEnabled, tweetText: state.tweetText, userInfo: state.userInfo, }
}


export default connect(mapStateToProps, { enableTweetButton, changeTweetText, tweetArray, setUserInfo, })(TweetBody)