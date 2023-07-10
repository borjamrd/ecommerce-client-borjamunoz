import React from 'react'
import ProductCard from '../components/ProductCard'
import Largeheading from '../components/ui/Largeheading'
import { useFetch } from '../hooks/useFecth'

const Catalog = () => {


    const { data, loading, error, handleCancelRequest } = useFetch('https://itx-frontend-test.onrender.com/api/product',)
    console.log(data)

    return (
        <div>
            <Largeheading>Catalog</Largeheading>
            {loading && (<div>Loading</div>)}
            {error && (<div>Error</div>)}
            {data ? data?.map((product, index) =>
            (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                    imgUrl={product.imgUrl}
                ></ProductCard>
            )
            ) : <div>No hay productos que mostrar</div>}

        </div>
    )
}

export default Catalog