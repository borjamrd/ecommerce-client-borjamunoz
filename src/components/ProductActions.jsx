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
        fetchData('https://itx-frontend-test.onrender.com/api/cart', 'POST', {
            id: product.id,
            colorCode: selectedColor.code,
            storageCode: selectedStorage.code
        })
    }

    return (
        <div className='mt-4'>
            <div className='flex flex-col gap-2'>
                <div >
                    <label htmlFor="color" className='font-semibold text-white me-2'>
                        Color:
                    </label>
                    <select
                        id='color'
                        defaultValue={selectedColor}
                        onChange={(e) => setselectedColor({ code: e.target.value })}
                        className="select w-full max-w-xs select-xs">
                        <option key={'colors'} disabled>Colors</option>
                        {product?.options?.colors?.map((color, i) => <option key={i} value={color.code}>{color.name}</option>)}

                    </select>
                </div>
                <div>
                    <label htmlFor="storage" className='font-semibold text-white me-2'>
                        Almacenamiento:
                    </label> <select
                        id='storage'
                        defaultValue={selectedStorage}
                        onChange={(e) => setselectedStorage({ code: e.target.value })} className="select w-full max-w-xs select-xs">
                        <option key={'storages'} disabled>Storages</option>
                        {product?.options?.storages?.map((stg, i) => <option key={i}>{stg.name}</option>)}
                    </select>
                </div>
            </div>
            <div className='mt-4'>
                {loading && <button className="btn">
                    <span className="loading loading-spinner"></span>
                    Guardando...
                </button>}
                {!loading && !isSaved &&
                    <button onClick={() => addProduct()} className="btn btn-accent">
                        Añadir al carrito
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>}
                {isSaved && <button disabled className="btn btn-active btn-neutral">Ya añadido en carrito</button>}

            </div>

        </div>
    )
}

export default ProductActions