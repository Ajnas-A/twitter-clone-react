import React from 'react'
import Button from '../components/Button'
import OrSection from '../components/small-components/OrSection'

const SignUp = () => {
    return (
        <div className=''>
            <div className='flex flex-col-reverse md:flex-row h-full md:h-screen md:w-screen justify-center md:justify-start w-full'>
                <div className='h-full w-full md:w-3/6 lg:w-[53%] relative'>
                    <img className='absolute top-0 h-full w-screen -z-10' src="/images/twitter-sign-up.png" alt="" />
                    <div className='flex h-full w-full items-center justify-center z-50'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className='fill-white h-1/2'><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    </div>
                </div>
                <div className='h-full bg-black w-full md:w-3/6 lg:w-[47%] text-twitter-silver'>
                    <div className='flex items-center justify-center w-full h-full p-10'>
                        <div className='flex flex-col items-start justify-center space-y-16 text-twitter-silver w-full h-full'>
                            <div className='h-auto'>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className=' fill-twitter-silver h-12 lg:h-16 z-10' ><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                            </div>
                            <div className='text-6xl xl:text-7xl text-twitter-silver font-extrabold'>Happening Now</div>
                            <div className='space-y-12'>
                                <div className='space-y-8 w-[20rem]'>
                                    <div className='text-2xl xl:text-3xl text-twitter-silver font-extrabold'>Join Twitter Today.</div>
                                    <div className='space-y-3'>
                                        <Button text='Sign up with Google' css='bg-white text-black' />
                                        <Button text='Sign up with Apple' css='bg-white text-black' />
                                        <OrSection />
                                        <div className='flex flex-col items-start w-full h-full space-y-2'>
                                            <Button text='Sign up with Phone or Email' css='bg-blue-500 text-white' />

                                            <p className='text-xs font-thin px-2'>By signing up, you agree to the <a className=' text-blue-500' href="https://twitter.com/en/tos">Terms of Service</a>  and <a className=' text-blue-500' href="https://twitter.com/en/privacy">Privacy Policy</a>, including <a className=' text-blue-500' href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookie Use</a>.</p>
                                        </div>
                                    </div></div>

                                <div className='space-y-3 w-full'>
                                    <div className=' font-semibold ml-2'>Already Have an Account?</div>
                                    <div >
                                        <Button text='Sign In' css='border-2 border-slate-300 text-blue-500 hover:bg-blue-700/10 duration-200 ease-out' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp