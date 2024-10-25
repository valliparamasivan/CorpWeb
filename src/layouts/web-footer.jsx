import { Grid } from '@mui/material';
import ImageWidget from '@/components/widgets/ImageWidget';
import Logo from "../../public/images/logo-white.svg"
import './style.css';
import LinkWidget from '@/components/widgets/LinkWidget';

const WebFooter = () => {
  return (
  <footer className="footer-section">
    <div className="container footer-main">
    <Grid container spacing={4}>
      <Grid item lg={12} md={12} xs={12}>
        <ImageWidget src={Logo} width={90} height={90} alt="_" />
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
       <hr></hr>
      </Grid>
      <Grid item lg={2} md={6} xs={12}>
        <h2>Development</h2>
        <ul>
          <li><LinkWidget href="/">Web App Development</LinkWidget></li>
          <li><LinkWidget href="/">Mobile App Development</LinkWidget></li>
          <li><LinkWidget href="/">Custom App Development</LinkWidget></li>
        </ul>
        <br></br>
        <h2>Engineering</h2>
        <ul>
          <li><LinkWidget href="/">Steel Structural</LinkWidget></li>
          <li><LinkWidget href="/">Steel Detailing</LinkWidget></li>
        </ul>
      </Grid>
      <Grid item lg={1} md={6} xs={12}>
        <h2>Links</h2>
        <ul>
          <li><LinkWidget href="/home">Home</LinkWidget></li>
          <li><LinkWidget href="/about">About</LinkWidget></li>
          <li><LinkWidget href="/engineering">Engineering</LinkWidget></li>
          <li><LinkWidget href="/training">Training</LinkWidget></li>
          <li><LinkWidget href="/development">Development</LinkWidget></li>
          <li><LinkWidget href="/contact-us">Contact us</LinkWidget></li>
        </ul>
      </Grid>
      <Grid item lg={2} md={6} xs={12}>
        <h2>Policy</h2>
        <ul>
          <li><LinkWidget href="/privacy-policy">Privacy Policy</LinkWidget></li>
          <li><LinkWidget href="/terms-and-condition">Terms and Conditions</LinkWidget></li>
        </ul>
      </Grid>
      <Grid item lg={2} md={6} xs={12}>
        <h2>USA Office</h2>
        <ul>
          <li>Corpfield LLC</li>
          <li>1942 Broadway St, STE 314C,</li>
          <li>Boulder, CO 80302</li>
        </ul>
      </Grid>
      <Grid item lg={2} md={6} xs={12}>
        <h2>Chennai Office</h2>
        <ul>
          <li>#17,Ashtalakshmi Nager</li>
          <li>24th Street,Alappakkam</li>
          <li>Chennai-600116</li>
        </ul>
      </Grid>
      <Grid item lg={3} md={6} xs={12}>
        <h2>Nagercoil Office</h2>
        <ul>
        <li>Corpfield Technology Solution</li>
          <li>#520A/1,Ground Floor</li>
          <li>Kesava Thirupapuram,</li>
          <li>MS Road Vettunimadam,</li>
          <li>Nagercoil-629003</li>
        </ul>
      </Grid>
    </Grid>
  </div>
  <Grid container className='mini-footer'>
       <Grid item lg={12} md={12} xs={12}>
         <div className="container">
           <div className="footer-content txt-center"><p>Copyright © {new Date().getFullYear()} Corpfield LLC. All rights reserved.</p></div>
         </div>
       </Grid>
    </Grid>
  </footer>);
};
export default WebFooter;
