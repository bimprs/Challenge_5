import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="white"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</Box>
              <Box>
                binarcarrental@gmail.com 
              </Box>
              <Box>
                081-233-334-808
               </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={0}>Our Services</Box>
              <Box>
                  Why Us
              </Box>
              <Box>
                  Testimonial
              </Box>
              <Box>
                  FAQ
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>Connect With Us</Box>
              <div><img src="/icon_facebook.png" alt="facebook logo" /> <img src="/icon_instagram.png" alt="instagram logo" /> <img src="/icon_twitter.png" alt="logo twitter" /> <img src="/icon_mail.png" alt="logo mail" /> <img src="/icon_twitch.png" alt="logo twitch" /> </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>Copyright Binar 2022</Box>
              <div><img src="/logo.png" alt="logo biru" /></div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}