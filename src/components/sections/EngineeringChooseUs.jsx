import React from 'react';
import { Grid, Typography } from "@mui/material";
import About from "../../../public/images/3.jpg";
import ImageWidget from "../widgets/ImageWidget";
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';

const EngineeringChooseUs = () => {
  return (
    <section className="why-choose-section ">
      <div className='container'>
        <div className="heading-with-icon">

          <h1>Why Choose Us?</h1>
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
                { text: 'Expert Team: Our team comprises detailers with years of experience in structural steel, ensuring the highest accuracy and quality.', icon: <PeopleIcon /> },
                { text: 'Advanced Software: We use SDS2 to ensure our 3D models and drawings meet industry standards while improving efficiency and precision.', icon: <SettingsIcon /> },
                { text: 'Standards and Compliance: We adhere strictly to international standards such as AISC, NISD, and OSHA regulations, ensuring both compliance and safety.', icon: <BusinessIcon /> },
                { text: 'On-Time Delivery: We pride ourselves on our efficiency and commitment to deadlines, ensuring your project stays on track.', icon: <BuildIcon /> },
                { text: 'Collaboration: Working closely with engineers, architects, and fabricators, we ensure our work is aligned with the project’s overall goals and schedules.', icon: <EngineeringIcon /> },
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

export default EngineeringChooseUs;
