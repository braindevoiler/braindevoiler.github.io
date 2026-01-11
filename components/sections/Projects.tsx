'use client';

import { Box, Typography, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function Projects() {
  const { projects } = profileData;

  return (
    <Section id="projects" background="alternate">
      <Container>
        <SectionTitle
          title="Research & Open Source"
          subtitle="Published research and notable open source contributions"
        />

        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <GridContainer spacing={4} sx={{ justifyContent: 'center' }}>
            {projects.map((project, index) => (
              <GridItem key={index} xs={12} md={12}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Typography variant="h3" gutterBottom>
                      {project.name}
                    </Typography>

                    {project.institution && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {project.institution} • {project.period}
                      </Typography>
                    )}

                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>

                    {project.achievements && project.achievements.length > 0 && (
                      <Stack spacing={0.5} sx={{ mb: 2 }}>
                        {project.achievements.map((achievement, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              '&::before': {
                                content: '"• "',
                                color: 'secondary.main',
                                fontWeight: 700,
                                mr: 0.5,
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Stack>
                    )}

                    {project.skills && (
                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                        {project.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                            }}
                          />
                        ))}
                      </Stack>
                    )}

                    {project.link && (
                      <Button
                        variant="outlined"
                        endIcon={<ArrowForward />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 'auto' }}
                      >
                        View Project
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </Box>
      </Container>
    </Section>
  );
}
