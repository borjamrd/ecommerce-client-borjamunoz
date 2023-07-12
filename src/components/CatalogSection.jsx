import React from 'react'
import ProductCard from './ProductCard'
import PlaceholderCatalog from './PlaceholderCatalog'

const CatalogSection = ({ loading, searchedItems }) => {
    return (<>
        {loading && (<PlaceholderCatalog />)}
        <div className='flex lg:flex-row sm:flex-col justify-center flex-wrap'>
            {!loading && searchedItems?.map((product) =>
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
            )}

        </div>
    </>


    )
}

export default CatalogSection