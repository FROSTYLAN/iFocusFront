import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import {
  AccountCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSection, setSelectedSection] = useState('Hoy');

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: '#1E1E1E',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Toolbar sx={{ minHeight: '48px' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button 
              color="inherit" 
              sx={{
                textTransform: 'none',
                minWidth: 'auto',
                padding: '6px 8px',
                color: selectedSection === 'Hoy' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                borderBottom: selectedSection === 'Hoy' ? '2px solid white' : 'none',
                borderRadius: 0,
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'white'
                }
              }}
              onClick={() => {
                setSelectedSection('Hoy');
                navigate('/home/today');
              }}
            >
              Hoy
            </Button>
            <Button 
              color="inherit" 
              sx={{
                textTransform: 'none',
                minWidth: 'auto',
                padding: '6px 8px',
                color: selectedSection === 'Hábitos' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                borderBottom: selectedSection === 'Hábitos' ? '2px solid white' : 'none',
                borderRadius: 0,
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'white'
                }
              }}
              onClick={() => {
                setSelectedSection('Hábitos');
                navigate('/home/habits');
              }}
            >
              Hábitos
            </Button>
            <Button 
              color="inherit" 
              sx={{
                textTransform: 'none',
                minWidth: 'auto',
                padding: '6px 8px',
                color: selectedSection === 'Categorías' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                borderBottom: selectedSection === 'Categorías' ? '2px solid white' : 'none',
                borderRadius: 0,
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'white'
                }
              }}
              onClick={() => {
                setSelectedSection('Categorías');
                navigate('/home/categories');
              }}
            >
              Categorías
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="small"
            onClick={handleMenu}
            sx={{
              color: 'white',
              padding: '4px',
              '& .MuiSvgIcon-root': {
                fontSize: '32px'
              }
            }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                bgcolor: '#1E1E1E',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '& .MuiMenuItem-root': {
                  fontSize: '14px',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }
            }}
          >
            <MenuItem onClick={handleClose}>Configuración</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;