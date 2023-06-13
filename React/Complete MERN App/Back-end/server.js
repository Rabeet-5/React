const app = require('./app')
const dotenv = require('dotenv')
const connectDataBase = require('./Config/database')

//config
dotenv.config({path:'Back-end/Config/config.env'})

// Database Connection
connectDataBase()


app.listen(process.env.PORT,()=>{
    console.log(`Server is Runing on http://localhost:${process.env.PORT}`)
})