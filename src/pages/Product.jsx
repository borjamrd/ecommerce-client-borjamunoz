import React from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../hooks/useFecth'
import Largeheading from '../components/ui/Largeheading'
import ProductDescription from '../components/ProductDescription'
import ProductActions from '../components/ProductActions'
import PlaceholderProduct from '../components/PlaceholderProduct'
function Product() {

    const params = useParams()
    const { data, loading, error } = useFetch(`https://itx-frontend-test.onrender.com/api/product/${params.id}`, 'GET')

    return (
        <div>

            {loading && (<PlaceholderProduct />)}
            {error && (<div>Error</div>)}
            {data && <div>
                <Largeheading>{data.brand} | {data.model}</Largeheading>
                <div className='flex lg:flex-row flex-col'>
                    <div className="lg:w-2/5">
                        <div className='p-2 sm: mb-4 rounded-lg bg-white w-fit'>
                            <img className='h-80' src={data.imgUrl} alt={data.model} />
                        </div>

                    </div>
                    <div className='lg:w-3/5 ps-4 border-s border-slate-100'>
                        <ProductDescription product={data} />
                        <ProductActions product={data} />
                    </div>
                </div>

            </div>}
        </div >

    )
}

export default Product