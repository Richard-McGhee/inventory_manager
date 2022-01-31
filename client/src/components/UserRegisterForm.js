import React, { useState } from 'react'
import styled from 'styled-components'

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
        password: "",
        email: "",
        comapnies: ""
    }
    const [formState, setFormState] = useState(initValues)
    const [registerInfo, setRegisterInfo] = useState(initValues)

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value})
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        setRegisterInfo(formState)
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
            </form>
        </UserStyles>
    )
}
 
export default UserForm