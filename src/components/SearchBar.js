import { SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'
import { setSearch, sideBarActive } from './../actions/index'

function SearchBar({ setSearch, sideBarActive, search }) {

    const [tempState, setTempState] = useState('')

    return (
        <div className='flex flex-row-reverse bg-gray-100 dark:bg-slate-700 w-full items-center justify-center py-1 px-4 rounded-3xl'>
            <div onClick={() => {
                if (tempState != '') {
                    setSearch(tempState)
                    sideBarActive("Search")
                    setTempState("")
                } else {
                    toast.error("Enter search term")
                }

            }} className=' cursor-pointer'>
                <SearchIcon className='text-blue-500 h-5 w-5' />
            </div>
            <div className='flex-1'>
                <input onChange={(e) => {
                    setTempState(e.target.value)

                }} placeholder='Search' value={tempState} className='px-4 py-2 outline-none bg-transparent w-full' type="text" name="" id="" />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, { setSearch, sideBarActive })(SearchBar)