'use client';

import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import StatCard from '../cards/StatCard';
import { GridContainer, GridItem } from '../layout/Grid';
import { profileData } from '@/data/profile';

export default function Hero() {
  const { personal, stats } = profileData;

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: `
          linear-gradient(135deg, rgba(66, 133, 244, 0.03) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 10% 20%, rgba(66, 133, 244, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 90% 20%, rgba(52, 168, 83, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 100%, rgba(251, 188, 5, 0.06) 0%, transparent 50%),
          linear-gradient(to bottom, #FAFAFA 0%, #FFFFFF 100%)
        `,
        overflow: 'hidden',
        pt: { xs: '64px', md: '80px' }, // Start content below header
        pb: 0,
      }}
    >
      <Container>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          sx={{
            textAlign: 'center',
          }}
        >
          {/* Name */}
          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            variant="h1"
            sx={{
              mb: { xs: 1, md: 2 },
              background: 'linear-gradient(135deg, #171717 0%, #525252 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {personal.fullName}
          </Typography>

          {/* Title */}
          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            variant="subtitle1"
            sx={{
              mb: { xs: 2, md: 3 },
              color: 'text.primary',
            }}
          >
            {personal.title}
          </Typography>

          {/* Company Pills - Distinct Colors */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            direction="row"
            spacing={{ xs: 1, md: 2 }}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mb: { xs: 3, md: 6 }, gap: { xs: 1, md: 2 } }}
          >
            <Chip
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
              label="Ex-Google"
              sx={{
                bgcolor: '#4285F4',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '14px', md: '16px' },
                px: { xs: 1.5, md: 2 },
                py: { xs: 1.5, md: 2.5 },
                height: 'auto',
              }}
            />
            <Chip
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
              label="Ex-PayPal"
              sx={{
                bgcolor: '#F59E0B',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '14px', md: '16px' },
                px: { xs: 1.5, md: 2 },
                py: { xs: 1.5, md: 2.5 },
                height: 'auto',
              }}
            />
            <Chip
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
              label="IISc Alumni"
              sx={{
                bgcolor: '#34A853',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '14px', md: '16px' },
                px: { xs: 1.5, md: 2 },
                py: { xs: 1.5, md: 2.5 },
                height: 'auto',
              }}
            />
          </Stack>

          {/* Stats Cards - Matching Chip Colors */}
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <GridContainer spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 3, md: 6 }, justifyContent: 'center' }}>
              <GridItem xs={4} sm={4}>
                <StatCard number={stats.experience} label="Years Experience" color="blue" />
              </GridItem>
              <GridItem xs={4} sm={4}>
                <StatCard number={stats.followers} label="LinkedIn Followers" color="amber" />
              </GridItem>
              <GridItem xs={4} sm={4}>
                <StatCard number={stats.gateRank} label="GATE Rank" color="green" />
              </GridItem>
            </GridContainer>
          </Box>

          {/* CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: { xs: 4, md: 8 } }}
          >
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Get In Touch
            </Button>
          </Stack>

          {/* Scroll Indicator - Hidden on mobile to save space */}
          <Box
            onClick={scrollToNextSection}
            sx={{
              display: { xs: 'none', md: 'block' },
              cursor: 'pointer',
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%': {
                  transform: 'translateY(-10px)',
                },
                '60%': {
                  transform: 'translateY(-5px)',
                },
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mb: 1,
                color: 'text.secondary',
              }}
            >
              Scroll
            </Typography>
            <KeyboardArrowDown
              sx={{
                fontSize: 32,
                color: 'primary.main',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
