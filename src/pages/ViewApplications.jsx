import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 text-sm'>
          <thead>
            <tr className='bg-gray-100 border-0'>
              <th className='py-3 px-4 text-left'>#</th>
              <th className='py-3 px-4 text-left'>Username</th>
              <th className='py-3 px-4 text-left max-sm:hidden'>Job Title</th>
              <th className='py-3 px-4 text-left max-sm:hidden'>Location</th>
              <th className='py-3 px-4 text-left'>Resume</th>
              <th className='py-3 px-4 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className='border-0  hover:bg-gray-50'>
                <td className='py-3 px-4 text-center'>{index + 1}</td>
                <td className='py-3 px-4 flex items-center gap-3'>
                  <img
                    className='w-10 h-10 rounded-full max-sm:hidden'
                    src={applicant.imgSrc}
                    alt={applicant.name}
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className='py-3 px-4 max-sm:hidden'>{applicant.jobTitle}</td>
                <td className='py-3 px-4 max-sm:hidden'>{applicant.location}</td>
                <td className='py-3 px-4'>
                  <a
                    href={applicant.resumeUrl || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-100 text-blue-600 px-3 py-1 rounded inline-flex items-center gap-1 hover:bg-blue-200'
                  >
                    Resume
                    <img src={assets.resume_download_icon} alt="Download" className='w-4 h-4' />
                  </a>
                </td>
                <td className='py-3 px-4 relative'>
                  <div className='relative inline-block group'>
                    <button className='text-gray-600 text-xl px-2'>⋯</button>
                    <div className='absolute right-0 z-10 hidden group-hover:block bg-white border border-gray-200 rounded shadow w-28'>
                      <button className='block w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100'>Accept</button>
                      <button className='block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications
