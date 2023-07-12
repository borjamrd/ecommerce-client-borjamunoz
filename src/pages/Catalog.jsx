import React, { useEffect, useState } from 'react'
import CatalogSection from '../components/CatalogSection'
import Largeheading from '../components/ui/Largeheading'
import Search from '../components/ui/Search'
import { useFetchProducts } from '../hooks/useFetchProducts'
import Alert from '../components/ui/Alert'

const Catalog = () => {
    const { data, loading, error } = useFetchProducts('https://itx-frontend-test.onrender.com/api/product', 'GET',)
    const [searchedItems, setsearchedItems] = useState(null)

    useEffect(() => {
        setsearchedItems(data)
    }, [data])

    const handleFilter = (event) => {
        const textSearched = event.target.value
        if (textSearched) {
            let items
            items = data?.filter(product =>
                product.brand.toLowerCase().includes(textSearched.toLowerCase()) ||
                product.model.toLowerCase().includes(textSearched.toLowerCase())
            )
            setsearchedItems(items)
        } else {
            setsearchedItems(data)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <Largeheading>Catálogo</Largeheading>
            <div className='mb-7'>
                <Search handleSearch={(e) => handleFilter(e)} placeholder={'Buscar'}></Search>
            </div>
            {error && (<Alert message={'Error al cargar datos'} />)}
            <CatalogSection loading={loading} searchedItems={searchedItems} />

        </div>
    )
}

export default Catalog