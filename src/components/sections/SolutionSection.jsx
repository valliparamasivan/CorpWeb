'use client'
import { Grid } from "@mui/material";
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import ImageWidget from "@/components/widgets/ImageWidget";
import Computer from "../../../public/images/2.jpg"

const SolutionSection = () => {
  return (
      <section className="solution-section">
          <div className="container">
            <div className="solution-content">
              <Grid container columnSpacing={6} direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item lg={8} md={12} xs={12}>
                  <h1 className="title">Crafting Digital Solutions That Exceed  Expectations</h1>
                  <p>At CorpField, we&apos;re dedicated to creating impactful digital solutions that drive real business success. Our team of expert developers and designers is committed to crafting products that don&apos;t just meet your needs—they exceed your expectations.</p>
                  <br></br><br></br>
                </Grid>
                <Grid item lg={7} md={12} xs={12}>
                  <Grid container spacing={3}>
                    <Grid item lg={12} md={6} xs={12}>
                    <h2 className="sub-title"><PlaylistAddCheckCircleRoundedIcon/>Structural Steel Detailing</h2>
                    <p>We stand as industry leaders in structural steel detailing, providing end-to-end solutions that ensure seamless project execution. Our team is adept in handling both structural and miscellaneous steel projects, delivering precision shop drawings on time and within budget.</p>
                  </Grid>
                  <Grid item lg={12} md={6} xs={12}>
                    <h2><PlaylistAddCheckCircleRoundedIcon/>Custom Software Development</h2>
                    <p>Our developers specialize in tailoring software solutions to your specific business requirements. From responsive web applications to robust mobile platforms and comprehensive enterprise systems, we transform your concepts into powerful digital products designed for the modern business landscape.</p>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <h2><PlaylistAddCheckCircleRoundedIcon/>Empowering Your Business</h2>
                    <p>CorpField is more than just a service provider; we are your strategic partner committed to enhancing your operational capabilities. Our dedication to excellence motivates us to deliver high-quality solutions that help streamline operations, enhance project outcomes, and propel your business forward.</p>
                  </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={5} md={12} xs={12}>
                  <div className="txt-right img-size">
                    <ImageWidget src={Computer} className="computer" width={500} height={300} alt="_"/>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
      </section>
  );
};
export default SolutionSection;