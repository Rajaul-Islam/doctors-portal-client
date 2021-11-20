import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo quisquam eligendi quas quibusdam odio quos, natus dolorum eos corrupti?',
        img: fluoride
    },
    {
        name: 'Cavite Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo quisquam eligendi quas quibusdam odio quos, natus dolorum eos corrupti?',
        img: cavity
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo quisquam eligendi quas quibusdam odio quos, natus dolorum eos corrupti?',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
             <Typography sx={{ fontWeight: 500, color: "success.main", m:2 }} variant="h6" component="div">
                        Our Services 
                    </Typography>
             <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                        Services We Provide 
                    </Typography>
            <Grid container spacing={{ xs: 2, m: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                  services.map(service=> <Service key={service.name} service={service}></Service> ) 
               }
            </Grid>
        </Box>
    );
};

export default Services;