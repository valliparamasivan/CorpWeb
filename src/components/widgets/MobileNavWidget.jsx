'use client'
import { IconButton, Drawer, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavLinkWidget from './NavLinkWidget';
import LinkWidget from './LinkWidget';
import ImageWidget from './ImageWidget';
import Logo from "../../../public/images/logo.png"

const drawerWidth = 240;

const MobileNavWidget = ({ open, handleDrawerClose }) => {

  const drawerLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Engineering', path: '/engineering' },
    {text: 'Training',path:'/training'},
    // { text: 'Development', path: '/development' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms & Condition', path: '/terms-and-condition' },
    { text: 'Contact us', path: '/contact-us' }
    
  ];

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
        >
           <LinkWidget href="/"><ImageWidget src={Logo} alt="logo" layout="intrinsic" width={90} height={90}/></LinkWidget>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{  p: 2 }}>
          {drawerLinks.map((link) => (
            <ListItem key={link.text} onClick={handleDrawerClose} className="mobile-link">
              <NavLinkWidget href={link.path}>
                  {link.text}
              </NavLinkWidget>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileNavWidget;
