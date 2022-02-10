import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { registerSchema } from './Utilities/YupSchemas'
// import { register } from './API/API'
import styled from 'styled-components'

const UserStyles = styled.div`
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
`

const UserForm = () => {
    const { push } = useHistory()
    const initValues = {
        name: "",
        password: "",
        passConfirm: "",
        email: "",
        comapnies: ""
    }
    const initErrors = {
        name: "",
        password: "",
        passConfirm: "",
        email: "",
        comapnies: ""
    }
    const initDisabled = true

    const [formState, setFormState] = useState(initValues)
    const [registerInfo, setRegisterInfo] = useState(initValues)
    const [formErrors, setFormErrors] = useState(initErrors)
    const [disabled, setDisabled] = useState(initDisabled)

    const handleChange = evt => {
        const {name, value} = evt.target
        yup
            .reach(registerSchema, name)
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
        setRegisterInfo(formState)
        // This will handle our registering after user submits
        // register("placholderUrl", registerInfo)
        // .then((res) => {
        //     console.log(res) this is just to check the result
        // })
        // .catch((err) => {
        //     console.dir(err)
        // })
        // push("/")
    }

    useEffect(() => {
        registerSchema.isValid(formState)
        .then(valid => {
            setDisabled(!valid)
        })
    }, [formState])

    return ( 
        <UserStyles>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="User Name">
                    UserName
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Username"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Password">
                    Password
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Password">
                    Confirm Password
                    <input
                        type="text"
                        name="passConfirm"
                        placeholder="Confirm Password"
                        value={formState.passConfirm}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Email">
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Companies">
                    Companies
                    <input
                        type="text"
                        name="companies"
                        placeholder="Enter Company Name(s)"
                        value={formState.comapnies}
                        onChange={handleChange}
                    />
                </label>

                <div className="errors">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.password}</div>
                    <div>{formErrors.passConfirm}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.comapnies}</div>
                    <button disabled={disabled}>Register</button>
                </div>
            </form>
        </UserStyles>
    )
}
 
export default UserForm