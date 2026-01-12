'use client';

import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Brand colors matching the hero chips
const COLORS = {
  blue: '#4285F4',    // Google Blue
  amber: '#F59E0B',   // PayPal Amber
  green: '#34A853',   // IISc Green
  red: '#DB4437',     // Muted red (backup)
  yellow: '#FBBC05',  // Google Yellow (backup)
};

interface StatCardProps {
  number: string;
  label: string;
  color?: 'blue' | 'amber' | 'green' | 'red' | 'yellow';
}

export default function StatCard({ number, label, color = 'blue' }: StatCardProps) {
  const accentColor = COLORS[color];

  return (
    <Card
      component={motion.div}
      whileHover={{
        y: -8,
        boxShadow: `0 20px 40px -5px ${accentColor}30, 0 10px 20px -5px ${accentColor}20`,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      sx={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          borderColor: accentColor,
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
          py: { xs: 2, md: 3 },
          px: { xs: 1, md: 2 },
          minHeight: { xs: '90px', md: '120px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          variant="h3"
          sx={{
            color: accentColor,
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '32px', md: '48px' },
            mb: 0.5,
            lineHeight: 1,
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
            fontSize: { xs: '10px', sm: '12px', md: '14px' },
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
