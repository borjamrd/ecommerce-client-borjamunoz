import React from 'react'

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
    return (
        <div>
            <img src={imgUrl} alt={model} />
            <h4>{brand} | {model}</h4>
            <span>{price}</span>
        </div>
    )
}

export default ProductCard