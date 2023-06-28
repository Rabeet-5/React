
//Creating Token and saving in Cookie
const sendToken = (user,statusCode,res) => {
    
    const Token = user.JWTToken()

    //option for cookie expire

    const options = {
        httpOnly:true,
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
        )
    }

    res.status(statusCode).cookie('token',Token,options).json({
        success:true,
        user,
        Token
    })
}
module.exports = sendToken;