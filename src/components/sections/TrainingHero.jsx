'use client'
import React from 'react';
import ImageWidget from "../widgets/ImageWidget";
import About from "../../../public/images/5.jpg";
import { Grid, Typography, Button, Box} from '@mui/material';



const TrainingHero = ({ onContactClick }) => {
    return (
        <div className="template-container">
            <div className='container'>
            <div className='content'>

                <Grid container spacing={4}>

                    <Grid item xs={12} md={7}>
                        <h1>Industrial Training Program</h1>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            At CorpField, we offer comprehensive industrial training programs designed to equip
                            professionals and students with the skills and expertise required in today’s competitive
                            industries. Our training programs are specifically tailored for Structural Steel Detailing
                            on SDS2, Full Stack Software Development, and ServiceNow, catering to both
                            beginners and experienced professionals seeking to enhance their knowledge and
                            skills
                        </Typography>


                        <Button className="btn"  onClick={onContactClick}>
                            Entroll Now
                        </Button>



                    </Grid>


                    <Grid item xs={12} md={5} >

                        <div className='hero-img'>
                            <ImageWidget src={About} width={600} height={600} alt="_" />
                        </div>
                    </Grid>
                </Grid>
                </div>
            </div>

        </div>

    )
}

export default TrainingHero