import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

export default function Search() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '35ch' }}>
        <OutlinedInput placeholder="Search..." />
      </FormControl>
    </Box>
  );
}
