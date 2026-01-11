'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, Download } from '@mui/icons-material';
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
                        p: { xs: 4, md: 6 },
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
                        📚 GATE CS Notes
                    </Typography>

                    <Typography variant="h5" sx={{ mb: 3, opacity: 0.95, fontWeight: 400 }}>
                        Free comprehensive notes downloaded <strong>100K+ times</strong> by GATE aspirants since 2013
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="center"
                        sx={{ mb: 4 }}
                    >
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>100K+</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Downloads</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>10+</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Subjects</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>AIR 54</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Author's Rank</Typography>
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
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
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
