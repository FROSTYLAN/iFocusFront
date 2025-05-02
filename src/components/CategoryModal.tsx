import React, { useState } from 'react';
import {
  Drawer,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import { Edit } from '@mui/icons-material';

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  initialData?: {
    name: string;
    icon: string;
    color: string;
  };
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  open,
  onClose,
  isEdit = false,
  initialData
}) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    selectedIcon: initialData?.icon || '',
    selectedColor: initialData?.color || ''
  });

  const icons = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7'];
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6'];

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: '#1E1E1E',
          color: 'white',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          maxHeight: '80vh'
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {isEdit ? 'Editar categoría' : 'Nombre de la categoría'}
          </Typography>
          <TextField
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                },
                '& input': {
                  color: 'white',
                }
              }
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 2 }}>Icono de la categoría</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {icons.map((icon, index) => (
              <IconButton
                key={index}
                sx={{
                  bgcolor: formData.selectedIcon === icon ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px'
                }}
                onClick={() => setFormData({ ...formData, selectedIcon: icon })}
              >
                <Edit sx={{ color: 'white' }} />
              </IconButton>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 2 }}>Color de la categoría</Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <Button
                key={color}
                sx={{
                  minWidth: '40px',
                  height: '40px',
                  bgcolor: color,
                  borderRadius: '50%',
                  border: formData.selectedColor === color ? '2px solid white' : 'none',
                  '&:hover': {
                    bgcolor: color,
                  }
                }}
                onClick={() => setFormData({ ...formData, selectedColor: color })}
              />
            ))}
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            }
          }}
          onClick={onClose}
        >
          Crear categoría
        </Button>
      </Box>
    </Drawer>
  );
};

export default CategoryModal;