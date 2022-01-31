import React, { useState } from 'react'
import styled from 'styled-components'

const CompanyStyles = styled.div`
form{
        display: flex;
        justify-content: space-around;
    }
    label{
        display: flex;
        flex-direction: column;
    }
    .empty{
        margin: 5% auto;
        width: 20%;
        font-size: 40px;
    }
`

const CompanyForm = () => {
    const initValues = {
        name: "",
        size: "",
        owners: ""
    }
    const [formState, setFormState] = useState(initValues)
    const [inventory, setInventory] = useState([])

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        // This will get us the inventory using a get request and rerender
    }

    return ( 
        <CompanyStyles>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Company Name">
                    Company Name
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Company Name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Company Size">
                    Company Size
                    <input
                        type="text"
                        name="size"
                        placeholder="Enter Company Size"
                        value={formState.size}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Company Owner(s)">
                    Company Owner
                    <input
                        type="text"
                        name="owners"
                        placeholder="Who Owns This Company?"
                        value={formState.owners}
                        onChange={handleChange}
                    />
                </label>
            </form>
            {inventory.length > 0 ? <div className="inventory">placeholder</div> : <div className="empty">Empty Placeholder</div>}
        </CompanyStyles>
    )
}
 
export default CompanyForm