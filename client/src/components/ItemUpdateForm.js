import React, { useState } from 'react'
// import { updateItem } from './API/API'
import { dummyItems } from './API/DummyData'
import styled from 'styled-components'

const ItemsStyles = styled.div`
    h1{
        text-align: center;
        color: #D3C422;
    }
    form{
        margin: 0 auto;
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
    const startingItem = dummyItems[0]
    const initValues = startingItem
    const [formState, setFormState] = useState(initValues)
    const [updatedItem, setUpdatedItem] = useState(initValues)

    const handleChange = evt => {
        setUpdatedItem({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        // This will update the item on the database
        // updateItem("urlPlaceholder", updatedItem)
        // .then((res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.dir(err)
        // })
        // This will push to inventory page with the updated item
    }

    return ( 
        <ItemsStyles>
            <h1>Create a New Item</h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="Item Name">
                    Name
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Item Name"
                        value={updatedItem.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Quantity">
                    Quantity
                    <input
                        type="number"
                        name="quantity"
                        placeholder="0"
                        value={updatedItem.quantity}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Price">
                    Price
                    <input
                        type="float"
                        name="price"
                        placeholder="0.00"
                        value={updatedItem.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Category">
                    Category
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Item Category"
                        value={updatedItem.category}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item SKU">
                    SKU
                    <input
                        type="number"
                        name="sku"
                        placeholder="0"
                        value={updatedItem.SKU}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items Sold">
                    #Sold
                    <input
                        type="number"
                        name="sold"
                        placeholder="0"
                        value={updatedItem.sold}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Hand">
                    #On Hand
                    <input
                        type="number"
                        name="onHand"
                        placeholder="0"
                        value={updatedItem.onHand}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Description">
                    Description
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter Item Description"
                        value={updatedItem.desc}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Tags">
                    Tags
                    <input
                        type="text"
                        name="tags"
                        placeholder="Enter Item Tags"
                        value={updatedItem.tags}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Items On Floor">
                    #On Floor
                    <input
                        type="number"
                        name="onFloor"
                        placeholder="0"
                        value={updatedItem.onFloor}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Item Owner">
                    Owner
                    <input
                        type="text"
                        name="owner"
                        placeholder="Who Owns This Item Entry"
                        value={updatedItem.owner}
                        onChange={handleChange}
                    />
                </label>
                {/* <label htmlFor="Item Owner: Companies">
                    Owner: Companies
                    <input
                        type="text"
                        name="owner"
                        placeholder="Who Owns This Item Entry"
                        value={updatedItem.owner.Companies}
                        onChange={handleChange}
                    />
                </label>   */}
                {/* <label htmlFor="Item Owner: User">
                    Owner: User
                    <input
                        type="text"
                        name="owner"
                        placeholder="Who Owns This Item Entry"
                        value={updatedItem.owner.User}
                        onChange={handleChange}
                    />
                </label>                */}
            </form>
        </ItemsStyles>
    )
}
 
export default ItemsForm