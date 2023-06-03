import { Grid, MenuItem, Select, TextField } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

function RegistrationForm() {

    return <>

        <Grid container item>
            <Grid item md={12} className='p-2 d-flex justify-content-center align-items-center w-100'>
                <Box className='p-2 border' >

                    <TextField
                        className="m-3"
                        label='Your Name'
                        variant='standard'
                        type={'text'}
                    />

                    <br />

                    <TextField
                        className="m-3"
                        label='Father,s Name'
                        variant="standard"
                        type={'text'}
                    />

                    <br />

                    <TextField
                        className="m-3"
                        label='Contact'
                        variant="standard"
                        type={'number'}
                    />

                    <br />

                    <TextField
                        className="m-3"
                        label='CNIC'
                        variant="standard"
                        type={'number'}
                    />

                    <Box className='p-2  m-3'>
                        <label >last Qualification</label> <br />

                        <Select
                            variant="standard"

                        >

                            <MenuItem value='Middle'>Middle</MenuItem>
                            <MenuItem value='Matric'> Matric</MenuItem>
                            <MenuItem value='Intermediate'>Intermediate</MenuItem>
                            <MenuItem value='Bachelors'>Bachelors</MenuItem>
                            <MenuItem value='Masters'>Masters</MenuItem>
                        </Select>
                    </Box>

                    <Box className='p-2  m-3'>
                        <label >Select Course</label> <br />

                        <Select
                            variant="standard"

                        >

                            <MenuItem value='Graphic Designing'>Graphic Designing</MenuItem>
                            <MenuItem value='10'> Web and Application Development</MenuItem>
                            <MenuItem value='Digital Marketing'>Digital Marketing</MenuItem>
                            <MenuItem value='20'>Web 3.0 and MetaVerse</MenuItem>

                        </Select>
                    </Box>

                    <Box className='p-2  m-3'>
                        <label >Institute</label> <br />

                        <Select
                            disabled
                            variant="standard"
                            value={10}
                        >

                            <MenuItem value='10'>Jawan Pakistan</MenuItem>

                        </Select>
                    </Box>

                    <Box className='p-2  m-3'>
                        <label >Section</label> <br />

                        <Select

                            variant="standard"

                        >

                            <MenuItem value='10'>Sec A</MenuItem>
                            <MenuItem value='20'>Sec B</MenuItem>
                            <MenuItem value='30'>Sec C</MenuItem>
                            <MenuItem value='40'>Sec D</MenuItem>

                        </Select>
                    </Box>

                    <Box>

                        <TextField
                            className="m-3"
                            label='Enter E-mail'
                            type={'email'}
                            variant='standard'
                        />

                        <br />

                        <TextField
                            className="m-3"
                            label='Enter Password'
                            type={'password'}
                            variant='standard'
                        />


                    </Box>

                </Box>



            </Grid>

        </Grid>


    </>
}

export default RegistrationForm;