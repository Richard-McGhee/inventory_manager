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
                <label htmlFor="Item Name">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Item Name"
                        value={initValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Quantity">
                    <input
                        type="number"
                        name="quantity"
                        placeholder="0"
                        value={initValues.quantity}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Price">
                    <input
                        type="float"
                        name="price"
                        placeholder="0.00"
                        value={initValues.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Category">
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Item Category"
                        value={initValues.category}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item SKU">
                    <input
                        type="number"
                        name="sku"
                        placeholder="0"
                        value={initValues.sku}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items Sold">
                    <input
                        type="number"
                        name="sold"
                        placeholder="0"
                        value={initValues.sold}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Hand">
                    <input
                        type="number"
                        name="onHand"
                        placeholder="0"
                        value={initValues.onHand}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Description">
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter Item Description"
                        value={initValues.desc}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Tags">
                    <input
                        type="text"
                        name="tags"
                        placeholder="Enter Item Tags"
                        value={initValues.tags}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Floor">
                    <input
                        type="number"
                        name="onFloor"
                        placeholder="0"
                        value={initValues.onFloor}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Owner">
                    <input
                        type="text"
                        name="owner"
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