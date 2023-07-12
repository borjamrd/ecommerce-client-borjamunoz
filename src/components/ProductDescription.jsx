import React from 'react'

const ProductDescription = ({ product }) => {

    const descriptionTitles = [
        { title: 'Marca', value: 'brand' },
        { title: 'Modelo', value: 'model' },
        { title: 'Precio', value: 'price' },
        { title: 'CPU', value: 'cpu' },
        { title: 'RAM', value: 'ram' },
        { title: 'Sistema Operativo', value: 'os' },
        { title: 'Resolución', value: 'displayResolution' },
        { title: 'Batería', value: 'primaryCamera' },
        { title: 'Cámara', value: 'brand' },
        { title: 'Dimensiones', value: 'dimentions' },
        { title: 'Peso', value: 'weight' },
    ]
    const checkArray = (item) => {
        if (Array.isArray()) {
            return item.map(subitem => (<span>{subitem}</span>))
        } else {
            return item
        }
    }

    const descriptionItems = descriptionTitles.map((desc, i) => {
        if (product?.[desc.value]) {
            return <li>{desc.title}: <span>{checkArray(product?.[desc.value])}</span></li>
        }
        return null
    })



    return (
        <div>
            <ul>
                {descriptionItems}
            </ul>
        </div>
    )
}

export default ProductDescription