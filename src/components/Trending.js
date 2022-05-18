import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setTrendingData, setSearchData } from './../actions/index'
import toast from 'react-hot-toast'

function Trending({ trendingData, setTrendingData, setSearchData, search, searchData }) {

    useEffect(() => {
        const dataFetch = async () => {
            await setTrendingData()
        }
        dataFetch()
    }, [])


    return (
        <div className=''>
            <div className='px-3 text-2xl font-semibold'>India Trends</div>
            {trendingData.length ? trendingData.map((e, key) => {
                return <div key={key} className='border-b-2 border-slate-100 dark:border-slate-700 rounded-md hover:bg-twitter-silver/20 duration-300 ease-out  px-3 py-5 h-full w-full'>

                    <div className='flex flex-col items-start justify-center space-y-1  overflow-clip'>

                        <div className=' text-sm font-semibold text-black/50 dark:text-slate-500'>{key + 1}. Trending</div>
                        <div className=' text-lg font-semibold'> <p>{e.name}</p>  </div>
                        <div className='text-blue-500 text-sm'> <p className=' break-all'><a href={e.url}>{e.url}</a></p> </div>
                        {e.tweet_volume && <div className='text-sm text-black/50'>{e.tweet_volume} Tweets </div>}
                    </div>

                </div>
            }) : 'Loading'
            }
        </div>)
}

const mapStateToProps = (state) => {
    return {
        trendingData: state.trendingData,
        searchData: state.searchData,
        search: state.search
    }
}

export default connect(mapStateToProps, { setTrendingData, setSearchData })(Trending)