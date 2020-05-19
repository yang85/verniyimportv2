import React from 'react';
import {
    Container, 
    Grid,
    TextField,
    Typography,
    Button
    } from '@material-ui/core';

const Component = () => {
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
        </Grid>
        <Grid  
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            >
                
            <Grid container	>
                This is section 1
            </Grid>
            <Grid container	>
                This is section 2
            </Grid>

        </Grid>
    </Container>
    )
}

export default Component;