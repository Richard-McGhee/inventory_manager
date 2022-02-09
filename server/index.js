const server = require('./server')

const port = process.env.PORT || 666
server.listen(port, () => {
    console.log(`Server up and listening on Satan's port: ${port}`)
})