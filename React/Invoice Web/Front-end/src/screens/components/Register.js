import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    // const [usersignup, setUsersignup] = useState({})
    const navigate = useNavigate()

    const createNewUser =async (e)=>{
        e.preventDefault();

        try{
            const response = await axios.post('api/users/signup',{name,email,password})
            console.log(response.data)
        }
        catch(e){
            console.log(e)
        }
    }

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
                        value={name}
                        color="primary"
                        onChange={(e) =>setName(e.target.value) }
                    />

                </Box>

                <Box className='p-2'>

                    <TextField
                        variant="outlined"
                        label='E-mail'
                        type={'email'}
                        value={email}
                        color="primary"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </Box>

                <Box className='p-2'>

                    <TextField
                        variant="outlined"
                        label='Password'
                        type={'password'}
                        color="primary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </Box>

                <Box className='text-center'>

                    <Button variant="contained"
                        className="m-3 "
                        color="primary"
                        onClick={createNewUser}
                        
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
