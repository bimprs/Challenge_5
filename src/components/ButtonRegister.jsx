import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" sx={{backgroundColor: '#5CB85F', maxHeight: '75%', marginTop: '8px', fontFamily: ['"Helvetica"'], }}>Register</Button>
    </Stack>
  );
}
