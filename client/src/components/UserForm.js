import React, { useState } from 'react'
import styled from 'styled-components'

const UserStyles = styled.div`

`

const UserForm = () => {
    const initValues = {
        name: "",
        password: "",
        email: "",
        comapnies: ""
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
        <UserStyles>
            <form>
                <label htmlFor="User Name">
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Username"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Password">
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Email">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="User Companies">
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