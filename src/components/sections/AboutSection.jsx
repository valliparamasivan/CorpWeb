'use client'
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import ImageWidget from "../widgets/ImageWidget";
import About from "../../../public/images/3.jpg";
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ExposureIcon from '@mui/icons-material/Exposure';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';


const AboutSection = () => {
  const router = useRouter();
  return (
        <section className="about-section">
            <div className="container">
               <div className="title txt-center">
                  <h1>About Corpfield LLC Engineering Solutions</h1>
                  <p>We deliver tailored software and engineering solutions to help your business succeed.</p>
               </div>
               <div className="content">
                  <Grid container columnSpacing={8} direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item lg={5} md={12} xs={12}>
                      <div className="about-image">
                        <ImageWidget src={About}  width={450} height={300} alt="_"/>
                      </div>
                    </Grid>
                    <Grid item lg={7} md={12} xs={12}>
                      <Grid container rowSpacing={2} columnSpacing={4}>
                        <Grid item lg={12} md={12} xs={12}>
                          <h2><EngineeringIcon/>Engineering Solutions, Developing Success</h2>
                          <p>At CorpField, we blend the precision of structural steel detailing with the innovation of custom software development to provide integrated solutions that propel businesses into the future. As a dedicated partner, we cater to a wide array of industries, delivering projects that meet rigorous standards and drive technological advancement.</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                          <h2><ConfirmationNumberIcon/>Our Mission</h2>
                          <p>Our mission is to harness the synergy between structural engineering and technology to offer solutions that not only resolve today&apos;s challenges but also unlock tomorrow&apos;s opportunities. By continuously evolving and embracing new technologies, we help our clients achieve enduring success.</p>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                          <h2><ExposureIcon/>Our Expertise</h2>
                           <p>Structural Steel Detailing: With a focus on precision and compliance, our skilled professionals excel in delivering detailed shop drawings for both structural and miscellaneous steel structures. Our expertise ensures seamless execution from concept through construction, optimizing timelines and reducing costs.</p>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Button className="btn" onClick={() => router.push("/about")}>Read more<KeyboardDoubleArrowRightOutlinedIcon/></Button>
                        </Grid>
                      </Grid>
                   </Grid>
                  </Grid>
               </div>
            </div>
        </section>
  )
};

export default AboutSection;
