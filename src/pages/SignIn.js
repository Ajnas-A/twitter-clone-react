import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import OrSection from '../components/small-components/OrSection'


function SignIn() {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    const handleSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className='h-screen w-full bg-twitter-signInBG'>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-start justify-start w-full h-full  sm:w-[600px] sm:h-[650px] sm:rounded-2xl bg-black px-2 '>
                    <div className='flex items-center w-full '>
                        <div className=' h-[53px] w-[268.86px] flex items-center '>
                            <div className='text-white  h-[34px] w-[34px] hover:bg-slate-100/20 duration-300 ease-out  rounded-full  items-center justify-center flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className='w-[32px] h-[53px] flex  items-center justify-center z-50'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className=' fill-twitter-silver h-[32px] w-[53px] '><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                        </div>
                        <div className=' h-[53px] w-[268.86px] '>
                        </div>
                    </div>
                    <div className='w-full h-full  flex items-center sm:items-start justify-center  '>
                        <div className='w-[534px] h-[348] mx-[118px] px-[32px] pb-[48px] flex flex-col items-start  justify-start space-y-11'>
                            <div className=' text-twitter-silver font-bold text-3xl'>Sign In to Twitter</div>
                            <div className='space-y-5 w-full'>
                                <Button text='Sign in with Google' css='bg-white text-black' />
                                <Button text='Sign in with Twitter' css='bg-white text-black fill-blue-500' />
                                <OrSection />
                                <div className={` ${isActive ? ' border-blue-500 py-2' : "py-3"} 'h-[50px] border-[0.5px] rounded-sm px-[12px]  w-full '`}>
                                    <div className='text-twitter-silver/50  h-full w-full justify-start items-start flex flex-col space-y-2'>
                                        <div onClick={() => { setIsActive(!isActive) }} className={`${isActive ? 'text-xs text-blue-300 ease-out' : 'ease-in'}'h-full w-full flex items-center justify-start duration-200  cursor-text '`}>
                                            <p className={`${isActive ? 'text-blue-400 h-[5px] ' : ''}`}>Phone, email, or username
                                            </p>
                                        </div>
                                        <div className={`${isActive ? 'h-full overflow-hidden w-full' : 'hidden h-full'}`}>
                                            <input type="text" name="" id="" className=' active:outline-none bg-transparent  rounded outline-none  w-full ' />
                                        </div>
                                    </div>
                                </div>
                                <Button text='Next' css='bg-white text-black' />
                                <Button text='Forgot password' css='border-[1px] border-slate-300 text-white hover:bg-blue-700/10 duration-200 ease-out' />
                            </div>
                            <div className='text-twitter-silver/60 text-sm '>
                                Don't have an account? <span onClick={handleSignUp} className='text-blue-500 cursor-pointer'>Sign Up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn