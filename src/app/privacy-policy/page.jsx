'use client'
import UnderConstruction from "@/components/widgets/UnderConstruction";
import { Container, Typography, Box, Grid } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="title txt-center">
          <Typography variant="h4" component="h1" gutterBottom>
            <h1>Privacy Policy</h1>
          </Typography>
        </div>

        <div className="content">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph>
                This Privacy Policy outlines how Corpfield Technology Solutions ("we", "our", or "us") collects, uses,
                maintains, and discloses information collected from users ("you" or "your") of our website www.corpfield.com.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>Information We Collect</h2>
              </Typography>



              <Typography variant="subtitle1" gutterBottom>
                <h3>  Personal Identification Information</h3>
              </Typography>
              <Typography variant="body1" paragraph>
                We may collect personal identification information from you in a variety of ways, including but not limited
                to when you visit our site, fill out a form, and in connection with other activities, services, features, or
                resources we make available on our website. You may be asked for, as appropriate, name, email address, phone
                number, and company name.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <h3> Non-personal Identification Information</h3>
              </Typography>
              <Typography variant="body1" paragraph>
                We may collect non-personal identification information about you whenever you interact with our website.
                Non-personal identification information may include the browser name, the type of computer, and technical
                information about your means of connection to our website, such as the operating system and the Internet
                service providers utilized.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>   How We Use Collected Information</h2>
              </Typography>
              <Typography variant="body1" paragraph>
                We may collect and use your personal information for the following purposes:
              </Typography>
              <ul>

                <Typography variant="body1">
                  To improve customer service: Information you provide helps us respond to your customer service requests
                  and support needs more efficiently.
                </Typography>


                <Typography variant="body1">
                  To personalize user experience: We may use information in the aggregate to understand how our users as a
                  group use the services and resources provided on our website.
                </Typography>


                <Typography variant="body1">
                  To send periodic emails: We may use the email address to respond to inquiries, questions, and/or other
                  requests.
                </Typography>

              </ul>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>  How We Protect Your Information</h2>
              </Typography>

              <Typography variant="body1" paragraph>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect
                against unauthorized access, alteration, disclosure, or destruction of your personal information, username,
                password, transaction information, and data stored on our website.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>Sharing Your Personal Information</h2>
              </Typography>
              <Typography variant="body1" paragraph>
                We do not sell, trade, or rent your personal identification information to others. We may share generic
                aggregated demographic information not linked to any personal identification information regarding visitors
                and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>   Changes to this Privacy Policy</h2>
              </Typography>
              <Typography variant="body1" paragraph>
                Corpfield Technology Solutions has the discretion to update this privacy policy at any time. When we do, we
                will revise the updated date at the bottom of this page. We encourage you to frequently check this page for
                any changes to stay informed about how we are helping to protect the personal information we collect.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>  Your Acceptance of These Terms</h2>
              </Typography>
              <Typography variant="body1" paragraph>
                By using this website, you signify your acceptance of this policy. If you do not agree to this policy, please
                do not use our website. Your continued use of the website following the posting of changes to this policy
                will be deemed your acceptance of those changes.
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                <h2>Contacting Us</h2>
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
                site, please contact us.
              </Typography>

            </Grid>
          </Grid>
        </div>

      </div>
    </section>
  )
};

export default PrivacyPolicy;
