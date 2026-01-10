'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import Section from '../layout/Section';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

// Google colors for contact methods
const GOOGLE_COLORS = {
  blue: '#4285F4',
  red: '#EA4335',
  green: '#34A853',
};

export default function Contact() {
  const { personal } = profileData;

  const contactMethods = [
    {
      icon: <Email sx={{ fontSize: 48 }} />,
      label: 'Email',
      value: personal.email,
      link: `mailto:${personal.email}`,
      color: GOOGLE_COLORS.red,
    },
    {
      icon: <LinkedIn sx={{ fontSize: 48 }} />,
      label: 'LinkedIn',
      value: '26,000+ Followers',
      link: personal.linkedin,
      color: GOOGLE_COLORS.blue,
    },
    {
      icon: <GitHub sx={{ fontSize: 48 }} />,
      label: 'GitHub',
      value: '@braindevoiler',
      link: personal.github,
      color: GOOGLE_COLORS.green,
    },
  ];

  return (
    <Section
      id="contact"
      sx={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(66, 133, 244, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(52, 168, 83, 0.08) 0%, transparent 50%),
          #FFFFFF
        `,
      }}
    >
      <Container>
        <SectionTitle
          title="Let's Work Together"
          subtitle="Building something interesting? I'm always open to discussing new opportunities."
        />

        <GridContainer spacing={3} sx={{ maxWidth: 900, mx: 'auto', justifyContent: 'center' }}>
          {contactMethods.map((method, index) => (
            <GridItem key={index} xs={12} sm={4}>
              <Card
                component="a"
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderTop: `3px solid ${method.color}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 25px -5px ${method.color}30, 0 10px 10px -5px ${method.color}20`,
                  },
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <Box sx={{ color: method.color, mb: 2 }}>
                    {method.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {method.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {method.value}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </Section>
  );
}
