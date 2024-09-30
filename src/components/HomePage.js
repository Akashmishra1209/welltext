import React from 'react'
import { Typography, Button, Container, Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import {
    TextFields,
    AutoFixHigh,
    Translate,
    Edit,
    Dashboard,
    Analytics,
    Speed,
    Security,
    Cloud,
    Devices
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const features = [
    {
        title: 'Comprehensive Text Analysis',
        icon: <TextFields />,
        description: 'Analyze your text with word count, character count, and more advanced metrics.'
    },
    {
        title: 'AI-Powered Improvements',
        icon: <AutoFixHigh />,
        description: 'Enhance your writing with AI-driven suggestions and improvements.'
    },
    {
        title: 'Multi-Language Support',
        icon: <Translate />,
        description: 'Translate and work with text in multiple languages, including Hindi.'
    },
    {
        title: 'Rich Text Editing',
        icon: <Edit />,
        description: 'Powerful rich text editor with formatting options similar to MS Word.'
    },
    {
        title: 'Interactive Whiteboard',
        icon: <Dashboard />,
        description: 'Visualize your ideas with our built-in digital whiteboard feature.'
    },
    {
        title: 'Advanced Text Transformations',
        icon: <Analytics />,
        description: 'Convert case, remove duplicates, format numbers, and more with a single click.'
    },
    {
        title: 'Fast and Efficient',
        icon: <Speed />,
        description: 'Quickly process and analyze large volumes of text with optimized algorithms.'
    },
    {
        title: 'Secure and Private',
        icon: <Security />,
        description: 'Your text remains private and secure, with options for local storage and encryption.'
    },
    {
        title: 'Save You Work',
        icon: <Cloud />,
        description: 'Save And Access Your Work.'
    },
    {
        title: 'Cross-Platform Compatibility',
        icon: <Devices />,
        description: 'Use WellText on any device - desktop, tablet, or mobile, with a responsive design.'
    }
]

const AnimatedBox = styled(Box)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
}))

export default function HomePage({ mode = 'light' }) {
    const isDarkMode = mode === 'dark'

    return (
        <>
        <Box sx={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            color: isDarkMode ? '#fff' : '#333',
            backgroundColor: isDarkMode ? '#121212' : '#fff',
            transition: 'background-color 0.3s ease',
            '& *': { boxSizing: 'border-box' }
        }}>
            <Box sx={{
                background: isDarkMode
                    ? 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'
                    : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                padding: '60px 0',
                boxShadow: isDarkMode
                    ? '0 3px 5px 2px rgba(25, 118, 210, .3)'
                    : '0 3px 5px 2px rgba(33, 203, 243, .3)',
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h1" component="h1" sx={{
                       color: isDarkMode ? '#fff' : '#333',
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    }}>
                        WellText
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{
                        color: isDarkMode ? '#fff' : '#333',
                        textAlign: 'center',
                        mt: 2,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    }}>
                        Your Ultimate Text Analysis and Transformation Tool
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{
                        fontWeight: 700,
                        color: isDarkMode ? '#fff' : '#333',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}>
                        Powerful Text Tools at Your Fingertips
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom sx={{
                        color: isDarkMode ? '#bbb' : '#666',
                        mb: 4,
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                    }}>
                        Analyze, transform, and perfect your text with ease
                    </Typography>
                        <Link to="/tools" className='text-decoration-none'>
                    <Button variant="contained" size="large" sx={{
                        background: isDarkMode
                            ? 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'
                            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        border: 0,
                        borderRadius: 3,
                        boxShadow: isDarkMode
                            ? '0 3px 5px 2px rgba(25, 118, 210, .3)'
                            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
                        color: 'white',
                        height: 56,
                        padding: '0 30px',
                        fontSize: '1.2rem',
                        '&:hover': {
                            background: isDarkMode
                                ? 'linear-gradient(45deg, #1a237e 50%, #0d47a1 100%)'
                                : 'linear-gradient(45deg, #2196F3 50%, #21CBF3 100%)',
                        },
                    }}>
                        Get Started
                    </Button>
                        </Link>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <AnimatedBox sx={{
                                background: isDarkMode ? '#1e1e1e' : '#fff',
                                borderRadius: '12px',
                                boxShadow: isDarkMode
                                    ? '0 4px 6px rgba(255, 255, 255, 0.1)'
                                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
                                padding: '32px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: isDarkMode ? 'rgba(33, 150, 243, 0.2)' : 'rgba(33, 150, 243, 0.1)',
                                    mb: 3,
                                }}>
                                    {React.cloneElement(feature.icon, {
                                        sx: { fontSize: '2.5rem', color: isDarkMode ? '#90caf9' : '#2196F3' }
                                    })}
                                </Box>
                                <Typography variant="h5" component="h3" gutterBottom sx={{
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    color: isDarkMode ? '#fff' : '#333',
                                    mb: 2,
                                }}>
                                    {feature.title}
                                </Typography>
                                <Typography sx={{
                                    textAlign: 'center',
                                    color: isDarkMode ? '#bbb' : '#666',
                                    flexGrow: 1,
                                    fontSize: '1rem',
                                    lineHeight: 1.6,
                                }}>
                                    {feature.description}
                                </Typography>
                            </AnimatedBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
        </>
    )
}