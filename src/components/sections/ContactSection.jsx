'use client';

import React, { useState } from 'react';
import { TextField, Button, Grid, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        return '';
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) return 'Invalid email address';
        return '';
      case 'phone':
        if (value && !/^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value)) return 'Invalid phone number format';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value),
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
    setIsRecaptchaVerified(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };

    setFormErrors(errors);

    if (Object.values(errors).every((error) => !error) && recaptchaToken) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, recaptchaToken }),
        });

        const data = await response.json();
        if (data.success) {
          setSnackbarMessage('Your message has been sent!');
          setOpenSnackbar(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setRecaptchaToken('');
          setIsRecaptchaVerified(false);
        } else {
          setSnackbarMessage('Failed to send the message.');
          setOpenSnackbar(true);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSnackbarMessage('An error occurred. Please try again.');
        setOpenSnackbar(true);
      }
    } else {
      if (!recaptchaToken) {
        setSnackbarMessage('Please complete the reCAPTCHA.');
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


 const textFieldStyles = {
  '& .MuiFormHelperText-root': {
    fontSize: '0.775rem',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#60493c',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#60493c',
  },
  '& .MuiInput-underline.Mui-error:after': {
    borderBottomColor: '#60493c',
  },
  '& .MuiInputLabel-root': {
    color: '#84234',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#60493c',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#60493c',
  },
  '& .MuiInputBase-input': {
    color: '#60493c', 
  },
};


  return (
    <section className="contact-section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={10} direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item lg={7} md={12} xs={12}>
              <h1 className='title'>Connect with Our Team</h1>
              <p>
                 Experience excellence with Corpfield, your trusted partner for
                 precision steel detailing and cutting-edge software development
                 solutions. Whether you need meticulous steel detailing for complex 
                 construction projects or custom software to drive your business 
                 forward, we deliver exceptional results tailored to your needs.
              </p>
            </Grid>
            <Grid item lg={5} md={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12}>
                  <h2>Let’s Connect</h2>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="standard"
                    error={Boolean(formErrors.name)}
                    helperText={formErrors.name}
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item lg={12} md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="standard"
                    error={Boolean(formErrors.email)}
                    helperText={formErrors.email}
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item lg={12} md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number (optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="standard"
                    error={Boolean(formErrors.phone)}
                    helperText={formErrors.phone}
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    variant="standard"
                    error={Boolean(formErrors.message)}
                    helperText={formErrors.message}
                    size="small"
                    sx={textFieldStyles}
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <ReCAPTCHA
                    sitekey="6LdFfsAhAAAAAKha_vyYZCg6Q-pVQD7drxUCIyOl"
                    onChange={handleRecaptchaChange}
                    // size="invisible"
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ borderRadius: 2 }}
                    className="btn"
                  >
                    Send Your Message
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={formErrors.message ? 'error' : 'success'} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default ContactSection;
