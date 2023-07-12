import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Breadcrumbs from './Breadcrumbs';
import { Icons } from './ui/Icons';
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
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                </div>
                <div className="flex lg:ms-auto gap-2">
                    <button className="btn btn-sm btn-ghost">
                        <Icons.ShoppingCart />
                        {products?.length > 0 && <div className="badge badge-accent"> {products?.length}</div>}
                    </button>


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