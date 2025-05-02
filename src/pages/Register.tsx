import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  Link,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    dateBirth: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
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
        justifyContent: 'start',
        bgcolor: '#000000',
        color: 'white',
        padding: 2
      }}
    >
      <Box sx={{ ml: 6, width: '100%' }}>
        <Typography className='league-gothic' variant="h2" component="h1" sx={{ fontSize: '60px' }}>
          IFocus
        </Typography>
      </Box>

      <Container maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 6 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ mb: 1 }}>First Name</Typography>
                <TextField
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
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
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ mb: 1 }}>Second Name</Typography>
                <TextField
                  fullWidth
                  name="secondName"
                  value={formData.secondName}
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
            </Box>

            <Box sx={{ display: 'flex', gap: 6 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ mb: 1 }}>Date Birth</Typography>
                <TextField
                  fullWidth
                  type="date"
                  name="dateBirth"
                  value={formData.dateBirth}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
              <Box sx={{ flex: 1 }}>
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
            </Box>

            <Box sx={{ display: 'flex', gap: 6 }}>
              <Box sx={{ flex: 1 }}>
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
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ mb: 1 }}>Repeat Password</Typography>
                <TextField
                  fullWidth
                  name="repeatPassword"
                  type="password"
                  value={formData.repeatPassword}
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
            </Box>
          </Stack>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%', 
            mb: 2,
            mt: 6
          }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: '360px',
                padding: '12px 24px',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                }
              }}
            >
              Sign up
            </Button>

            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Link
                href="#"
                onClick={() => navigate('/login')}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Already have an account? Sign in
              </Link>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography sx={{ color: 'white' }}>or</Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              sx={{
                width: '360px',
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
        </Box>
      </Container>
    </Box>
  );
};

export default Register;