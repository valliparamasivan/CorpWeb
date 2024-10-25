'use client'
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';


const EngineeringService = () => {

    const services = [
        {
            number: 1,
            title: '3D Modeling',
            description: 'Creation of highly detailed 3D models of all structural components.'
        },
        {
            number: 2,
            title: 'Connection Design',
            description: 'Comprehensive design and detailing of bolted and welded connections.'
        },
        {
            number: 3,
            title: 'Shop Drawings',
            description: 'Fabrication-ready drawings that include every minute detail to facilitate accurate construction.'
        },
        {
            number: 4,
            title: 'Erection Drawings',
            description: 'Layouts that ensure smooth and efficient assembly on-site, minimizing potential delays.'
        },
        {
            number: 5,
            title: 'Anchor Bolt Plans',
            description: 'Precise drawings that guide the placement of anchor bolts and base plates for foundations.'
        },
        {
            number: 6,
            title: 'Bill of Materials (BOM)',
            description: 'Complete and accurate lists of materials required for fabrication and assembly.'
        },
    ];


    return (
        <Box className="eng-services-section">
            <div className='container'>
                <div className="heading-with-icon">
                    <h1 className="title">Our Detailing Services Include</h1>
                </div>
                <Grid container spacing={4} justifyContent="center">
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={4} key={service.number}>
                            <Box className="service-box">

                                <Box className="service-number-circle">
                                    {service.number}
                                </Box>
                                <div className='eng-service-title'>
                                    <h2> {service.title}</h2>
                                </div>

                                <Typography variant="" className="service-description">
                                    <p>{service.description}</p>
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
};


export default EngineeringService;
