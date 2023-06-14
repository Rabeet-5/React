import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [usersignup, setUsersignup] = useState({})
    const navigate = useNavigate()


    return <>
        <Box sx={{ height: '100vh' }}
            className="d-flex justify-content-center align-items-center "
        >
            <Box>

                <Typography
                    variant="h3"
                >
                    Signup
                </Typography>

                <Box
                    className='p-2'
                >

                    <TextField
                        variant="outlined"
                        label='UserName'
                        type={'text'}
                        color="warning"
                        onChange={(e) => setUsersignup(
                            { ...usersignup, username: e.target.value }
                        )}
                    />

                </Box>

                <Box className='p-2'>

                    <TextField
                        variant="outlined"
                        label='E-mail'
                        type={'email'}
                        color="warning"
                        onChange={(e) => setUsersignup({
                            ...usersignup, email: e.target.value
                        })}
                    />

                </Box>

                <Box className='p-2'>

                    <TextField
                        variant="outlined"
                        label='Password'
                        type={'password'}
                        color="warning"
                        onChange={(e) => setUsersignup({
                            ...usersignup, password: e.target.value
                        })}
                    />

                </Box>

                <Box className='text-center'>

                    <Button variant="contained"
                        className="m-3 "
                        color="warning"
                        
                    >
                        Register 
                    </Button>

                </Box>

                <Box className='text-center p-2'>

                    <Button className="p-2 m-2 "
                        variant="outlined"
                        color="warning"
                        onClick={() => {
                            navigate('/login/*')
                        }}
                    >
                        Login
                    </Button>

                </Box>
            </Box>
        </Box>
    </>

}


export default Register;
