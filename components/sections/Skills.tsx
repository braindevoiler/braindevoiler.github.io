'use client';

import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

// Google colors for cycling through categories
const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#F59E0B', '#34A853'];

export default function Skills() {
  const { skills } = profileData;

  return (
    <Section id="skills" background="default">
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Expertise across the full technology stack"
        />

        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
          <GridContainer spacing={3} sx={{ justifyContent: 'center' }}>
            {Object.entries(skills).map(([category, skillList], index) => {
              const accentColor = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
              return (
                <GridItem key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', borderTop: `3px solid ${accentColor}` }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h4" gutterBottom sx={{ color: accentColor, mb: 2 }}>
                        {category}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {skillList.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: 'background.default',
                              border: '1px solid',
                              borderColor: 'divider',
                              '&:hover': {
                                bgcolor: accentColor,
                                color: 'white',
                                borderColor: accentColor,
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </GridItem>
              );
            })}
          </GridContainer>
        </Box>
      </Container>
    </Section>
  );
}
