import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,boxShadow: 0, backgroundColor:'#F1F3FF', }}>
      <Grid container spacing={0}>
        <Grid item md={6} sx={{justifyContent: 'flex-start', paddingLeft: '10%', paddingRight:"5%"}}>
          <h1>
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </Grid>
        <Grid item md={6}>
          <img src="/img_car.png" alt="foto mobil gede"/>
        </Grid>
      </Grid>
    </Box>
  );
}
