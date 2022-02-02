import axios from 'axios'

// Somethings will be cleaned up later as the project unfolds, like properly setting the user's state as logged in and pot passing the password around in plaintext, though this will likely happen on the backend. Apparently a lot needs to be adjusted here.

// Creating Items - post
const makeItem = (url, newItem) => {
    axios.post(url, newItem)
}

// Deleting Items - delete
const delItem = (url) => {
    axios.delete(url)
}

// Logging In - post
const logIn = (url, loginInfo) => {
    axios.post(url, loginInfo)
}

// Logging Out - post (can't remember if it's a post to logout)
const logOut = (url, id) => {
    axios.post(url, id)
}

// Registering - post
const register = (url, newUser) => {
    axios.post(url, newUser)
}

// Getting Items - get
const getItems = (url) => {
    axios.get(url)
}

// Filtering Items - get (will need logic for filtering items, will need query from BE to know what to pass first, might end up being a post request instead)
const getFiltered = url => {
    axios.get(url)
}

export {
    makeItem,
    delItem,
    logIn,
    logOut,
    register,
    getItems,
    getFiltered
}
