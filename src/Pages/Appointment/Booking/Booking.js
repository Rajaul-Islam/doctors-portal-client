import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date,setBookingSuccess }) => {
    const { name, time, space,price } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>

                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {price}$
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space}SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained" disableElevation>
                        Disable elevation
                    </Button>
                </Paper>
            </Grid>
            <BookingModal setBookingSuccess={setBookingSuccess} date={date} booking={booking} openBooking={openBooking}
                handleBookingClose={handleBookingClose} >

            </BookingModal>

        </>
    );
};

export default Booking;