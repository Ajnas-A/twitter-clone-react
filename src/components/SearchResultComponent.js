import React, { useEffect } from 'react'
import { setSearchData } from '../actions'
import HomeBar from './MainContent/HomeBar'
import SearchBar from './SearchBar'
import Trending from './Trending'
import { connect } from 'react-redux'
import toast from 'react-hot-toast'
import Posts from './MainContent/Posts'

function SearchResultComponent({ setSearchData, search, searchData }) {


    useEffect(() => {
        const fun = async () => {
            if (search != '') {
                let newToast = toast.loading('Loading..!')
                await setSearchData(search)
                toast.success("Results Updated", {
                    id: newToast
                })
            } else {
                toast.error("Please add a seach term")
            }

        }
        fun()

    }, [search])

    {/*  useEffect(() => {
        setSearchData(search)
    }, [search]) */}


    return (
        <>
            <HomeBar type='Search Results' />
            <div className='px-2 w-full'>
                <SearchBar />
            </div>

            <div className='overflow-y-scroll scrollbar-hide w-full h-full'>
                {searchData.length !== 0 ? <Posts type='search' /> : "Loading"}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.search,
        searchData: state.searchData
    }
}

export default connect(mapStateToProps, { setSearchData })(SearchResultComponent)