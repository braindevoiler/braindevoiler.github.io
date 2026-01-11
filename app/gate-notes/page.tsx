'use client';

import { Box, Typography, Card, CardContent, Button, Container, Stack } from '@mui/material';
import { Download, ArrowBack, School, ArrowForward } from '@mui/icons-material';
import { gateNotes } from '@/data/gateNotes';
import Link from 'next/link';

// Google colors for cycling
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#F59E0B', '#34A853'];

export default function GateNotesPage() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#FAFAFA' }}>
            {/* Header */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #F59E0B 100%)',
                    color: 'white',
                    py: { xs: 6, md: 10 },
                    mb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Link href="/" passHref>
                        <Button
                            startIcon={<ArrowBack />}
                            sx={{
                                color: 'white',
                                mb: 4,
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                            }}
                        >
                            Back to Portfolio
                        </Button>
                    </Link>

                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                        <School sx={{ fontSize: 48 }} />
                        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }}>
                            GATE CS Notes
                        </Typography>
                    </Stack>

                    <Typography variant="h5" sx={{ opacity: 0.95, mb: 2, fontWeight: 400 }}>
                        Free comprehensive notes downloaded 100K+ times by GATE aspirants since 2013
                    </Typography>

                    <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>100K+</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Downloads</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>10+</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Subjects</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>AIR 54</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8 }}>Author's Rank</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* About Section */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <Card sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#4285F4' }}>
                        About These Notes
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                        These notes were created during my GATE preparation journey in 2012. After securing <strong>All India Rank 54</strong> in GATE Computer Science,
                        I decided to share these notes with the community to help fellow aspirants.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                        Over the years, these notes have been downloaded more than <strong>100,000 times</strong> and have helped
                        thousands of students in their GATE preparation. The notes cover all major subjects
                        in the GATE CS syllabus with concise explanations and important concepts.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                        <em>Feel free to download, share, and use these notes for your preparation. Best of luck!</em>
                    </Typography>
                </Card>
            </Container>

            {/* Notes Grid */}
            <Container maxWidth="lg" sx={{ pb: 8 }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    Download Notes by Subject
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
                        gap: 3,
                    }}
                >
                    {gateNotes.map((note, index) => {
                        const accentColor = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
                        return (
                            <Card
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease',
                                    borderTop: `4px solid ${accentColor}`,
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 20px 25px -5px ${accentColor}30`,
                                    },
                                }}
                            >
                                <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ fontSize: 48, mb: 2, textAlign: 'center' }}>
                                        {note.icon}
                                    </Box>

                                    <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
                                        {note.subject}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {note.description}
                                    </Typography>

                                    <Box sx={{ mb: 2, flex: 1 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary', mb: 0.5, display: 'block' }}>
                                            Topics Covered:
                                        </Typography>
                                        {note.topics.slice(0, 5).map((topic, i) => (
                                            <Typography
                                                key={i}
                                                variant="caption"
                                                sx={{
                                                    display: 'block',
                                                    '&::before': {
                                                        content: '"• "',
                                                        color: accentColor,
                                                        mr: 0.5,
                                                    },
                                                }}
                                            >
                                                {topic}
                                            </Typography>
                                        ))}
                                        {note.topics.length > 5 && (
                                            <Typography variant="caption" color="text.disabled">
                                                +{note.topics.length - 5} more topics
                                            </Typography>
                                        )}
                                    </Box>

                                    <Link href={`/gate-notes/${note.id}`} passHref style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="contained"
                                            endIcon={<ArrowForward />}
                                            fullWidth
                                            sx={{
                                                mt: 'auto',
                                                bgcolor: accentColor,
                                                py: 1.5,
                                                boxShadow: 'none',
                                                '&:hover': {
                                                    bgcolor: accentColor,
                                                    filter: 'brightness(0.9)',
                                                    boxShadow: 2,
                                                },
                                            }}
                                        >
                                            View & Download
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: '#0A0A0A', color: 'white', py: 4, textAlign: 'center' }}>
                <Container>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        Created by Ankur Gupta • GATE CS 2012 AIR 54
                    </Typography>
                    <Link href="/" passHref>
                        <Button sx={{ color: 'white', mt: 1 }}>
                            Back to Portfolio
                        </Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    );
}
