import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Engineering } from '@mui/icons-material';

const Habits = () => {
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
        <Engineering sx={{ fontSize: 100, color: 'rgba(255, 255, 255, 0.3)' }} />
        <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          En construcción
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
          Estamos trabajando en esta funcionalidad
        </Typography>
      </Box>
    </Container>
  );
};

export default Habits;