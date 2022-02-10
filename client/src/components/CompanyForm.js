import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import { companySchema } from './Utilities/YupSchemas'
// import { getItems } from './API/API'
import styled from 'styled-components'

const CompanyStyles = styled.div`
    h1{
        text-align: center;
        color: #D3C422;
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
    const initErrors = {
        name: "",
        size: "",
        owners: ""
    }
    const initDisabled = true
    const [formState, setFormState] = useState(initValues)
    const [formErrors, setFormErrors] = useState(initErrors)
    const [disabled, setDisabled] = useState(initDisabled)

    const handleChange = evt => {
        const {name, value} = evt.target
        yup
            .reach(companySchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors, [name]: ""
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors, [name]: err.errors[0]
                })
            })
        setFormState({
            ...formState,
            [name]: value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
    }

    useEffect(() => {
        companySchema.isValid(formState)
        .then(valid => {
            setDisabled(!valid)
        })
    }, [formState])

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

                <div className="errors">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.size}</div>
                    <div>{formErrors.owners}</div>
                    <button disabled={disabled}>Add Company</button>
                </div>
            </form>
        </CompanyStyles>
    )
}
 
export default CompanyForm