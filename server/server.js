require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const regRouter = require('./routes/users')

app.use(cors({ origin: [process.env.FRONT_END_URL] }))
app.use(regRouter)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.EXPRESS_PORT, () => {
  console.log('Server is going on, by port -', process.env.EXPRESS_PORT)
})
