const express = require('express')
const { delay } = require('../utils/random')

const app = express()
const port = 4000

app.get('/', (_, res) => {
  res.send("Nothing to see here. I'm just a simple server 😅")
})

// Simulate delay response
app.use((req, res, next) => {
  delay(next)
})

app.get('/address/:address', (req, res) => {
  const { address } = req.params
  try {
    const addressJson = require(`./address/${address}.json`)
    res.json(addressJson)
  } catch (e) {
    res.status(500)
    res.json({ error: `Address "${address}" not found` })
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
