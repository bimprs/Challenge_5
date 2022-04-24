import { Box} from '@mui/system';
// import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useSelector } from 'react-redux';


function Detail(){

  const { data: dataDetail } = useSelector((state) => state.carDetail);


  return (
    <div style={{ minHeight: '100vh' }}>
    <Navbar />
    <Box sx={{ minHeight: 150, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}></Box>
    <Dropdown />
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{marginY:"3%" }}>
          <CardContent>
          <h3 sx={{fontWeight: "bold"}}>Tentang Paket</h3>
          <p>Include</p>
        <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>sudah termasuk pajak</li>
        </ul>
        <p>Exclude</p>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>



      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Refund, Reschedule, Overtime</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

          </CardContent>
          <CardActions sx={{justifyContent:'flex-end'}}>
        <Button sx={{backgroundColor:"#5CB85F"}} variant="contained"  >Lanjutkan Pembayaran</Button>
      </CardActions>
            </Card>
            <Card sx={{maxWidth:"350", marginY:"3%" }}>
                <CardMedia
                        component="img"
                        height="200"
                        image={dataDetail.image}
                        alt="img-car" 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {dataDetail.name}
                    </Typography>
                    <p><img src="/fi_users.png" alt="" style={{marginRight:'2%'}}/>4 orang
                    <img src="/fi_settings.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Manual
                    <img src="/fi_calendar.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Tahun 2020</p>
                    <p>Total <span style={{marginLeft:'50%'}}><strong>Rp.{dataDetail.price}</strong></span></p>
                </CardContent>
                <CardActions>
                <Button sx={{backgroundColor:"#5CB85F"}} variant="contained" fullWidth>Lanjutkan Pembayaran</Button>
            </CardActions>
            </Card>
    </Container>
    <Footer />
  </div>
);
}

export default Detail;