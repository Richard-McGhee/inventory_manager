import React, { useState } from 'react'
import styled from 'styled-components'
// import { logIn } from './API/APICalls'

const UserStyles = styled.div`
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
    const initValues = {
        name: "",
        password: ""
    }
    const [formState, setFormState] = useState(initValues)
    const [loginInfo, setLoginInfo] = useState(initValues)

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        setLoginInfo(formState)
        // logIn(loginInfo)
        // This will push to home page on success
    }

    return ( 
        <UserStyles>
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
            </form>
        </UserStyles>
    )
}
 
export default UserForm