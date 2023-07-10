import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../hooks/useFecth'
import Largeheading from '../components/ui/Largeheading'
import ProductDescription from '../components/ProductDescription'
import ProductActions from '../components/ProductActions'

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
                <div className='flex'>
                    <div className="w-2/5 md:w-full">
                        <img src={data.imgUrl} alt={data.model} />
                    </div>
                    <div className='w-3/5 md:w-full'>
                        <ProductDescription product={data} />
                        <ProductActions product={data} />
                    </div>
                </div>

            </div> : (<div>No hay información de producto</div>)}

        </div >

    )
}

export default Product