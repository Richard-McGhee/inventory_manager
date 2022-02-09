require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

// Routers
server.get("/", (req, res) => {
    if(req){
        res.status(200).send("<h1>Hail Server</h1>")
    }else {
        res.status(500).json({ message: "I have no idea how you got this error" })
    }
})

// Fallback
server.use(function (req, res){
    res.status(404).send("This is not an endpoint I built. Please check your url and try again.")
})

module.exports = server;