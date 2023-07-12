import React from 'react'

const PlaceholderCatalog = () => {


    const items = Array(8).fill('')
    return (
        <div className='flex lg:flex-row gap-4 sm:flex-col justify-center flex-wrap'>
            {items.map((x, i) => <div key={i} className='bg-slate-800 lg:w-64 w-64 rounded-lg h-80'>

                &nbsp;
            </div>
            )}

        </div>
    )
}

export default PlaceholderCatalog