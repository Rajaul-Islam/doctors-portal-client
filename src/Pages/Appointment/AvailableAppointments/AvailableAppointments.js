import { Alert, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price: 20
    },
    {
        id: 2,
        name: 'Cosmetic Orthodonics',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price: 15
    },
    {
        id: 3,
        name: 'Teeth Cleaning ',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price: 30
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price:19
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price:21
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: ' 08.00 AM - 09.00 AM',
        space: 10,
        price:22
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess]=useState(false)
    return (
        <div>
            <Typography variant='h4' sx={{ color: 'info.main', my:4 }}>Available appointment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booking successfully</Alert>}
            <Container>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking date={date} key={booking.id} setBookingSuccess={setBookingSuccess} booking={booking}></Booking>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointments;