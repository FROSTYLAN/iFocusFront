import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Categories from './Categories.tsx';
import Today from './Today.tsx';
import Habits from './Habits.tsx';

const Home = () => {
  return (
    <Box sx={{ 
      bgcolor: '#000000', 
      minHeight: '100vh',
      color: 'white'
    }}>
      <Navbar />
      <Box sx={{ paddingTop: '48px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="today" replace />} />
          <Route path="today" element={<Today />} />
          <Route path="habits" element={<Habits />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Home;