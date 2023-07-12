import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
    return (
        <div className='transition min-w-fit transform hover:-translate-y-1 lg:w-1/4 sm:w-full flex flex-col items-center p-2'>
            <div className='p-2 rounded-lg bg-white w-fit'>
                <img src={imgUrl} alt={model} />
            </div>
            <h4>{brand} | {model}</h4>
            <span className='text-xl font-semibold'>{price && price + '€'}</span>
            <Link to={id}>
                {/* Ver producto */}
                <button className="btn glass btn-xs">Ver producto</button>
            </Link>
        </div>
    )
}

export default ProductCard