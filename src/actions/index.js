import Axios from '../config/axiosConfig'

export const enableTweetButton = (textInput) => {

    return {
        type: "TWEET_ENABLE_CHECK",
        payload: textInput
    }
}

export const changeTweetText = (text) => {
    return {
        type: "CHANGE_TWEET_TEXT",
        payload: text
    }
}

export const tweetArray = (tweetArr) => {
    return {
        type: "CHANGE_TWEET_ARRAY",
        payload: tweetArr
    }
}

export const userDetails = (userObj) => {
    return {
        type: "USER_AUTH",
        payload: userObj
    }
}

export const sideBarActive = (data) => {
    return {
        type: "SIDE_BAR_ACTIVE",
        payload: data
    }
}

export const setTrendingData = (data) => {
    return async (dispatch, getState) => {
        const dataArray = await Axios.get('/trending').then((e) => e.data)
        dispatch({
            type: "SET_TRENDING_DATA",
            payload: dataArray

        })
    }
}

export const setSearch = (data) => {
    return {
        type: "SEARCH_TEXT",
        payload: data
    }
}

export const setSearchData = (data) => {
    return async (dispatch, getState) => {
        const dataTopic = await Axios.post('/searchTopic', {
            term: data,
        }).then((e) => e.data.data)

        dispatch({
            type: "SEARCH_DATA",
            payload: dataTopic
        })
    }
}

export const setSearchDataRefresh = (data) => {
    return {
        type: "SEARCH_REFRESH",
        payload: data
    }
}

export const setUserInfo = (data) => {
    return {
        type: "USER_INFO",
        payload: data
    }
}

export const setDarkModeActive = (data) => {
    return {
        type: "DARK_MODE",
        payload: data
    }
}