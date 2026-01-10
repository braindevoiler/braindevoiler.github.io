'use client';

import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { profileData } from '@/data/profile';

export default function Footer() {
  const { personal } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0A0A0A',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="body1" sx={{ mb: 0.5, opacity: 0.9 }}>
              {personal.fullName} © {currentYear}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Built with Next.js & Material UI
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href={`mailto:${personal.email}`}
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
