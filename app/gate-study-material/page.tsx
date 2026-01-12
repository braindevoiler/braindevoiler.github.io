'use client';

import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    Stack,
    IconButton,
    Tab,
    Tabs,
    AppBar,
    Toolbar,
    Collapse
} from '@mui/material';
import {
    ArrowBack,
    Download,
    CalendarToday,
    AccessTime,
    ExpandMore,
    ExpandLess,
    MenuBook,
    Article
} from '@mui/icons-material';
import Link from 'next/link';
import { gateNotes } from '@/data/gateNotes';
import { trackEvent } from '@/lib/analytics';
import { blogPosts, BlogPost } from '@/data/blog';
import { motion } from 'framer-motion';

// Reusing BlogCard logic inline
function BlogCard({ post }: { post: BlogPost }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1, p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {post.title}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: '0.875rem' }}>
                        <CalendarToday sx={{ fontSize: 16 }} /> {post.date}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: '0.875rem' }}>
                        <AccessTime sx={{ fontSize: 16 }} /> {post.readTime}
                    </Box>
                </Stack>

                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {post.excerpt}
                </Typography>

                <Collapse in={expanded}>
                    <Box
                        sx={{ mb: 2, color: 'text.primary' }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </Collapse>

                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2, mt: 'auto' }}>
                    {post.tags.slice(0, 3).map((tag, i) => (
                        <Chip
                            key={i}
                            label={tag}
                            size="small"
                            sx={{ bgcolor: 'action.hover' }}
                        />
                    ))}
                </Stack>

                <Button
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
                    size="small"
                >
                    {expanded ? 'Show Less' : 'Read Full Article'}
                </Button>
            </CardContent>
        </Card>
    );
}

export default function GateResourcesPage() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#F9FAFB', pb: 8 }}>
            {/* Navigation */}
            <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
                <Toolbar>
                    <Link href="/" passHref>
                        <IconButton edge="start" sx={{ mr: 2 }}>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
                        GATE Study Material
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box sx={{
                background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                color: 'white',
                py: { xs: 6, md: 10 },
                textAlign: 'center'
            }}>
                <Container maxWidth="md">
                    <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
                        GATE Study Material
                    </Typography>
                    <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                        Comprehensive notes and preparation strategy for GATE Computer Science aspirants
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={4}
                        justifyContent="center"
                        sx={{ bgcolor: 'rgba(255,255,255,0.1)', py: 3, borderRadius: 2, backdropFilter: 'blur(5px)' }}
                    >
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>10</Typography>
                            <Typography variant="body2">Core Subjects</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>100K+</Typography>
                            <Typography variant="body2">Downloads</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>AIR 54</Typography>
                            <Typography variant="body2">Provenance</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* Content Section */}
            <Container sx={{ mt: 4 }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    centered
                    sx={{ mb: 6 }}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab icon={<MenuBook />} label="Subject Notes" iconPosition="start" />
                    <Tab icon={<Article />} label="Preparation Strategy" iconPosition="start" />
                </Tabs>

                {/* Notes Tab */}
                {tabValue === 0 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Grid container spacing={3}>
                            {gateNotes.map((note) => (
                                <Grid item xs={12} sm={6} md={4} key={note.id}>
                                    <Card sx={{ height: '100%', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <Box sx={{ fontSize: '2.5rem', mr: 2 }}>{note.icon}</Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
                                                    {note.subject}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                                                {note.description}
                                            </Typography>

                                            <Box sx={{ mb: 2 }}>
                                                {note.topics.slice(0, 3).map(topic => (
                                                    <Chip key={topic} label={topic} size="small" sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem' }} />
                                                ))}
                                            </Box>

                                            <Button
                                                variant="outlined"
                                                fullWidth
                                                startIcon={<Download />}
                                                href={note.pdfPath}
                                                target="_blank"
                                                onClick={() => trackEvent('download', 'GATE Notes', note.subject)}
                                            >
                                                Download PDF
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                )}

                {/* Blogs Tab */}
                {tabValue === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Grid container spacing={3}>
                            {blogPosts.map((post) => (
                                <Grid item xs={12} md={6} key={post.id}>
                                    <BlogCard post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                )}
            </Container>
        </Box>
    );
}
