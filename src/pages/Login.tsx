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

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        bgcolor: '#101010',
        color: 'white',
        padding: 3
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mb: 5, mt: 5, textAlign: 'center' }}>
          <Typography className='league-gothic' variant="h2" component="h1" sx={{ fontSize: '120px' }}>
            IFocus
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ mb: 1 }}>Email</Typography>
            <TextField
              fullWidth
              name="email"
              autoComplete="email"
              autoFocus
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
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

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ mb: 1 }}>Password</Typography>
            <TextField
              fullWidth
              name="password"
              type="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
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

          <Link
            href="#"
            sx={{
              color: 'white',
              display: 'block',
              textAlign: 'left',
              mb: 2,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Forgot your password?
          </Link>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              padding: '12px 24px',
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
                padding: '12px 24px',
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