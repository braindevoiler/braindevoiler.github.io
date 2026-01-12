'use client';

import { Box, Typography, Button, Stack, Card, CardContent, Chip, Grid } from '@mui/material';
import { ArrowForward, VolunteerActivism, HealthAndSafety, Terminal } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { profileData } from '@/data/profile';

export default function Community() {
    const { volunteer } = profileData;

    return (
        <Section id="community" background="default">
            <Container>
                <SectionTitle
                    title="Community & Contributions"
                    subtitle="Giving back through open source and education"
                />

                {/* GATE Notes Teaser */}
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #F59E0B 100%)',
                        borderRadius: 3,
                        p: { xs: 3, md: 6 },
                        textAlign: 'center',
                        color: 'white',
                        mb: 8, // Spacing between GATE notes and Volunteer work
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            mb: { xs: 1.5, md: 2 },
                            fontWeight: 700,
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
                        }}
                    >
                        📚 GATE Study Material
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            mb: { xs: 2, md: 3 },
                            opacity: 0.95,
                            fontWeight: 400,
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            lineHeight: 1.4
                        }}
                    >
                        Comprehensive notes and preparation strategy for GATE Computer Science aspirants
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 2, sm: 4 }}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mb: { xs: 3, md: 4 } }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                                100K+
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                Downloads
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                                10+
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                Subjects
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                                AIR 54
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                Author's Rank
                            </Typography>
                        </Box>
                    </Stack>

                    <Link href="/gate-study-material" passHref>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{
                                bgcolor: 'white',
                                color: '#4285F4',
                                px: { xs: 3, md: 4 },
                                py: 1.5,
                                fontWeight: 600,
                                fontSize: { xs: '0.875rem', md: '1rem' },
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                },
                            }}
                        >
                            Access All Resources
                        </Button>
                    </Link>
                </Box>

                {/* Volunteer Work */}
                {volunteer && volunteer.length > 0 && (
                    <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
                        <Grid container spacing={3}>
                            {volunteer.map((item, index) => {
                                // Dynamic Icon Selection
                                let Icon = VolunteerActivism;
                                let iconColor = 'secondary.main';
                                let bgGradient = 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)';

                                if (item.organization.includes('COVID')) {
                                    Icon = HealthAndSafety;
                                    iconColor = '#EA4335'; // Google Red
                                    bgGradient = 'linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(234, 67, 53, 0.05) 100%)';
                                } else if (item.organization.includes('GLUG') || item.organization.includes('Linux')) {
                                    Icon = Terminal;
                                    iconColor = '#F59E0B'; // Google Yellow/Amber
                                    bgGradient = 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)';
                                }

                                return (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Card
                                            component={motion.div}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                                                },
                                                border: '1px solid',
                                                borderColor: 'divider',
                                            }}
                                        >
                                            <CardContent sx={{ p: 4, flex: 1 }}>
                                                <Box sx={{ display: 'flex', gap: 3, height: '100%' }}>
                                                    {/* Icon Box */}
                                                    <Box
                                                        sx={{
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: bgGradient,
                                                            color: iconColor,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        <Icon sx={{ fontSize: 28 }} />
                                                    </Box>

                                                    {/* Content */}
                                                    <Box sx={{ flex: 1 }}>
                                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3 }}>
                                                            {item.role}
                                                        </Typography>

                                                        <Typography
                                                            variant="subtitle1"
                                                            color="text.primary"
                                                            sx={{ mb: 1, fontWeight: 500, fontSize: '0.95rem', opacity: 0.9 }}
                                                        >
                                                            {item.organization}
                                                        </Typography>

                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                                            <Typography variant="caption" sx={{
                                                                color: 'text.secondary',
                                                                bgcolor: 'action.hover',
                                                                px: 1,
                                                                py: 0.5,
                                                                borderRadius: 1,
                                                                fontWeight: 500
                                                            }}>
                                                                {item.period}
                                                            </Typography>
                                                            {item.cause && (
                                                                <Typography variant="caption" sx={{
                                                                    color: iconColor, // Match icon color
                                                                    fontWeight: 600
                                                                }}>
                                                                    • {item.cause}
                                                                </Typography>
                                                            )}
                                                        </Box>

                                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                                            {item.description}
                                                        </Typography>

                                                        {item.link && (
                                                            <Button
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                size="small"
                                                                endIcon={<ArrowForward fontSize="small" />}
                                                                sx={{
                                                                    mt: 'auto',
                                                                    p: 0,
                                                                    minWidth: 'auto',
                                                                    color: 'primary.main',
                                                                    fontWeight: 600,
                                                                    '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                                                                }}
                                                            >
                                                                View Project
                                                            </Button>
                                                        )}
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                )}
            </Container>
        </Section >
    );
}
