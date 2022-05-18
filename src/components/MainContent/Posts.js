import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Timeago from 'react-timeago'
import PostBodyNotPresent from '../small-components/PostBodyNotPresent'

function Posts({ tweetArray, type, searchData, userInfo }) {


    const [finalArray, setFinalArray] = useState([])

    useEffect(() => {
        if (type === 'search') {
            setFinalArray(searchData)
        } else if (type === 'home') {
            if (userInfo.userEmail === undefined) {
                setFinalArray([])
                return
            }
            setFinalArray(tweetArray)
        }
        else {
            setFinalArray(tweetArray)
        }
    }, [tweetArray, searchData])

    useEffect(() => {
        if (type === 'home') {
            if (userInfo.userEmail === undefined) {
                setFinalArray([])
                return
            }
            setFinalArray(userInfo.postData)
        }
    }, [])


    return (
        <div className='h-full w-full'>
            {finalArray.length !== 0 ? finalArray.map((e, key) => {
                return <div key={key} className=' border-b-2 border-slate-100 dark:border-slate-700  px-3 py-5'>
                    <div className='flex flex-col '>
                        <div className='flex space-x-3 '>
                            <div className='h-12 w-12 flex items-start justify-start'>
                                <img className='h-12 w-12 object-cover bg-cover overflow-hidden rounded-full' src={e.profileImageUrl ? e.profileImageUrl : "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-line-black-icon-png-image_691065.jpg"} alt="" />
                            </div>

                            <div className='flex flex-col px-2 h-auto w-3/4'>
                                <div className='flex space-x-3 text-sm font-medium items-center'>
                                    <p>{e.userEmail && userInfo.userName}</p>
                                    <p className=' text-xs text-slate-500'>{e.userName ? `@${e.userName}` : `@${userInfo.userName}`}</p>
                                    {e.createdAt && <p className=' text-gray-400 font-light text-xs'><Timeago date={e.name ? e.name : e.createdAt} /></p>}
                                </div>
                                <div className=' font-semibold text-lg w-full h-auto'><p className='h-full w-full break-all'>{e.text ? e.text : e.postText}</p></div>
                                <div className='p-2'>
                                    {e.photographInput ? <img className='rounded-md w-full h-full bg-cover' src={e.photographInput} alt="" /> : e.postImageUrl && <img className='rounded-md w-full h-full bg-cover' src={e.postImageUrl} alt="" />}
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between w-full px-2'>
                            <div className='flex items-center justify-center space-x-2'>
                                <ChatAlt2Icon className='h-5 w-5 text-blue-500' />
                                <p className=' text-sm text-gray-400'>{e.publicMetrics ? e.publicMetrics.reply_count : "0"}</p>
                            </div>
                            <div className='flex items-center justify-center space-x-2'>
                                <SwitchHorizontalIcon className='h-5 w-5 text-blue-500' />
                                <p className=' text-sm text-gray-400'>{e.publicMetrics ? e.publicMetrics.retweet_count : "0"}</p>
                            </div>
                            <div className='flex items-center justify-center space-x-2'>
                                <HeartIcon className='h-5 w-5 text-blue-500 hover:scale-125 duration-300 hover:fill-red-500 hover:text-red-500 ease-out' />
                                <p className=' text-sm text-gray-400'>{e.publicMetrics ? e.publicMetrics.like_count : "0"}</p>
                            </div>


                        </div>
                    </div>

                </div>
            }) : userInfo.userName ? <PostBodyNotPresent type='loggedin' title='Start Tweeting' /> : <PostBodyNotPresent type="signin" title='Login to tweet' />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tweetArray: state.tweetArray,
        searchData: state.searchData,
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(Posts)