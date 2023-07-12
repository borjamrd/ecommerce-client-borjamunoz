import React from 'react'

const Logo = () => {
    return (
        <div className='flex gap-2'>
            <svg className="stroke-indigo-500 stroke-2" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24" cy="24" r="23" strokeLinejoin="round"></circle> <path d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47" strokeLinejoin="round"></path> <path d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47" strokeLinejoin="round"></path> <path d="M1 24H47"></path> </svg>
            <span className='hidden lg:block font-semibold text-4xl text-indigo-400'>Napphone</span>
        </div>

    )
}

export default Logo