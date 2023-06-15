const dotenv = require('dotenv');
const app = require('./app');
const DB = require('./config/database')

dotenv.config({path:'Back-end/config/config.env'})

//Database connection
DB()

app.listen(process.env.PORT,()=>{
    console.log(`server started on http://localhost:${process.env.PORT}`)
})