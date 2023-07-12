import React from 'react'
import { useParams } from 'react-router'
import PlaceholderProduct from '../components/PlaceholderProduct'
import ProductActions from '../components/ProductActions'
import ProductDescription from '../components/ProductDescription'
import Alert from '../components/ui/Alert'
import Largeheading from '../components/ui/Largeheading'
import { useFetchProduct } from '../hooks/useFetchProduct'
function Product() {

    const params = useParams()

    const { data, loading, error } = useFetchProduct(`https://itx-frontend-test.onrender.com/api/product/${params.id}`, 'GET')



    return (
        <div className='lg:mt-6 mb-6'>

            {loading && (<PlaceholderProduct />)}
            {error && (<div>
                <Alert message={'Error al cargar datos'} />
            </div>)}
            {data && !error && <div>
                <Largeheading>{data.brand} | {data.model}</Largeheading>
                <div className='flex lg:flex-row flex-col'>
                    <div className="lg:w-2/5">
                        <div className='p-2 mb-4 rounded-lg bg-white w-fit'>
                            <img className='lg:h-80 h-40' src={data.imgUrl} alt={data.model} />
                        </div>

                    </div>
                    <div className='lg:w-3/5 ps-6 border-s border-slate-700'>
                        <ProductDescription product={data} />
                        <ProductActions product={data} />
                    </div>
                </div>

            </div>}
        </div >

    )
}

export default Product