import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,.8)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}
const AppoinmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-120px' }}
                        src={doctor} alt="" />

                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex',  justifyContent: 'flex-start',textAlign:'left',alignItems:'center' }} >
                    <Box>
                        <Typography sx={{mb:5}} variant='h6' style={{ color: '#5CE7ED' }}>

                            appointment
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white' }}>
                            Make an Appointment today
                        </Typography>
                        <Typography sx={{my:5}}   variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta tempore est rerum ipsa. Reprehenderit iure repellat rem nostrum aut.
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }}variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;