'use client';

import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import { School } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function Education() {
  const { education } = profileData;

  return (
    <Section id="education" background="default">
      <Container>
        <SectionTitle title="Education" />

        <GridContainer spacing={3} sx={{ maxWidth: 1200, mx: 'auto', justifyContent: 'center' }}>
          {education.map((edu, index) => (
            <GridItem key={index} xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                      <School sx={{ fontSize: 32, color: 'white' }} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h3" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography variant="h4" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        {edu.field}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {edu.period}
                      </Typography>

                      {edu.skills && edu.skills.length > 0 && (
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                          {edu.skills.map((skill, i) => (
                            <Chip
                              key={i}
                              label={skill}
                              size="small"
                              sx={{
                                bgcolor: 'background.default',
                                border: '1px solid',
                                borderColor: 'divider',
                              }}
                            />
                          ))}
                        </Stack>
                      )}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}
