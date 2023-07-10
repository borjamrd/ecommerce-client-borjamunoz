import React from 'react'

const ProductDescription = ({ product }) => {
    return (
        <div>
            <ul>
                <li>Marca: <span>{product.brand}</span></li>
                <li>Modelo:<span>{product.model}</span> </li>
                <li>CPU: <span>{product.cpu}</span></li>
                <li>RAM: <span>{product.ram}</span></li>
                <li>Sistema Operativo:<span>{product.os}</span> </li>
                <li>Resolución:<span>{product.displayResolution}</span> </li>
                <li>Batería:<span>{product.battery}</span> </li>
                <li>Cámara: {product.primaryCamera?.map(cam => (<span>{cam}</span>))}</li>
                <li>Dimensiones: <span>{product.status}</span></li>

            </ul>
        </div>
    )
}

export default ProductDescription