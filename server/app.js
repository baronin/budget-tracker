const express = require('express');
const cors = require('cors')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = YAML.load('swagger/api.yaml')

const app = express()
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const userRouter = require('./routes/user')

const host = '127.0.0.1'
const port = 3000


app.use(express.json())
app.use('/api', userRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`Server listens http://${host}:${port}`)
})
