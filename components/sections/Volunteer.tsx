'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { profileData } from '@/data/profile';

export default function Volunteer() {
    const { volunteer } = profileData;

    if (!volunteer || volunteer.length === 0) {
        return null;
    }

    return (
        <Section id="volunteer" background="default">
            <Container>
                <SectionTitle
                    title="Community & Volunteer Work"
                    subtitle="Giving back to the community"
                />

                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                    {volunteer.map((item, index) => (
                        <Card
                            key={index}
                            sx={{
                                mb: 3,
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: 4,
                                }
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {/* Icon */}
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 1,
                                            bgcolor: 'secondary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            fontSize: 28,
                                        }}
                                    >
                                        🤝
                                    </Box>

                                    {/* Content */}
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h3" gutterBottom>
                                            {item.role}
                                        </Typography>

                                        <Typography
                                            variant="h4"
                                            color="secondary"
                                            sx={{ mb: 1, fontWeight: 500 }}
                                        >
                                            {item.organization}
                                        </Typography>

                                        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                📅 {item.period}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                ⏱️ {item.duration}
                                            </Typography>
                                            {item.cause && (
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        bgcolor: 'action.hover',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: 1,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {item.cause}
                                                </Typography>
                                            )}
                                        </Box>

                                        <Typography variant="body1" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Section>
    );
}
