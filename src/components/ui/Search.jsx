import React from 'react'

const Search = ({ placeholder, handleSearch }) => {
    return (
        <input onChange={(e) => handleSearch(e)} type="text" placeholder={placeholder} className="input w-full max-w-xs" />
    )
}

export default Search