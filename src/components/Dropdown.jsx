import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
} from '@mui/material'; 
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

  const styles = {
    contentUtama: {
      width: '70%',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      marginTop: '-7vh',
      borderRadius: '20px',
      padding: 5,
    },
  };
  
  function Dropdown() {

      const [value, setValue] = React.useState(new Date());

      return (
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={styles.contentUtama}>
            <Grid
              container
              spacing={2}
              alignItems="flex-end"
              justifyContent="center"
            >
              <Grid item xs>
                <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Tipe Driver</Typography>
                <Select
                size="medium"
                style={{minWidth: '195px'}}
                defaultValue= "0"
                >
                <MenuItem value={0}>Pilih Tipe Driver</MenuItem>
                <MenuItem value={2}>Dengan Driver</MenuItem>
                <MenuItem value={3}>Tanpa Driver</MenuItem>
                </Select>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Tanggal Jemput</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      size="medium"
                      views={['year', 'month', 'day']}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} helperText={null} />}
                    />
                </LocalizationProvider>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Waktu Jemput/Ambil</Typography>
                <Select

                size="medium"

                style={{minWidth: '195px'}}
                defaultValue= "0"
                
                >
                <MenuItem value={0}>Pilih Waktu</MenuItem>
                <MenuItem value={2}>08.00</MenuItem>
                <MenuItem value={3}>09.00</MenuItem>
                <MenuItem value={4}>10.00</MenuItem>
                <MenuItem value={5}>11.00</MenuItem>
                <MenuItem value={6}>12.00</MenuItem>
                </Select>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>
                  Jumlah Penumpang(optional)
                </Typography>
                <TextField type='number'
                  size="medium"
                  defaultValue='1'
                  aria-describedby="my-helper-text"
                />
              </Grid>
              <Grid item xs>
              <a href='/ListCar'><Button variant="contained" sx={{backgroundColor: '#5CB85F'}}>Cari Mobil</Button></a>
              </Grid>
            </Grid>
          </Box>
        </Container>
      );
    }
    
export default Dropdown;