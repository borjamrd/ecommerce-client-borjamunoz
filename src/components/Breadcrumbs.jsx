import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icons } from './ui/Icons'

const Breadcrumbs = () => {

    const location = useLocation()
    const navigate = useNavigate()
    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb) => {
            currentLink = + `/${crumb}`
            return (
                <div className='ms-2 btn btn-xs btn-neutral' key={crumb}>
                    <Link to={currentLink}>/ {crumb}</Link>
                </div>
            )
        })


    return (
        <div className='mx-auto flex max-w-7xl items-center px-6 py-2 rounded-lg lg:px-8 bg-slate-800'>
            <button className="btn btn-xs" onClick={() => navigate(-1)}>
                <Icons.ChevronLeft />

                Atrás</button>


            {crumbs}
        </div>
    )
}

export default Breadcrumbs