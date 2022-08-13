
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, 응답) => {
  응답.send('Hello World!')
})
app.get('/1', (req, 응답) => {
    응답.send('당근온라인 망해야!!')
    
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})