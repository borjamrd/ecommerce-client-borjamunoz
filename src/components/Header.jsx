import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Breadcrumbs from './Breadcrumbs';
import { Icons } from './ui/Icons';
import Logo from './ui/Logo';
import Cart from './Cart';
const Header = () => {

    const { products, emptyCart } = useContext(CartContext);
    const handleEmpty = () => {
        emptyCart()
    }

    return (
        <div className='bg-slate-900 sticky top-0 w-full z-20'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 ">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <Logo />
                    </Link>
                </div>
                <div className="flex lg:ms-auto gap-2">
                    <button onClick={() => window.cartModal.showModal()} className="btn btn-sm btn-ghost">
                        <Icons.ShoppingCart />
                        {products?.length > 0 && <div className="badge badge-info"> {products?.length}</div>}
                    </button>
                    <dialog id="cartModal" className="modal">
                        <form method="dialog" className="modal-box w-11/12 max-w-2xl">
                            <h3 className="font-bold text-lg">Carrito</h3>
                            <div>
                                <Cart></Cart>
                            </div>
                            <div className="modal-action">
                                <button className="btn">Cerrar</button>
                            </div>
                        </form>
                    </dialog>
                    {products?.length > 0 && <button onClick={() => handleEmpty()} className="btn btn-sm btn-ghost">
                        Vaciar carrito
                    </button>}
                </div>
            </nav>
            <Breadcrumbs />

        </div>


    )
}

export default Header