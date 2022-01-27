import React, { useState } from 'react'
import styled from 'styled-components'

const CompanyStyles = styled.div`

`

const CompanyForm = () => {
    const initValues = {
        name: "",
        size: "",
        owners: ""
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
        <CompanyStyles>
            <form>
                <label htmlFor="Company Name">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Company Name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Company Size">
                    <input
                        type="text"
                        name="size"
                        placeholder="Enter Company Size"
                        value={formState.size}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Company Owner(s)">
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