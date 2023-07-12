import React from 'react'

const Select = ({ text, data }) => {
    return (
        <select className="select w-full max-w-xs">
            <option disabled selected>{text}</option>
            {data?.map(item => <option key={item}>Homer</option>)}
        </select>
    )
}

export default Select