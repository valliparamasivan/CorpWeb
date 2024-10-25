import React from 'react'
import { Grid, Box } from "@mui/material";
import Engg from "../../../public/images/2.jpg"
import ImageWidget from "../widgets/ImageWidget";
import { CheckCircle } from '@mui/icons-material';


const DetailingSection = () => {
    return (
        <section className="why-choose-section">
            <div className='container'>
                <div className="heading-with-icon">
                    <h1>Our Detailing Process</h1>
                </div>
                <Grid container columnSpacing={8} direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item lg={5} md={12} xs={12}>
                        <div className="about-image">
                            <ImageWidget src={Engg} width={450} height={300} alt="About Us" />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={12} xs={12}>
                        <Grid container spacing={3}>
                            {[
                                { text: 'Requirements Gathering: Understanding the project scope and obtaining architectural and engineering plans.', icon: <CheckCircle /> },
                                { text: '3D Modeling: Creation of precise 3D models to visualize the entire structure and its components.', icon: <CheckCircle /> },
                                { text: 'Connection Design: Detailing bolted and welded connections to ensure the structure\'s integrity and stability', icon: <CheckCircle /> },
                                { text: 'Shop Drawings: Preparation of shop drawings for fabrication that include every detail necessary for production.', icon: <CheckCircle /> },
                                { text: 'Erection Drawings: Providing clear and concise erection drawings to ensure smooth on-site assembly.', icon: <CheckCircle /> },
                                { text: 'Quality Checks: Rigorous quality assurance and verification before delivery to ensure the highest standards are met.', icon: <CheckCircle /> },
                                { text: 'Collaboration and Feedback: Continuous communication with clients to incorporate any changes or adjustments.', icon: <CheckCircle /> }
                            ].map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Box className="why-choose-item">
                                        <div className="icon">{item.icon}</div>
                                        <div>
                                            <h2>{item.text.split(':')[0]}</h2>
                                            <p>{item.text.split(':')[1]}</p>

                                        </div>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default DetailingSection