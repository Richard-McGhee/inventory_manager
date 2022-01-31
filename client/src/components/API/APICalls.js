import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Somethings will be cleaned up later as the project unfolds, like properly setting the user's state as logged in and pot passing the password around in plaintext, though this will likely happen on the backend. Apparently a lot needs to be adjusted here.

const [ items, setItems ] = useState([])
const [ newItem, setNewItem ] = useState({
    name: "",
    quantity: 0,
    price: 0.00,
    category: "",
    sku: 0,
    sold: 0,
    onHand: 0,
    desc: "",
    tags: "",
    onFloor: 0,
    owner: ""
})
const [ user, setUser ] = useState({
    name: "",
    password: "",
    email: "",
    comapnies: ""
})

// Creating Items - post
const makeItem = newItem => {
    axios.post("urlPlaceholder", newItem)
    .then((res)=> {
        <div>{res.data}</div>
    })
    .catch((err)=> {
        console.dir(err)
    })
}

// Deleting Items - delete
const delItem = id => {
    axios.delete(`urlPlaceholder${id}`)
    .then((res)=> {
        <div>Deleted {res.id}</div>
    })
    .catch((err)=> {
        console.dir(err)
    })
}

// Logging In - post
const logIn = loginInfo => {
    axios.post("urlPlaceholder", loginInfo)
    .then((res)=> {
        <div>{res.id} - Logged In</div>
    })
    .catch((err)=> {
        console.dir(err)
    })
}

// Logging Out - post (can't remember if it's a post to logout)
const logOut = id => {
    axios.post("urlPlaceholder", id)
    .then((res)=> {
        <div>{res.id} - Logged Out</div>
    })
    .catch((err)=> {
        console.dir(err)
    })
}

// Getting Items - get
const getItems = () => {useEffect(()=> {
    const getItems = () => {
        axios.get("urlPlaceholder")
        .then((res)=> {
            setItems(res.data)
        })
        .catch((err)=>{
            console.dir(err)
        })
    }; getItems()
}, [])}

// Filtering Items - get (will need logic for filtering items, will need query from BE to know what to pass first, might end up being a post request instead)
const getFiltered = () => {useEffect(()=> {
    const getItems = () => {
        axios.get("urlPlaceholder")
        .then((res)=> {
            setItems(res.data)
        })
        .catch((err)=>{
            console.dir(err)
        })
    }; getItems()
}, [])}

export {
    makeItem,
    delItem,
    logIn,
    logOut,
    getItems,
    getFiltered
}
