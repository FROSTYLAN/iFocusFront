import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Por favor, complete todos los campos');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => 
      u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      toast.success('¡Bienvenido de nuevo!');
      navigate('/home');
    } else {
      toast.error('Credenciales incorrectas');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#101010',
        color: 'white',
        padding: 2
      }}
    >
      <Container maxWidth="xs">
        <Typography className='league-gothic' variant="h2" component="h1" sx={{ textAlign: 'center', mb: 4, fontSize: '60px' }}>
          IFocus
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>Email</Typography>
            <TextField
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                }
              }}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ mb: 1 }}>Password</Typography>
            <TextField
              fullWidth
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                }
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              padding: '12px',
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            Sign in
          </Button>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Link
              href="#"
              onClick={() => navigate('/register')}
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Don't have an account? Sign up
            </Link>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography sx={{ color: 'white' }}>or</Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              padding: '12px',
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            Continue with Google
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;