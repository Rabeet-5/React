import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    // console.log(setUser)



    return <>
        <Box sx={{ height: '100vh' }}
            className="d-flex justify-content-center align-items-center "
        >

            <Box>
                <Typography variant="h3">Login</Typography>

                <Box className='p-2' >
                    <TextField
                        variant="outlined"
                        label='E-mail'
                        type={'email'}
                        color='warning'
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }}
                    />
                </Box>

                <Box className='p-2'>
                    <TextField
                        variant="outlined"
                        label='Password'
                        type={'password'}
                        color='warning'
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }}
                    />
                </Box>

                <Box className='p-2 text-center'>
                    <Button
                        variant="contained"
                        className="m-2 p-2"
                        color='warning'
                    >Login</Button>
                </Box>

                <Box className='text-center p-2'>
                    <Button className="p-2 m-2 "
                        variant="outlined"
                        color="warning"
                        onClick={(e) => {
                            navigate('/register/*')
                            console.log(setUser)
                        }}
                    >
                        Register here
                    </Button>
                </Box>
            </Box>

        </Box>
    </>

}


export default Login;