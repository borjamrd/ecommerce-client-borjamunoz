import React from 'react'

const DefaultLayout = ({ children }) => {
    return (
        <div className='mt-4 min-h-screen z-0 flex justify-center'>
            <div className='lg:w-3/5 w-11/12'>
                {children}
            </div>

        </div>
    )
}

export default DefaultLayout