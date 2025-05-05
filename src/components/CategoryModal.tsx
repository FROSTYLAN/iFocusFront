import React, { useState } from 'react';
import {
  Drawer,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import {
  NameIcon,
  CategoryIcon,
  ColorIcon,
  C1icon,
  C2icon,
  C3icon,
  C4icon,
  C5icon,
  C6icon,
  C7icon,
} from '../components/icons/index.tsx';
import { createCategory, updateCategory, deleteCategory } from '../services/categoryService.ts';
import { toast } from 'react-toastify';

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  isEdit?: boolean;
  onDelete?: () => void; 
  initialData?: {
    personalizedCategoryId?: number;
    name: string;
    icon: string;
    description: string;
  };
}

const CategoryModal: React.FC<CategoryModalProps> = ({
  open,
  onClose,
  isEdit = false,
  onDelete,
  initialData
}) => {
  const [formData, setFormData] = useState({
    name: '',
    selectedIcon: '',
    selectedColor: ''
  });

  // Actualizamos el formData cuando cambia initialData o isEdit
  React.useEffect(() => {
    if (isEdit && initialData) {
      setFormData({
        name: initialData.name || '',
        selectedIcon: initialData.icon || '',
        selectedColor: initialData.description || ''
      });
    } else if (!isEdit) {
      // Limpiamos el formulario cuando no es modo edición
      setFormData({
        name: '',
        selectedIcon: '',
        selectedColor: ''
      });
    }
  }, [initialData, isEdit]);

  const colors = [
    '#E74C3C', // rojo
    '#2ECC71', // verde
    '#FF69B4', // rosa
    '#E67E22', // naranja
    '#3498DB', // azul
    '#9B59B6', // morado
    '#95A5A6'  // gris
  ];

  const handleSubmit = async () => {
    try {
      if (!formData.name || !formData.selectedIcon || !formData.selectedColor) {
        toast.error('Por favor, complete todos los campos');
        return;
      }

      const categoryData = {
        name: formData.name,
        icon: formData.selectedIcon,
        description: formData.selectedColor
      };

      if (isEdit && initialData?.personalizedCategoryId) {
        await updateCategory(initialData?.personalizedCategoryId, categoryData);
        toast.success('Categoría actualizada exitosamente');
        onDelete?.();
      } else {
        await createCategory(categoryData);
        toast.success('Categoría creada exitosamente');
        onDelete?.();
      }

      onClose();
    } catch (error) {
      toast.error('Error al procesar la categoría');
      console.error('Error:', error);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);
      toast.success('Categoría eliminada exitosamente');
      onDelete?.();  // Llamamos al callback si existe
    } catch (error) {
      toast.error('Error al eliminar la categoría');
      console.error('Error:', error);
    }
  };

  const icons = [
    <C1icon size={24} />,
    <C2icon size={24} />,
    <C3icon size={24} />,
    <C4icon size={24} />,
    <C5icon size={24} />,
    <C6icon size={24} />,
    <C7icon size={24} />
  ];

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: '#1E1E1E',
          color: 'white',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          maxHeight: '90vh',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }}
    >
      <Box sx={{
        p: 4,
        pl: 10,
        pr: 10,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Box sx={{ }}>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: '100%', maxWidth: '240px', display: 'flex', alignItems: 'center', mb: 2, mr: 4, gap: 1}}>
              <NameIcon size={36} />
              <Typography className='overpass' sx={{ color: 'rgba(255, 255, 255, 1)', fontSize: '18px' }}>
                Nombre de la categoría
              </Typography>
            </Box>

            <Box sx={{ width: '100%', minWidth: '600px', display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    height: '48px',
                    '& fieldset': {
                      border: 'none',
                    },
                    '& input': {
                      color: 'white',
                      fontSize: '16px',
                      '&::placeholder': {
                        color: 'rgba(255, 255, 255, 0.4)',
                        opacity: 1
                      }
                    }
                  }
                }}
              />
            </Box>
          </Box>

          <Box sx={{ 
            height: '1px', 
            bgcolor: 'rgba(255, 255, 255, 0.1)', 
            mb: 4 
          }} />

          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: '100%', maxWidth: '240px', display: 'flex', alignItems: 'center', mb: 2, mr: 4, gap: 1}}>
              <CategoryIcon size={36} />
              <Typography className='overpass' sx={{ color: 'rgba(255, 255, 255, 1)', fontSize: '18px' }}>
                Icono de la categoría
              </Typography>
            </Box>
            <Box sx={{ width: '100%', minWidth: '600px', display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
              {icons.map((icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: formData.selectedIcon === `icon${index}` ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '12px',
                    width: '48px',
                    height: '48px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  onClick={() => setFormData({ ...formData, selectedIcon: `icon${index}` })}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ 
            height: '1px', 
            bgcolor: 'rgba(255, 255, 255, 0.1)', 
            mb: 4 
          }} />

          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: '100%', maxWidth: '240px', display: 'flex', alignItems: 'center', mb: 2, mr: 4, gap: 1}}>
              <ColorIcon size={36} />
              <Typography className='overpass' sx={{ color: 'rgba(255, 255, 255, 1)', fontSize: '18px' }}>
                Color de la categoría
              </Typography>
            </Box>
            <Box sx={{ width: '100%', minWidth: '600px', display: 'flex', justifyContent: 'space-around', gap: 2, flexWrap: 'wrap' }}>
              {colors.map((color) => (
                <Button
                  key={color}
                  sx={{
                    minWidth: '48px',
                    height: '48px',
                    bgcolor: color,
                    borderRadius: '50%',
                    border: formData.selectedColor === color ? '2px solid white' : 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: color,
                      opacity: 0.8,
                      transform: 'scale(1.05)'
                    }
                  }}
                  onClick={() => setFormData({ ...formData, selectedColor: color })}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          mt: 4
        }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              borderRadius: '12px',
              padding: '14px',
              fontSize: '16px',
              width: '180px',
              textTransform: 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
            onClick={handleSubmit}
          >
            {isEdit ? 'Actualizar categoría' : 'Crear categoría'}
          </Button>

          {isEdit && (
            <Button
              variant="contained"
              sx={{
                bgcolor: 'rgba(231, 76, 60, 0.1)',
                color: '#E74C3C',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '16px',
                width: '180px',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(231, 76, 60, 0.2)',
                }
              }}
              onClick={() => {
                if (initialData?.personalizedCategoryId) {
                  handleDeleteCategory(initialData.personalizedCategoryId);
                  onClose();
                }
              }}
            >
              Eliminar categoría
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default CategoryModal;