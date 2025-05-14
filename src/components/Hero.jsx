import React, { useContext , useRef} from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const {setSearchFilter,setIsSearched} = useContext(AppContext)
    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = ()=>{
        setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value
        })

        setIsSearched(true)

        // console.log({
        //     title:titleRef.current.value,
        //     location:locationRef.current.value
        // });
    }

  return (
    <div className='container 2xl:px-20 mx-auto my-10 px-4'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-2xl px-4'>
        <h2 className='text-3xl sm:text-4xl font-semibold mb-4'>Over 10,000+ jobs to apply</h2>
        <p className='text-sm sm:text-xl mb-8'>Your Next Big Career Move Starts Here - Explore the Best Job Opportunities and take the first step Towards your future</p>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-3xl mx-auto'>
          {/* Job Search Input */}
          <div className='flex items-center bg-white rounded-full px-3 py-2 w-full sm:w-auto'>
            <img src={assets.search_icon} alt="search" className='w-5 h-5 mr-2' />
            <input 
              type="text" 
              placeholder='Search for jobs' 
              className='text-black text-sm sm:text-base outline-none w-full bg-transparent'
              ref={titleRef}
            />
          </div>

          {/* Location Input */}
          <div className='flex items-center bg-white rounded-full px-3 py-2 w-full sm:w-auto'>
            <img src={assets.location_icon} alt="location" className='w-5 h-5 mr-2' />
            <input 
              type="text" 
              placeholder='Location' 
              className='text-black text-sm sm:text-base outline-none w-full bg-transparent'
              ref={locationRef}
            />
          </div>

          {/* Search Button */}
          <button onClick={onSearch} className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 w-full sm:w-auto'>
            Search
          </button>
        </div>
      </div>

      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex '>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>Trusted by</p>
            <img className='h-6' src={assets.microsoft_logo} alt="" />
            <img className='h-6' src={assets.walmart_logo} alt="" />
            <img className='h-6' src={assets.accenture_logo} alt="" />
            <img className='h-6' src={assets.samsung_logo} alt="" />
            <img className='h-6' src={assets.amazon_logo} alt="" />
            <img className='h-6' src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
