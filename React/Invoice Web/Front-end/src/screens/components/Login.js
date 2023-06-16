import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/users/login', {
                params:{
                    email,
                    password
                }
             })
            console.log(response.data)
            navigate('/home')
        }
        catch (e) {
            console.log(e)
        }
    }

    return <>
        <Box sx={{ height: '100vh' }}
            className="d-flex justify-content-center align-items-center "
        >
            <Box >
                <Typography variant="h3">
                    Login
                </Typography>

                <Box className='p-2 '>
                    <TextField
                        variant="outlined"
                        label='Enter E-mail'
                        type={"email"}
                        color="primary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>

                <Box className='p-2'>
                    <TextField
                        variant="outlined"
                        label='Enter Password'
                        type={"password"}
                        value={password}
                        color="primary"
                        onChange={(e) => setPassword(e.target.value)
                        } />
                </Box>

                <Box className='p-2 text-center'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={loginUser}
                    >
                        Login
                    </Button>
                </Box>


            </Box>
        </Box>
    </>
};

export default LoginPage;
