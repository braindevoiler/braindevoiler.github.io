'use client';

import { Box, Typography, Button, Container, Stack, Paper, CircularProgress } from '@mui/material';
import { Download, ArrowBack, Fullscreen } from '@mui/icons-material';
import Link from 'next/link';
import { gateNotes, GateNote } from '@/data/gateNotes';
import { useState } from 'react';

interface NoteViewerProps {
    noteId: string;
}

export default function NoteViewer({ noteId }: NoteViewerProps) {
    const [isLoading, setIsLoading] = useState(true);

    const note = gateNotes.find(n => n.id === noteId);

    if (!note) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Note Not Found</Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                        The requested GATE note could not be found.
                    </Typography>
                    <Link href="/gate-notes" passHref>
                        <Button variant="contained" startIcon={<ArrowBack />}>
                            Back to All Notes
                        </Button>
                    </Link>
                </Container>
            </Box>
        );
    }

    const handleFullscreen = () => {
        window.open(note.pdfPath, '_blank');
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#F5F5F5' }}>
            {/* Header */}
            <Box
                sx={{
                    bgcolor: '#4285F4',
                    color: 'white',
                    py: 3,
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    boxShadow: 2,
                }}
            >
                <Container maxWidth="xl">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        spacing={2}
                    >
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Link href="/gate-notes" passHref>
                                <Button
                                    startIcon={<ArrowBack />}
                                    sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                                >
                                    Back
                                </Button>
                            </Link>
                            <Box sx={{ fontSize: 32 }}>{note.icon}</Box>
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    {note.subject}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    GATE CS Notes
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                startIcon={<Fullscreen />}
                                onClick={handleFullscreen}
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.5)',
                                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                                }}
                            >
                                Open Fullscreen
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<Download />}
                                href={note.pdfPath}
                                download
                                sx={{
                                    bgcolor: 'white',
                                    color: '#4285F4',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                                }}
                            >
                                Download PDF
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* PDF Viewer */}
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Paper
                    elevation={3}
                    sx={{
                        height: 'calc(100vh - 180px)',
                        overflow: 'hidden',
                        borderRadius: 2,
                        position: 'relative',
                    }}
                >
                    {isLoading && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                            }}
                        >
                            <CircularProgress size={48} />
                            <Typography sx={{ mt: 2 }} color="text.secondary">
                                Loading PDF...
                            </Typography>
                        </Box>
                    )}
                    <iframe
                        src={note.pdfPath}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        title={`${note.subject} - GATE Notes`}
                        onLoad={() => setIsLoading(false)}
                    />
                </Paper>

                {/* Topics covered */}
                <Paper sx={{ mt: 3, p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#4285F4' }}>
                        Topics Covered in {note.subject}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {note.topics.map((topic, i) => (
                            <Box
                                key={i}
                                sx={{
                                    px: 2,
                                    py: 0.5,
                                    bgcolor: '#E3F2FD',
                                    borderRadius: 2,
                                    fontSize: '0.875rem',
                                }}
                            >
                                {topic}
                            </Box>
                        ))}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {note.description}
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}
