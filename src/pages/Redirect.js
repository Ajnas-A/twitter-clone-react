
import Axios from '../config/axiosConfig';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { setUserInfo } from '../actions';

export const Redirect = ({ setUserInfo }) => {
    const navigate = useNavigate()

    let { email } = useParams()
    useEffect(() => {
        const dataFunc = async () => {
            let data = await Axios.post('/getUserData', {
                "userEmail": email
            }).then((e) => e.data)
            setUserInfo(data)
            navigate('/home')
        }
        dataFunc()

    }, [])

    return (
        <div className='flex items-center justify-center h-screen w-full bg-blue-500'>
            Hold On...We are redirecting you to your Home Feed
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    setUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect)