const http = require('http')
const port = 3000
const os = require('os')

const requestHandler = (request, response) => {
  response.end('Hello from inside Docker node + os.hostname() + \n')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Error happened', err)
  }

  console.log(`Server running on ${port}`)
})
