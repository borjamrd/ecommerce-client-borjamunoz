import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useUpdateCart } from '../hooks/useUpdateCart';

const ProductActions = ({ product }) => {

    const [isSaved, setIsSaved] = useState(false)
    const { products, addToCart } = useContext(CartContext);
    const { data, fetchData, loading, setData } = useUpdateCart()
    const [selectedColor, setselectedColor] = useState(product?.options?.colors[0] || null)
    const [selectedStorage, setselectedStorage] = useState(product?.options?.storages[0] || null)

    useEffect(() => {
        if (products.length > 0) {
            const isProductSaved = products.some(item => item.id === product.id)
            if (isProductSaved) {
                setIsSaved(true)
            }
        } else {
            setIsSaved(false)
        }
        if (data) {
            console.log('updated succesfully!: ', data)
            addToCart(product)
        }
        return () => {
            setData(null)
        }

    }, [data, products, isSaved])

    const addProduct = () => {
        console.log(selectedColor.code, selectedStorage.code)
        fetchData('https://itx-frontend-test.onrender.com/api/cart', 'POST', {
            id: product.id,
            colorCode: selectedColor.code,
            storageCode: selectedStorage.code
        })
    }

    return (
        <div>ProductActions
            <div>
                <div>
                    Color:  <select
                        defaultValue={selectedColor}
                        onChange={(e) => setselectedColor({ code: e.target.value })}
                        className="select w-full max-w-xs">
                        <option key={'colors'} disabled>Colors</option>
                        {product?.options?.colors?.map((color, i) => <option key={i} value={color.code}>{color.name}</option>)}

                    </select>
                </div>
                <div>
                    Storage: <select
                        defaultValue={selectedStorage}
                        onChange={(e) => setselectedStorage({ code: e.target.value })} className="select w-full max-w-xs">
                        <option key={'storages'} disabled>Storages</option>
                        {product?.options?.storages?.map((stg, i) => <option key={i}>{stg.name}</option>)}
                    </select>
                </div>
            </div>
            {loading && <div>...enviado</div>}
            {isSaved ? <div>product saved</div> : <button onClick={() => addProduct()} >Añadir </button>}

        </div>
    )
}

export default ProductActions