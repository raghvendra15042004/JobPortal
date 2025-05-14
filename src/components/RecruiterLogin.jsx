import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import {AppContext} from '../context/AppContext'

const RecruiterLogin = () => {

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [image, setImage] = useState(false)
    const [isTextDataSubmited, setisTextDataSubmited] = useState(false)

    const {setShowRecruiterLogin} = useContext( AppContext)

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        if (state == "Sign Up" && !isTextDataSubmited){
            setisTextDataSubmited(true)
        }
    } 

    useEffect(()=>{
        document.body.style.overflow='hidden'

        return ()=>{
            document.body.style.overflow='unset'
        }
    },[])

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-2xl shadow-xl w-[50%] max-w-md text-slate-600'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 mb-1'>Recruiter {state}</h1>
                <p className='text-sm text-center text-gray-500 mb-6'>Welcome Back! Please sign in to continue</p>
                { state === "Sign Up" && isTextDataSubmited 
                ? <>

                    <div className='flex items-center gap-4 my-10'>
                        <label htmlFor="image">
                            <img className='w-16 rounded-full' src={ image ? URL.createObjectURL(image):assets.upload_area} alt="" />
                            <input onChange={e =>setImage(e.target.files[0])} type="file" hidden id='image' />
                        </label>
                        <p>Upload Comapany <br /> logo</p>
                    </div>

                </>
                :<>
                        {state !== 'Login' && (
                            <div className='border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-full mb-4 transition focus-within:border-blue-500'>
                                <img src={assets.person_icon} alt="" className='w-4 h-4' />
                                <input className='outline-none text-sm w-full' onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                            </div>
                        )}
                        <div className='border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-full mb-4 transition focus-within:border-blue-500'>
                            <img src={assets.email_icon} alt="" className='w-4 h-4' />
                            <input className='outline-none text-sm w-full' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email ID' required />
                        </div>
                        <div className='border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-full mb-2 transition focus-within:border-blue-500'>
                            <img src={assets.lock_icon} alt="" className='w-4 h-4' />
                            <input className='outline-none text-sm w-full' onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                        </div>

                    </>
                }
                {state === "Login"  && <p className='text-sm text-blue-600 mb-4 text-right cursor-pointer hover:underline'>Forgot Password?</p>}
                

                <button type='submit' className='bg-blue-600 mt-4 hover:bg-blue-700 transition w-full text-white py-2 rounded-full font-medium mb-4'>
                    {state === 'Login' ? 'login' : isTextDataSubmited? 'Create Account':'next'}
                </button>

                {
                    state === 'Login' ?
                        <p className='text-sm text-center text-gray-500'>
                            Don't have an account? <span onClick={() => setState("Sign Up")} className='text-blue-600 cursor-pointer hover:underline'>Sign Up</span>
                        </p>
                        :
                        <p className='text-sm text-center text-gray-500'>
                            Already have an account? <span onClick={() => setState("Login")} className='text-blue-600 cursor-pointer hover:underline'>Login</span>
                        </p>
                }

                <img onClick={e => setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
            </form>
        </div>
    )
}

export default RecruiterLogin
