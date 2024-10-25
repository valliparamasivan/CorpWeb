import React from 'react';
import FactoryIcon from '@mui/icons-material/Factory';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const IndustrieService = () => {
    return (
        <section className="industries-section">
            <div className='container'>
                <div className="heading-with-icon">
                    <h1>Industries We Serve</h1>
                </div>
                <Grid container className="software-content" spacing={5}>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card elevation={3} className="industry-card">
                            <CardContent>
                                <Box className="card-box">
                                    <LocationCityIcon fontSize="large" className="icon" />
                                    <Typography variant="" gutterBottom align="center" className="card-heading">
                                        <h2> Commercial Construction</h2>
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Detailing for multi-story buildings, shopping complexes, and office spaces.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card elevation={3} className="industry-card">
                            <CardContent>
                                <Box className="card-box">
                                    <FactoryIcon fontSize="large" className="icon" />
                                    <Typography variant="h5" gutterBottom align="center" className="card-heading">
                                        <h2>Industrial Structures</h2>
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Detailed designs for factories, warehouses, power plants, and more.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card elevation={3} className="industry-card">
                            <CardContent>
                                <Box className="card-box">
                                    <EngineeringIcon fontSize="large" className="icon" />
                                    <Typography variant="h5" gutterBottom align="center" className="card-heading">
                                        <h2> Infrastructure Projects</h2>
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Bridges, tunnels, and large-scale public infrastructure.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card elevation={3} className="industry-card">
                            <CardContent>
                                <Box className="card-box">
                                    <PrecisionManufacturingIcon fontSize="large" className="icon" />
                                    <Typography variant="h5" gutterBottom align="center" className="card-heading">
                                        <h2>Specialized Structures</h2>
                                    </Typography>
                                    <Typography variant="body2" align="center">
                                        Unique and complex structures requiring custom detailing and design.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default IndustrieService;





