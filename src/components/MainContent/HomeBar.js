import { RefreshIcon } from '@heroicons/react/outline'
import axios from 'axios';
import Axios from '../../config/axiosConfig';
import React from 'react'
import { setTrendingData, sideBarActive, setSearchDataRefresh, tweetArray, } from './../../actions'
import { connect } from 'react-redux'
import toast from 'react-hot-toast';

function HomeBar({ type, setTrendingData, setSearchDataRefresh, search, userInfo, tweetArray, }) {



    const onClickHandler = async () => {
        const newToast = toast.loading("Loading...")

        if (type === 'Trending') {
            const dataArray = await Axios.get('/trending').then((e) => e.data)
            setTrendingData(dataArray)
            toast.success("Feed Updated", {
                id: newToast
            })
            return
        }

        if (type === "Home") {
            const newTweetArray = await Axios.post('/getUserPosts', { userEmail: userInfo.userEmail }).then((e) => e.data)
            tweetArray(newTweetArray)
            toast.success("Feed Updated", {
                id: newToast
            })
            return
        }
        if (type === 'Search Results') {
            if (search !== '') {
                const dataArray = await Axios.post('/searchTopic', {
                    term: search
                }).then((e) => e.data.data)
                setSearchDataRefresh(dataArray)
                toast.success("Feed Updated", {
                    id: newToast
                })
                return
            }
            if (search === '') {
                toast.error("Please enter a search term to update", {
                    id: newToast
                })
                return
            }
        }
    }



    return (
        <div className='w-full mb-4 mt-4 px-2'>
            <div className='flex items-center justify-between '>
                <div className='font-bold text-2xl' >{type}</div>
                <div onClick={onClickHandler}>
                    <RefreshIcon className='w-7 h-7 text-blue-500 transition
                     hover:-rotate-180
                    active:scale-150 duration-500 ease-out' />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.search,
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, { setTrendingData, sideBarActive, setSearchDataRefresh, tweetArray, })(HomeBar)