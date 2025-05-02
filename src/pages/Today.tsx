import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Construction } from '@mui/icons-material';

const Today = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 48px)',
          textAlign: 'center',
          gap: 2
        }}
      >
        <Construction sx={{ fontSize: 100, color: 'rgba(255, 255, 255, 0.3)' }} />
        <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          En desarrollo
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          Esta sección estará disponible próximamente
        </Typography>
      </Box>
    </Container>
  );
};

export default Today;