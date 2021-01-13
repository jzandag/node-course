const express = require('express')
require('./db/db-config')

//routes
const taskRouter = require('./routes/api/bug')
const userRouter = require('./routes/api/user')

const app = express()
const PORT = process.env.PORT || 3000

//Dont forget these, it converts all request into json
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/bugs', taskRouter)
app.use('/users', userRouter)

app.get('/', (req,res) => {
    res.send('Hello')
});

app.listen(PORT, ()=> console.log(`Server started at PORT:${PORT}`))