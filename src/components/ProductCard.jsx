import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
    return (
        <div>
            <img src={imgUrl} alt={model} />
            <h4>{brand} | {model}</h4>
            <span>{price}</span>
            <Link to={id}>See product</Link>
        </div>
    )
}

export default ProductCard