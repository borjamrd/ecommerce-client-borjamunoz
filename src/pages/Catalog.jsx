import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Largeheading from '../components/ui/Largeheading'
import { useFetch } from '../hooks/useFecth'
import Search from '../components/ui/Search'
import CatalogSection from '../components/CatalogSection'

const Catalog = () => {


    const { data, loading, error } = useFetch('https://itx-frontend-test.onrender.com/api/product',)

    const [searchedItems, setsearchedItems] = useState(null)

    useEffect(() => {
        setsearchedItems(data)
        return () => {
        }
    }, [data])


    const handleFilter = (event) => {
        const itemSearched = event.target.value
        if (itemSearched) {
            let items
            items = data?.filter(product => product?.brand?.toLowerCase() === itemSearched?.toLowerCase())
            setsearchedItems(items)
        } else {
            setsearchedItems(data)
        }

    }

    return (
        <div className='flex flex-col items-center'>
            <Largeheading>Catalog</Largeheading>
            <div className='mb-4'>
                <Search handleSearch={(e) => handleFilter(e)} placeholder={'Buscar'}></Search>
            </div>
            {error && (<div>Error</div>)}
            <CatalogSection loading={loading} searchedItems={searchedItems} />

        </div>
    )
}

export default Catalog