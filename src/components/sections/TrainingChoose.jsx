import React from 'react';
import { Grid, Typography } from "@mui/material";
import About from "../../../public/images/3.jpg";
import ImageWidget from "../widgets/ImageWidget";
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';



const TrainingChoose = () => {
  return (
    <section className="why-choose-section ">
      <div className='container'>
        <div className="heading-with-icon">

          <h1 className='title'>Why Choose CorpField for Training?</h1>
        </div>
        <Grid container columnSpacing={8} direction="row" justifyContent="flex-start" alignItems="center">
          <Grid item lg={5} md={12} xs={12}>
            <div className="about-image">
              <ImageWidget src={About} width={450} height={400} alt="About Us" />
            </div>
          </Grid>
          <Grid item lg={7} md={12} xs={12}>
            <Grid container spacing={3}>
              {[
                { text: 'Expert Trainers: Learn from industry experts..', icon: <PeopleIcon /> },
                { text: 'Real-World Projects: Gain practical experience with actual industry projects.', icon: <WorkOutlineIcon/> },
                { text: 'Flexible Learning: Choose between online and in-person sessions.', icon: <SchoolIcon/>},
                { text: 'Certification: Get certified and be job-ready.', icon: <VerifiedIcon/> },
                { text: 'Career Support: Receive guidance and job placement assistance.".', icon: <BusinessCenterIcon/>},
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <div className="why-choose-item">

                    <div className="icon">{item.icon}</div>
                    <div>
                      <h2>{item.text.split(':')[0]}</h2>
                      <Typography variant="" className="reason-text">{item.text.split(':')[1]}</Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default TrainingChoose;

"Expert Trainers: Learn from industry experts.",
"Real-World Projects: Gain practical experience with actual industry projects.",
"Flexible Learning: Choose between online and in-person sessions.",
"Certification: Get certified and be job-ready.",
"Career Support: Receive guidance and job placement assistance."
