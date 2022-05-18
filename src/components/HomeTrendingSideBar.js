import axios from 'axios'
import Axios from '../config/axiosConfig'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const HomeTrendingSideBar = (props) => {


    const [data, setData] = useState([])

    useEffect(() => {
        const dataFunc = async () => {
            const dataF = await Axios.get('/sideTrending').then((e) => e.data)
            setData(dataF)
        }
        dataFunc()

    }, [])


    return (
        <div className=' h-4/5 rounded-lg dark:bg-slate-700 bg-slate-200  flex flex-col items-start space-y-3 py-2 px-1 overflow-y-scroll scrollbar-hide'>
            <p className='text-center w-full'>What's Happening</p>
            {data.length !== 0 ? data.map((e) => {
                return <div key={e.data.id} className='flex flex-col  space-y-2 px-1'>
                    <div className='flex items-center justify-start space-x-2'>
                        <p>{e.title}</p>
                        <div className=' bg-green-500 h-1 w-1 rounded-full'></div>
                        <p>Trending</p>
                    </div>
                    <div className='text-sm font-semibold overflow-y-scroll scrollbar-hide'>
                        <p>{e.data.text}</p>
                    </div>
                </div>
            }) : "Loading"}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTrendingSideBar)