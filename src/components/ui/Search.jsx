import React from 'react'

const Search = ({ placeholder, handleSearch }) => {
    return (
        <input onChange={(e) => handleSearch(e)} type="text" placeholder={placeholder} className="input input-bordered input-info w-full max-w-xs" />
    )
}

export default Search