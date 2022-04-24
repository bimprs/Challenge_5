import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import ButtonRegister from './ButtonRegister'

const pages = ['Our Services', 'Why Us', 'Testimonial'];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:'#F1F3FF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/logo.png" alt="logo" style={{paddingLeft: '138px' }}/>
          

          <Box sx={{minHeight:'36%', flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Button
                key={page}

                sx={{ my: 2, color: 'black', display: 'block',}}
              >
                {page}
              </Button>
            ))}
            <ButtonRegister />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;