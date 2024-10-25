'use client'
import { Fragment, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LinkWidget from "@/components/widgets/LinkWidget";
import NavLinkWidget from "@/components/widgets/NavLinkWidget";
import ImageWidget from "@/components/widgets/ImageWidget";
import MobileNavbarWidget from "@/components/widgets/MobileNavWidget";
import Logo from "../../public/images/logo.png"
import './style.css';

const WebHeader = () => {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
         <Fragment>
            <header className="header-section">
             <div className="mini-header txt-center"><p>Crafting Digital Experiences with Precision and Innovation</p></div>
               <Grid container className="container">
                 <Grid item md={2} lg={2} xs={6}>
                   <div className="txt-left img-size">
                    <LinkWidget href="/"><ImageWidget src={Logo} alt="logo" layout="intrinsic" width={90} height={90}/></LinkWidget>
                   </div>
                 </Grid>
                 <Grid item md={10} lg={10} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <nav>
                   <ul className="txt-center">
                     <li><NavLinkWidget href="/">Home</NavLinkWidget></li>
                     <li><NavLinkWidget href="/about">About</NavLinkWidget></li>
                     <li><NavLinkWidget href="/engineering">Engineering</NavLinkWidget></li>
                     {/* <li><NavLinkWidget href="/development">Development</NavLinkWidget></li> */}
                     <li><NavLinkWidget href="/training">Training</NavLinkWidget></li>
                    <li><NavLinkWidget href="/contact-us">Contact us</NavLinkWidget></li>
                    </ul>
                    </nav>
                 </Grid>
                 <Grid item md={10} lg={10} xs={6} sx={{ display: { xs: 'block', md: 'none' } }}>
                     <nav>
                       <ul className="txt-center">
                         <li>
                            <IconButton
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              onClick={handleDrawerOpen}
                            >
                           <MenuIcon />
                         </IconButton>
                         </li>
                       </ul>
                     </nav>
                 </Grid>
               </Grid>   
            </header>
            <MobileNavbarWidget open={open}  handleDrawerClose={handleDrawerClose} />
         </Fragment>
  )
};

export default WebHeader;
