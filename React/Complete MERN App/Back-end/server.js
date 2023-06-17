const app = require('./app')
const dotenv = require('dotenv')
const connectDataBase = require('./Config/database')

//Handling exception Error
process.on('uncaughtException', err => {
    console.log(`Error ${err.message}`)
    console.log('shutting Down Server due to Uncaught exception error')

    process.exit(1)
})

//config
dotenv.config({ path: 'Back-end/Config/config.env' })

// Database Connection
connectDataBase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Runing on http://localhost:${process.env.PORT}`)
})

//unhadled Promise rejections

process.on('unhandledRejection', err => {
    console.log(`Error ${err.message}`)
    console.log('shutting Down Server due to Unhandled Promise Rejection')

    server.close(() => {
        process.exit(1);
    })
});

