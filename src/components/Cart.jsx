import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { products, emptyCart } = useContext(CartContext);
    const handleEmpty = () => {
        emptyCart()
    }
    return (
        <div>
            {products?.length > 0 ? products?.map((product, i) =>

                <div key={i} className='p-4 mx-2 my-1 rounded-lg flex transition hover:bg-gray-800'>
                    <div className='w-1/5'>
                        <div className='p-2 rounded-lg bg-white w-fit'>
                            <img className='max-h-16' src={product.imgUrl} alt={product.model} />
                        </div>
                    </div>
                    <div className='w-4/5 flex flex-col'>
                        <span className='text-xl font-semibold border-b border-white'>{product.brand} | {product.model}</span>
                        <span className='text-3xl text-white font-semibold'>{product.price ? product.price + '€' : ''} </span>
                    </div>
                </div>
            ) : <div>No hay productos</div>}
            {products?.length > 0 && <button onClick={() => handleEmpty()} className="btn btn-sm btn-ghost">
                Vaciar carrito
            </button>}
        </div>
    )
}

export default Cart