'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import Section from '../layout/Section';
import Container from '../layout/Container';

export default function GateNotesTeaser() {
    return (
        <Section id="gate-notes" background="default">
            <Container>
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #F59E0B 100%)',
                        borderRadius: 3,
                        p: { xs: 3, md: 6 },
                        textAlign: 'center',
                        color: 'white',
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
                        📚 GATE CS Notes
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
                        Free comprehensive notes downloaded <strong>100K+ times</strong> by GATE aspirants since 2013
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

                    <Link href="/gate-notes" passHref>
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
                            View All Notes & Download
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Section>
    );
}
