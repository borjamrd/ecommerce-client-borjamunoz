import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../hooks/useFecth'
import Largeheading from '../components/ui/Largeheading'

function Product() {

    const params = useParams()
    const { data, loading, error, handleCancelRequest } = useFetch(`https://itx-frontend-test.onrender.com/api/product/${params.id}`, 'GET')
    console.log(data)

    return (
        <div>

            {loading && (<div>Loading</div>)}
            {error && (<div>Error</div>)}
            {data ? <div>
                <Largeheading>{data.brand} | {data.model}</Largeheading>
            </div> : (<div>No hay información de producto</div>)}

        </div >

    )
}

export default Product