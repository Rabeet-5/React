const app = require('./app')
const dotenv = require('dotenv')
const connectDataBase = require('./Config/database');
const cloudinary = require('cloudinary');

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

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Runing on http://localhost:${process.env.PORT}`)
})

//unhandled Promise rejections

process.on('unhandledRejection', err => {
    console.log(`Error ${err.message}`)
    console.log('shutting Down Server due to Unhandled Promise Rejection')

    server.close(() => {
        process.exit(1);
    })
});

