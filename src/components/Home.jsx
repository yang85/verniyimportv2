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
                    Enter a KeyWord
                    <TextField />
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid>
            </Grid>
            <Grid  
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid container>
                    This is section 1
                </Grid>
                <Grid container>
                    This is section 2
                </Grid>
    
            </Grid>
        </Container>
        )
    }
    
    export default Home;