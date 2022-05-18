import { combineReducers, createStore } from "redux";

const isTweetButtonEnabledReducer = (prevState = true, action) => {
    if (action.type === 'TWEET_ENABLE_CHECK') {
        if (action.payload.length !== 0)
            return false
        return true
    }
    return prevState
}

const changeTweetTextReducer = (prevState = '', action) => {
    if (action.type === 'CHANGE_TWEET_TEXT') {
        return action.payload
    }
    return prevState
}

const changeArrayReducer = (prevState = [], action) => {
    if (action.type === "CHANGE_TWEET_ARRAY") {
        return action.payload
    }
    return prevState
}

export const userAuthReducer = (prevState = {}, action) => {
    if (action.type === "USER_AUTH") {
        return action.payload
    }
    return prevState
}

export const sideBarActiveReducer = (prevState = 'home', action) => {
    if (action.type === "SIDE_BAR_ACTIVE") {
        return action.payload
    }
    return prevState
}

export const setTrendingDataReducer = (prevState = [], action) => {
    if (action.type === "SET_TRENDING_DATA")
        return action.payload

    return prevState
}

export const setSearchReducer = (prevState = '', action) => {
    if (action.type === "SEARCH_TEXT")
        return action.payload

    return prevState
}

export const setSearchDataReducer = (prevState = [], action) => {
    if (action.type === "SEARCH_DATA") {
        return action.payload
    } else if (action.type === 'SEARCH_REFRESH') {
        return action.payload
    } else if (action.type === 'SEARCH_UPDATE') {
        return action.payload
    }

    return prevState
}

export const setUserInfoReducer = (prevState = {}, action) => {
    if (action.type === "USER_INFO")
        return action.payload

    return prevState
}

export const setDarkModeReducer = (prevState = false, action) => {
    if (action.type === "DARK_MODE")
        return action.payload

    return prevState
}

const store = combineReducers({
    isTweetButtonEnabled: isTweetButtonEnabledReducer,
    tweetText: changeTweetTextReducer,
    tweetArray: changeArrayReducer,
    userAuth: userAuthReducer,
    sideBarActive: sideBarActiveReducer,
    trendingData: setTrendingDataReducer,
    search: setSearchReducer,
    searchData: setSearchDataReducer,
    userInfo: setUserInfoReducer,
    darkModeActive: setDarkModeReducer,
})
export default store