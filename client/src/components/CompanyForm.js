import React, { useState } from 'react'
// import { getItems } from './API/APICalls'
import styled from 'styled-components'

const CompanyStyles = styled.div`
    h1{
        text-align: center;
        color: #D3C422;
    }
    h1:hover{
        color: #C8A659;
    }
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
        // getItems("urlPlaceholder")
        // .then((res) => {
        //     setInventory(res.data)
        // })
        // .catch((err) => {
        //     console.dir(err)
        // })
    }

    return ( 
        <CompanyStyles>
            <h1>Add a Company</h1>
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
        </CompanyStyles>
    )
}
 
export default CompanyForm