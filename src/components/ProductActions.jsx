import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useFetch } from '../hooks/useFecth';
import { useUpdateCart } from '../hooks/useUpdateCart';

const ProductActions = ({ product }) => {

    const { products, addToCart } = useContext(CartContext);

    const { data, fetchData, loading } = useUpdateCart()



    const addProduct = () => {
        // addToCart(product)
        fetchData('https://itx-frontend-test.onrender.com/api/cart', 'POST', {
            id: product.id,
            colorCode: product.options.colors[0].code,
            storageCode: product.options.storages[0].code
        })
        console.log(data)

    }

    return (
        <div>ProductActions
            <div>
                <div>
                    Colors: {product?.options?.colors?.map(color => (<span key={color.code}>{color.name}¡</span>))}
                </div>
                <div>
                    Storage: {product?.options?.storages?.map(stg => (<span key={stg.name} >{stg.name}</span>))}
                </div>
            </div>
            {loading && <div>...enviado</div>}
            <button onClick={() => addProduct()} >Añadir </button>
        </div>
    )
}

export default ProductActions