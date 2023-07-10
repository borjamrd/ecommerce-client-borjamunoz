import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation()
    const navigate = useNavigate()
    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb) => {
            currentLink = + `/${crumb}`
            return (
                <div className='crumb' key={crumb}>
                    <Link to={currentLink}>/ {crumb}</Link>
                </div>
            )
        })


    return (
        <div className='breadcrumbs'>
            <button onClick={() => navigate(-1)}>Back</button>
            {crumbs}
        </div>
    )
}

export default Breadcrumbs