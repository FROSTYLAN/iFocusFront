import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CategoryModal from '../components/CategoryModal.tsx';
import {
  BadHabitIcon,
  StudyIcon,
  ExerciseIcon,
  NutritionIcon,
  HealthIcon,
  ProductivityIcon,
  HygieneIcon,
  FinanceIcon,
  WellnessIcon,
  SocialIcon
} from '../components/icons/index.tsx';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label, color }) => (
  <Paper
    sx={{
      bgcolor: color,
      borderRadius: '12px',
      width: '80px',
      height: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      cursor: 'pointer',
    }}
  >
    {icon}
    <Typography variant="caption" sx={{ color: 'white', fontSize: '12px' }}>
      {label}
    </Typography>
  </Paper>
);

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<null | {
    name: string;
    icon: string;
    color: string;
  }>(null);

  const handleOpenModal = (category?: typeof selectedCategory) => {
    setSelectedCategory(category || null);
    setModalOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Categorías por defecto
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 2 
      }}>
        {defaultCategories.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            label={category.label}
            color={category.color}
          />
        ))}
      </Box>

      <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>
        Categorías personalizadas
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 2 
      }}>
        {/*
        <Paper
          onClick={() => handleOpenModal({
            name: 'Hachi',
            icon: 'school', 
            color: '#8B4513'
          })}
          sx={{
            bgcolor: '#8B4513',
            borderRadius: '12px',
            width: '80px',
            height: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
        >
          <School sx={{ color: 'white' }} />
          <Typography variant="caption" sx={{ color: 'white', fontSize: '12px' }}>
            Hachi
          </Typography>
        </Paper>
        */}
        <Paper
          onClick={() => handleOpenModal()}
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '2px dashed rgba(255, 255, 255, 0.3)',
          }}
        >
          <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.3)' }}>
            +
          </Typography>
        </Paper>
      </Box>

      <CategoryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        isEdit={!!selectedCategory}
        initialData={selectedCategory || undefined}
      />
    </Box>
  );
};

export default Categories;

const defaultCategories = [
  { icon: <BadHabitIcon color="white" size={32} />, label: 'Mal hábito', color: '#E74C3C' },
  { icon: <StudyIcon color="white" size={32} />, label: 'Estudio', color: '#9B59B6' },
  { icon: <ExerciseIcon color="white" size={32} />, label: 'Ejercicio', color: '#E67E22' },
  { icon: <NutritionIcon color="white" size={32} />, label: 'Nutrición', color: '#F1C40F' },
  { icon: <HealthIcon color="white" size={32} />, label: 'Salud', color: '#3498DB' },
  { icon: <ProductivityIcon color="white" size={32} />, label: 'Productividad', color: '#2ECC71' },
  { icon: <HygieneIcon color="white" size={32} />, label: 'Higiene', color: '#FF69B4' },
  { icon: <FinanceIcon color="white" size={32} />, label: 'Finanzas', color: '#16A085' },
  { icon: <WellnessIcon color="white" size={32} />, label: 'Bienestar', color: '#95A5A6' },
  { icon: <SocialIcon color="white" size={32} />, label: 'Social', color: '#9B59B6' }
];