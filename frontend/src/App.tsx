import { Typography } from '@mui/material';
import React from 'react';
import { Binaryer } from './components/Binaryer';
import { Colorful } from './components/Colourful';
import { NumbersGetter } from './components/NumbersGetter';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* <Colorful speed={6}> */}
      <Typography variant="h1" sx={{ fontWeight: 600, mixBlendMode: 'difference', fontSize: 30 }}>
        <NumbersGetter />
        <Binaryer />
      </Typography>
      {/* </Colorful> */}
    </div>
  );
}

export default App;
