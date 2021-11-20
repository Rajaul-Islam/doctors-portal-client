import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <div>
            <Grid item xs={12} sm={6} md={6}>
                <img
                    style={{ width: '200px' }}
                    src={`data:image/jpeg;base64,${image}
                  `}
                />
                <h3>name is {name}</h3>

            </Grid>
        </div>
    );
};

export default Doctor;