'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function About() {
  const { about, personal, education } = profileData;

  return (
    <Section id="about" background="default">
      <Container>
        <SectionTitle title="About Me" />

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 900,
            mx: 'auto',
            mb: 6,
            color: 'text.primary',
          }}
        >
          {about.description}
        </Typography>

        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <GridContainer spacing={3} sx={{ justifyContent: 'center' }}>
            <GridItem xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', borderTop: '3px solid #4285F4' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>📍</Box>
                  <Typography variant="h4" gutterBottom sx={{ color: '#4285F4' }}>
                    Current
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {personal.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {personal.location}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', borderTop: '3px solid #34A853' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>🎓</Box>
                  <Typography variant="h4" gutterBottom sx={{ color: '#34A853' }}>
                    Education
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {education[0].institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {education[0].degree}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', borderTop: '3px solid #FBBC05' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>🏆</Box>
                  <Typography variant="h4" gutterBottom sx={{ color: '#FBBC05' }}>
                    Top Achievement
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    GATE CS 2012
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All India Rank 54
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>
        </Box>
      </Container>
    </Section>
  );
}
