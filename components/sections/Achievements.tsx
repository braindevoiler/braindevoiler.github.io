'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function Achievements() {
  const { achievements } = profileData;

  return (
    <Section id="achievements" background="alternate">
      <Container>
        <SectionTitle
          title="Achievements & Recognition"
          subtitle="Milestones and accolades throughout my career"
        />

        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <GridContainer spacing={3} sx={{ justifyContent: 'center' }}>
            {achievements.map((achievement, index) => (
              <GridItem key={index} xs={12} sm={6}>
                <Card
                  component={achievement.link ? 'a' : 'div'}
                  href={achievement.link}
                  target={achievement.link ? '_blank' : undefined}
                  rel={achievement.link ? 'noopener noreferrer' : undefined}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    cursor: achievement.link ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    '&:hover': achievement.link ? {
                      transform: 'translateY(-4px) rotate(1deg)',
                    } : {},
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Box sx={{ fontSize: 48, mb: 2 }}>
                      {achievement.icon}
                    </Box>
                    <Typography variant="h4" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                      {achievement.detail}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.organization}
                    </Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ mt: 1, display: 'block' }}>
                      {achievement.date}
                    </Typography>
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
