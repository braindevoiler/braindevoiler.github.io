'use client';

import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import { Work } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { profileData } from '@/data/profile';

export default function Experience() {
  const { experience } = profileData;

  return (
    <Section id="experience" background="alternate">
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="12+ years across leading tech companies"
        />

        <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
          {/* Vertical Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 0, md: 12 },
              top: 32,
              bottom: 32,
              width: 2,
              bgcolor: 'primary.light',
              display: { xs: 'none', md: 'block' },
            }}
          />

          {/* Experience Items */}
          <Stack spacing={4}>
            {experience.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  pl: { xs: 0, md: 4 },
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 0, md: 6 },
                    top: 24,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    border: '3px solid',
                    borderColor: 'background.default',
                    boxShadow: '0 0 0 4px rgba(30, 58, 138, 0.1)',
                    display: { xs: 'none', md: 'block' },
                  }}
                />

                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
                      {/* Company Icon */}
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Work sx={{ fontSize: 32, color: 'white' }} />
                      </Box>

                      {/* Company Info */}
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" gutterBottom>
                          {exp.company}
                        </Typography>
                        <Typography variant="h4" sx={{ color: 'text.secondary', mb: 0.5 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {exp.period} • {exp.duration}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Description */}
                    {exp.description && exp.description.length > 0 && (
                      <Stack spacing={1} sx={{ mb: exp.skills && exp.skills.length > 0 ? 2 : 0 }}>
                        {exp.description.map((desc, i) => (
                          <Typography
                            key={i}
                            variant="body1"
                            sx={{
                              lineHeight: 1.7,
                              '&::before': {
                                content: '"• "',
                                color: 'secondary.main',
                                fontWeight: 700,
                                mr: 1,
                              },
                            }}
                          >
                            {desc}
                          </Typography>
                        ))}
                      </Stack>
                    )}

                    {/* Skills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {exp.skills.slice(0, 10).map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Section>
  );
}
