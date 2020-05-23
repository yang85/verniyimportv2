import React from 'react';
import {
    Container, 
    Grid,
    TextField,
    Typography,
    Button
    } from '@material-ui/core';

const Home = () => {
    return(
        <Container>
            <Grid  
                container
                direction="row"         
                justify="space-evenly"
                alignItems="center"
                >
                
                <Typography variant = "h1">
                Verniy Imports 
                </Typography>
                <Grid container
                
                direction="row"
                justify="center"
                alignItems="center">
                    <TextField placeholder="Enter a KeyWord" />
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid>
            </Grid>
        </Container>
        )
    }
    
    export default Home;