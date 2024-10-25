'use client'
import React from 'react';
import ImageWidget from "../widgets/ImageWidget";
import About from "../../../public/images/2.jpg";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
import LightbulbCircleRoundedIcon from '@mui/icons-material/LightbulbCircleRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';


const EngineeringHero = () => {
    return (

        <Box className="template-container">
            <div className='container'>
            <div className='content'>

            

                <Grid container spacing={4}>

                    <Grid item xs={12} md={7}>
                        <h1>Designing Solutions</h1>
                        <h1>For a Better World</h1>
                        <p>Unlocking the Power of Innovation: Transforming Ideas into Extraordinary Solutions.</p>
                        <Button className="btn">
                            Our Solution
                        </Button>

                        <Grid container spacing={6} className="bottom-section">
                            <Grid item xs={12} md={10}>
                                <Card className="info-card">
                                    <CardContent>
                                        <Typography variant="h5" className="card-heading">
                                            Engineering is the backbone of innovation and a future full of opportunities..
                                        </Typography>
                                        <Typography className="card-text">
                                            <p> It empowers us to tackle challenges, discover untapped opportunities, and envision a future filled with possibilities.</p>
                                        </Typography>
                                    
                                        <Grid item xs={12} md={12} container spacing={{ xs: 0, md: 12 }}>
                                            <Grid item>
                                                <p className="icon-text">
                                                    <LightbulbCircleRoundedIcon />
                                                    Innovation
                                                </p>
                                            </Grid>
                                            <Grid item>
                                                <p className="icon-text">
                                                    <PrecisionManufacturingRoundedIcon />
                                                    Precision
                                                </p>
                                            </Grid>
                                            <Grid item>
                                                <p className="icon-text">
                                                    <TrendingUpRoundedIcon />
                                                    Progress
                                                </p>
                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>


                    <Grid item lg={5} xs={12} md={5} >
                           <div className="about-image">
                            <ImageWidget src={About} width={450} height={300} alt="_" />
                        </div>
                    </Grid>
                </Grid>
                </div>

            </div>

        </Box>

    )
}

export default EngineeringHero