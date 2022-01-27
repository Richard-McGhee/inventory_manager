import React, { useState } from 'react'
import styled from 'styled-components'

const ItemsStyles = styled.div`

`

const ItemsForm = () => {
    const initValues = {
        name: "",
        quantity: 0,
        price: 0.00,
        category: "",
        sku: 0,
        sold: 0,
        onHand: 0,
        desc: "",
        tags: "",
        onFloor: 0,
        owner: ""

    }
    const [formState, setFormState] = useState(initValues)

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
    }

    return ( 
        <ItemsStyles>
            <form>
                <label htmlFor="name">
                    <input 
                        type="text"
                        placeholder="Enter Item Name"
                        value={initValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Quantity">
                    <input
                    type="number"
                    placeholder="0"
                    value={initValues.quantity}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Price">
                    <input
                    type="float"
                    placeholder="0.00"
                    value={initValues.price}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Category">
                    <input
                    type="text"
                    placeholder="Enter Item Category"
                    value={initValues.category}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="SKU">
                    <input
                    type="number"
                    placeholder="0"
                    value={initValues.sku}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Sold">
                    <input
                    type="number"
                    placeholder="0"
                    value={initValues.sold}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="On Hand">
                    <input
                    type="number"
                    placeholder="0"
                    value={initValues.onHand}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Description">
                    <input
                    type="text"
                    placeholder="Enter Item Description"
                    value={initValues.desc}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Tags">
                    <input
                    type="text"
                    placeholder="Enter Item Tags"
                    value={initValues.tags}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="On Floor">
                    <input
                    type="number"
                    placeholder="0"
                    value={initValues.onFloor}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor="Owner">
                    <input
                    type="text"
                    placeholder="Who Owns This Item Entry"
                    value={initValues.owner}
                    onChange={handleChange}
                    />
                </label>                
            </form>
        </ItemsStyles>
    )
}
 
export default ItemsForm