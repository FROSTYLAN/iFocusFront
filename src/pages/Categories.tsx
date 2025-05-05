import React, { useState, useEffect } from 'react';
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

import { 
    getCategories, 
    // deleteCategory 
} from '../services/categoryService.ts';
import { toast } from 'react-toastify';

interface CategoryItemProps {
    icon: React.ReactNode;
    label: string;
    color: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, label, color }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '&:hover .category-text': {
                color: color
            }
        }}
    >
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
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 0 20px ${color}40`,
                },
                '&:active': {
                    transform: 'scale(0.95)',
                }
            }}
        >
            {icon}
        </Paper>
        <Typography
            className={'overpass category-text'}
            variant="caption"
            sx={{
                textAlign: 'center',
                color: 'white',
                fontSize: '14px',
                pt: '8px',
                transition: 'color 0.3s ease',
            }}
        >
            {label}
        </Typography>
    </Box>
);


const Categories = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<null | {
        id?: number;
        name: string;
        icon: string;
        color: string;
    }>(null);
    const [customCategories, setCustomCategories] = useState<any[]>([]);
    console.log(customCategories);

    const fetchCategories = async () => {
        try {
            const categories = await getCategories();
            setCustomCategories(categories);
        } catch (error) {
            toast.error('Error al cargar las categorías');
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // const handleDeleteCategory = async (id: number) => {
    //     try {
    //         await deleteCategory(id);
    //         toast.success('Categoría eliminada exitosamente');
    //         fetchCategories();
    //     } catch (error) {
    //         toast.error('Error al eliminar la categoría');
    //         console.error('Error:', error);
    //     }
    // };

    const handleOpenModal = (category?: typeof selectedCategory) => {
        setSelectedCategory(category || null);
        setModalOpen(true);
    };

    // const handleCloseModal = () => {
    //     setModalOpen(false);
    //     fetchCategories();
    // };

    return (
        <Box sx={{ pl: 10, pr: 10, pb: 8, pt: 8 }}>
            <Typography className='overpass' variant="h6" sx={{ mb: 2, width: '100%', fontSize: '24px' }}>
                Categorías por defecto
            </Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-start',
                gap: 6
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

            <Typography className='overpass' variant="h6" sx={{ mb: 2, width: '100%', fontSize: '24px', mt: '24px' }}>
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