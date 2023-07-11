import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
const Header = () => {

    const { products, emptyCart } = useContext(CartContext);
    const handleEmpty = () => {
        emptyCart()
    }

    return (
        <div style={{
            display: "flex", justifyContent: 'center'
        }}>
            <div>
                <Link to="/">imagen a home</Link>
            </div>
            <div>
                Stored products: {products?.length}
                <button onClick={() => handleEmpty()}>Vaciar carrito</button>
            </div>

        </div>

    )
}

export default Header