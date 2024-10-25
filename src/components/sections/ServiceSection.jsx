'use client'
import { Fragment } from "react";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import WebIcon from '@mui/icons-material/Web';
import TabIcon from '@mui/icons-material/Tab';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CategoryIcon from '@mui/icons-material/Category';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';


const ServiceSection = () => {
  const router = useRouter();
  return (
      <Fragment>
        <section className="service-section">
          <div className="container">
             <Grid container spacing={5}>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="software">
                        <h1>Structural Steel Detailing</h1>
                        <p className="sub-title">We offer top-notch structural steel detailing that meets industry standards.</p>
                    </div>
                    <Grid container className="software-content" spacing={5}>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><CategoryIcon/>Miscellaneous Steel Detailing</h2>
                            <p>We handle a variety of steel detailing projects, including those that require intricate and diverse specifications, providing reliable  and accurate drawings for every component.</p>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><RocketLaunchIcon/>Estimodeling and Takeoffs</h2>
                            <p>Our estimodeling services combine estimation and modeling to provide adetailed  visualization of projects, enhancing accuracy in material takeoffs and cost estimation.</p>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><LocalShippingIcon/>Deliverables</h2>
                            <p>We handle a variety of steel detailing projects, including those that  require intricate and diverse specifications, providing reliable and accurate drawings for every component.</p>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Button className="btn" onClick={()=> router.push("/engineering")}>Read more<KeyboardDoubleArrowRightOutlinedIcon className="svg" /></Button>
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
          </div>            
        </section>
        
        <section className="service-section">
          <div className="container">
             <Grid container spacing={5}>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="software">
                      <h1>Software Development</h1>
                      <p className="sub-title">We create custom software solutions tailored to our clients needs.</p>
                    </div>
                    <Grid container className="software-content" spacing={5}>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><WebIcon/>Custom Web Applications</h2>
                            <p>We design and develop responsive, user-friendly web applications that drive user engagement and support your business goals. Our scalable and secure solutions evolve.</p>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><MobileFriendlyIcon/>Mobile Applications</h2>
                            <p>Our team creates high-performance mobile applications for iOS and Android platforms, designed to provide seamless user experiences and to drive customer  satisfaction.</p>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12}>
                            <h2><TabIcon/>Web Applications</h2>
                            <p>We develop comprehensive enterprise software solutions that automate workflows, integrate business processes, and provide detailed analytics to support decision-making.</p>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Button className="btn" onClick={()=> router.push("/development")}>Read more<KeyboardDoubleArrowRightOutlinedIcon/></Button>
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
          </div>            
        </section>
      </Fragment>
  )
};
export default ServiceSection;
