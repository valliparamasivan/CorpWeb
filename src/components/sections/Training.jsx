
import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button, List, ListItem, ListItemText, Box } from '@mui/material';


const TrainingCard = ({ onContactClick }) => {
    const [showDetails, setShowDetails] = useState({
        steel: false,
        fullStack: false,
        serviceNow: false,
    });

    const handleToggleDetails = (section) => {
        setShowDetails((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <section className="why-choose-section">
            <div className='container'>
                <div className="heading-with-icon">
                    <h1 className='title'>Training We Serve</h1>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Card className="card">
                            <Box className="card-header">
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Structural Steel Detailing (SDS2 Training)</Typography>
                            </Box>
                            <hr />
                            <CardContent className="card-content">
                                <Typography variant="body1">
                                    <p> Our SDS2 Structural Steel Detailing Training program is designed for aspiring detailers who want to develop practical skills in one of the most sought-after areas in the construction industry. With real-world projects, you’ll learn how to use SDS2 software for 3D modeling, shop drawings, connection design, and erection drawings. This course is perfect for engineers, architects, and draftsmen looking to specialize in steel detailing.</p>
                                </Typography>
                                {showDetails.steel && (
                                    <List sx={{ marginTop: 2 }}>
                                        {[
                                            'Hands-on training in SDS2 software',
                                            'Real-world structural detailing projects',
                                            'Emphasis on international standards such us AISC and OSHA',
                                            'One-on-one guidance from experienced professionals',
                                            'Certification upon completion',
                                        ].map((item, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </CardContent>
                            <CardActions className="card-actions">
                                <Button
                                    fullWidth
                                    className="details-button"
                                    onClick={() => handleToggleDetails('steel')}
                                >
                                    {showDetails.steel ? 'Hide Details' : 'Details'}
                                </Button>
                                <Button fullWidth className="enquiry-button" onClick={onContactClick}>
                                    Enquiry
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card className="card">
                            <Box className="card-header">
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Full Stack Software Development Training</Typography>
                            </Box>
                            <hr />
                            <CardContent className="card-content">
                                <Typography variant="body1">
                                    <p>
                                        Our Full Stack Development Training covers the entire software development lifecycle, from front-end to back-end technologies. Whether youre a beginner or a seasoned developer looking to expand your skill set, this course provides practical knowledge in React JS, Java REST API, Flutter, and more. You’ll work on real-time projects to gain experience in designing, coding, and deploying applications for various platforms, including web and mobile.
                                    </p>
                                </Typography>
                                {showDetails.fullStack && (
                                    <List sx={{ marginTop: 2 }}>
                                        {[
                                            'In-depth coverage front-end (React JS) and back-end (Java REST API)',
                                            'Mobile app development using Flutter',
                                            'Full-stack project experience',
                                            'Best coding practices and vision control',
                                            'Certification upon course completion',
                                        ].map((item, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </CardContent>
                            <CardActions className="card-actions">
                                <Button
                                    fullWidth
    
                                    className="details-button"
                                    onClick={() => handleToggleDetails('fullStack')}
                                >
                                    {showDetails.fullStack ? 'Hide Details' : 'Details'}
                                </Button>
                                <Button fullWidth className="enquiry-button" onClick={onContactClick}>
                                    Enquiry
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card className="card">
                            <Box className="card-header">
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>ServiceNow Training</Typography>
                            </Box>
                            <hr />
                            <CardContent className="card-content">
                                <Typography variant="body1">
                                    <p> Our ServiceNow Training program is designed for IT professionals who want to specialize in one of the leading cloud-based platforms for IT service management. The course covers everything from the basics of ServiceNow to advanced configurations, automations, and workflows, ensuring you can manage and implement ServiceNow solutions with confidence.</p>
                                </Typography>
                                {showDetails.serviceNow && (
                                    <List sx={{ marginTop: 2 }}>
                                        {[
                                            'Complete understanding of ServiceNow platform and architecture',
                                            'Practical training in ServiceNow administration and development',
                                            'Real-time project implementations',
                                            'Certification for career advancement',
                                        ].map((item, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </CardContent>
                            <CardActions className="card-actions">
                                <Button
                                    fullWidth
                                   
                                    className="details-button"
                                    onClick={() => handleToggleDetails('serviceNow')}
                                >
                                    {showDetails.serviceNow ? 'Hide Details' : 'Details'}
                                </Button>
                                <Button fullWidth  className="enquiry-button" onClick={onContactClick}>
                                    Enquiry
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default TrainingCard;

