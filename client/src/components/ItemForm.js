import React, { useState } from 'react'
// import { makeItem } from './API/APICalls'
import styled from 'styled-components'

const ItemsStyles = styled.div`
    form{
        margin: 0 auto;
        margin-top: 5%;
        width: 40%;
        display: flex;
        flex-direction: column;
    }
    label{
        display: flex;
        flex-direction: column;
        margin: 2% 0;
    }
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
        owner: {Companies: "", User: ""}

    }
    const [formState, setFormState] = useState(initValues)
    const [newItem, setNewItem] = useState(initValues)

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        setNewItem(formState)
        // This will add items to the database
        // makeItem("urlPlaceholder", newItem)
        // .then((res) => {
        //     // This will push to inventory page with new item
        // })
        // .catch((err) => {
        //     console.dir(err)
        // })
    }

    return ( 
        <ItemsStyles>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="Item Name">
                    Name
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Item Name"
                        value={initValues.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Quantity">
                    Quantity
                    <input
                        type="number"
                        name="quantity"
                        placeholder="0"
                        value={initValues.quantity}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Price">
                    Price
                    <input
                        type="float"
                        name="price"
                        placeholder="0.00"
                        value={initValues.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Category">
                    Category
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Item Category"
                        value={initValues.category}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item SKU">
                    SKU
                    <input
                        type="number"
                        name="sku"
                        placeholder="0"
                        value={initValues.sku}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items Sold">
                    #Sold
                    <input
                        type="number"
                        name="sold"
                        placeholder="0"
                        value={initValues.sold}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Hand">
                    #On Hand
                    <input
                        type="number"
                        name="onHand"
                        placeholder="0"
                        value={initValues.onHand}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Description">
                    Description
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter Item Description"
                        value={initValues.desc}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Tags">
                    Tags
                    <input
                        type="text"
                        name="tags"
                        placeholder="Enter Item Tags"
                        value={initValues.tags}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Floor">
                    #On Floor
                    <input
                        type="number"
                        name="onFloor"
                        placeholder="0"
                        value={initValues.onFloor}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Owner: Companies">
                    Owner: Companies
                    <input
                        type="text"
                        name="owner"
                        placeholder="Who Owns This Item Entry"
                        value={initValues.owner.Companies}
                        onChange={handleChange}
                    />
                </label>  
                <label htmlFor="Item Owner: User">
                    Owner: User
                    <input
                        type="text"
                        name="owner"
                        placeholder="Who Owns This Item Entry"
                        value={initValues.owner.User}
                        onChange={handleChange}
                    />
                </label>               
            </form>
        </ItemsStyles>
    )
}
 
export default ItemsForm