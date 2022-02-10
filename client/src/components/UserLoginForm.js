import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { loginSchema } from './Utilities/YupSchemas'
import styled from 'styled-components'
// import { logIn } from './API/API'

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
        password: ""
    }
    const initErrors = {
        name: "",
        password: ""
    }
    const initDisabled = true
    
    const [formState, setFormState] = useState(initValues)
    const [loginInfo, setLoginInfo] = useState(initValues)
    const [formErrors, setFormErrors] = useState(initErrors)
    const [disabled, setDisabled] = useState(initDisabled)

    const handleChange = evt => {

        const {name, value} = evt.target
        yup
            .reach(loginSchema, name)
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
        setLoginInfo(formState)
        // This will push to home page on success
        // logIn("url", loginInfo)
        // .then((res) => {
        //     localStorafe.setItem("token", res.data.token)
        // })
        // .catch((err) => {
        //     console.dir(err)
        // })
        // push("/")
    }

    useEffect(() => {
        loginSchema.isValid(formState)
        .then(valid => {
            setDisabled(!valid)
        })
    }, [formState])

    return ( 
        <UserStyles>
            <h1>Login</h1>
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
                <div className="errors">
                    <div>{formErrors.name}</div>
                    <div>{formErrors.password}</div>
                    <button disabled={disabled}>Login</button>
                </div>
            </form>
        </UserStyles>
    )
}
 
export default UserForm