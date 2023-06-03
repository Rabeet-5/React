import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SMModal from "../../../../components/SMModal";
import { PostDtInFB, GedDtFromFB } from "../../../../Firebase/Config/FirebaseMethods";
import SMGrid from "../../../../components/SMGrid";



function Feeds() {

    const [model, setModel] = useState({});
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState([])

    const sendFeedsDTinFB = () => {

        setLoader(true)
        PostDtInFB("Feeds", model)
            .then((res) => {
                console.log(res, 'Feedback Sended Successfully in DataBase')
            })
            .catch((err) => {
                console.log(err, 'Not Sended! Some Error')
                setLoader(false)
            })

    }

    const getFeedsDTFromFB = () => {

        GedDtFromFB('Feeds')
            .then((res) => {
                setData([...res, 'data got Successfully'])
            })
            .catch((err) => {
                setData([...err, 'Data Did not Came From Database'])
            })

    }


    useEffect(() => {
        getFeedsDTFromFB()
    }, [])

    const col = [
        {
            id: "userName",
            displayName: "Name",

        },
        {
            id: "email",
            displayName: "Email",

        },
        {
            id: "message",
            displayName: "Message",

        },]

    return <>
        <h1>this is feedback screen</h1>
        <SMModal title='Add Your Feedback Here'
            innercontent={
                <Box>
                    <Grid container >

                        <Grid item md={6} className="mt-4 w-100" >
                            <TextField label='Enter Name'
                                variant="standard"
                                value={model.userName}
                                onChange={(e) => setModel({ ...model, userName: e.target.value })}
                            />

                        </Grid>

                        <Grid item md={6} className='mt-4'>
                            <TextField
                                label='Enter E-mail'
                                variant="standard"
                                onChange={(e) => setModel({ ...model, email: e.target.value })}
                                value={model.email}
                            />

                        </Grid>

                        <Grid item md={4} className='mt-4'>

                            <TextField
                                label='Enter Message'
                                variant="standard"
                                onChange={(e) => setModel({ ...model, message: e.target.value })}
                                value={model.message}
                            />

                        </Grid>
                    </Grid>

                    <Box className='mt-4 d-flex justify-content-center align-items-center'>

                        <Button
                            onClick={() => sendFeedsDTinFB()}
                            variant='contained'
                            color="warning"
                        >
                            Submit
                        </Button>

                    </Box>

                </Box>
            }

        />

        <Grid item md={12} className="p-3">

            <SMGrid datasource={data} cols={col} />
        
        </Grid>


    </>
}

export default Feeds;